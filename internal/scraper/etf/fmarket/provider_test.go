package fmarket

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"
)

func TestPriceProviderGetPricesSuccess(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var req navHistoryRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			t.Fatalf("decode request: %v", err)
		}
		if req.ProductID != 42 {
			t.Fatalf("unexpected product id: %d", req.ProductID)
		}
		if req.IsAllData != 1 {
			t.Fatalf("expected isAllData=1, got %d", req.IsAllData)
		}
		if req.FromDate != "20201122" || req.ToDate != "20251122" {
			t.Fatalf("unexpected date range: %s - %s", req.FromDate, req.ToDate)
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{
			"status": 200,
			"code": 200,
			"message": "success",
			"data": [{
				"id": 1,
				"createdAt": 1732245454319,
				"nav": 21742.0,
				"navDate": "2024-11-21",
				"productId": 42
			}]
		}`))
	}))
	defer server.Close()

	originalEndpoint := navHistoryEndpoint
	originalNow := nowFunc
	defer func() {
		navHistoryEndpoint = originalEndpoint
		nowFunc = originalNow
	}()

	navHistoryEndpoint = server.URL
	nowFunc = func() time.Time {
		return time.Date(2025, 11, 22, 0, 0, 0, 0, time.UTC)
	}

	provider := PriceProvider{}
	prices, err := provider.GetPrices("42", "VN100 ETF")
	if err != nil {
		t.Fatalf("GetPrices returned error: %v", err)
	}
	if len(prices) != 1 {
		t.Fatalf("expected 1 price, got %d", len(prices))
	}
	if prices[0].CommodityID != "42" {
		t.Fatalf("unexpected commodity id: %s", prices[0].CommodityID)
	}
	expectedDate := time.Date(2024, 11, 21, 0, 0, 0, 0, time.UTC)
	if !prices[0].Date.Equal(expectedDate) {
		t.Fatalf("unexpected date: %s", prices[0].Date)
	}
}

func TestPriceProviderHandlesHTTPFailure(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusBadRequest)
	}))
	defer server.Close()

	originalEndpoint := navHistoryEndpoint
	defer func() { navHistoryEndpoint = originalEndpoint }()

	navHistoryEndpoint = server.URL

	provider := PriceProvider{}
	if _, err := provider.GetPrices("42", "VN100 ETF"); err == nil {
		t.Fatalf("expected error for HTTP 400 response")
	}
}

func TestPriceProviderRejectsNonNumericProductID(t *testing.T) {
	provider := PriceProvider{}
	if _, err := provider.GetPrices("ETF-42", "VN100 ETF"); err == nil {
		t.Fatalf("expected error for non numeric product ID")
	}
}

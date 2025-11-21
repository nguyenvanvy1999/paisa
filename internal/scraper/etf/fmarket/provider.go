package fmarket

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"sort"
	"strconv"
	"time"

	"github.com/ananthakumaran/paisa/internal/config"
	"github.com/ananthakumaran/paisa/internal/model/price"
	"github.com/shopspring/decimal"
	"gorm.io/gorm"
)

const (
	requestDateLayout  = "20060102"
	responseDateLayout = "2006-01-02"
)

var (
	navHistoryEndpoint = "https://api.fmarket.vn/res/product/get-nav-history"
	httpClient         = &http.Client{Timeout: 15 * time.Second}
	nowFunc            = time.Now
)

type navHistoryRequest struct {
	IsAllData int    `json:"isAllData"`
	ProductID int    `json:"productId"`
	FromDate  string `json:"fromDate"`
	ToDate    string `json:"toDate"`
}

type navHistoryEntry struct {
	ID        int     `json:"id"`
	CreatedAt int64   `json:"createdAt"`
	NAV       float64 `json:"nav"`
	NAVDate   string  `json:"navDate"`
	ProductID int     `json:"productId"`
}

type navHistoryResponse struct {
	Status  int               `json:"status"`
	Code    int               `json:"code"`
	Message string            `json:"message"`
	Data    []navHistoryEntry `json:"data"`
}

type PriceProvider struct{}

func (p *PriceProvider) Code() string {
	return "vn-fmarket-etf"
}

func (p *PriceProvider) Label() string {
	return "Fmarket ETF Việt Nam"
}

func (p *PriceProvider) Description() string {
	return "Lấy NAV của các quỹ ETF Việt Nam từ Fmarket."
}

func (p *PriceProvider) AutoCompleteFields() []price.AutoCompleteField {
	return []price.AutoCompleteField{
		{
			Label:     "Product ID",
			ID:        "productId",
			Help:      "ID sản phẩm ETF trên Fmarket (ví dụ: 12)",
			InputType: "number",
		},
	}
}

func (p *PriceProvider) AutoComplete(_ *gorm.DB, _ string, _ map[string]string) []price.AutoCompleteItem {
	return []price.AutoCompleteItem{}
}

func (p *PriceProvider) ClearCache(_ *gorm.DB) {}

func (p *PriceProvider) GetPrices(code string, commodityName string) ([]*price.Price, error) {
	productID, err := strconv.Atoi(code)
	if err != nil {
		return nil, fmt.Errorf("product id phải là số: %w", err)
	}

	entries, err := fetchNavHistory(productID)
	if err != nil {
		return nil, err
	}

	return transformEntries(entries, code, commodityName)
}

func fetchNavHistory(productID int) ([]navHistoryEntry, error) {
	fromDate, toDate := buildDateRange()
	requestBody := navHistoryRequest{
		IsAllData: 1,
		ProductID: productID,
		FromDate:  fromDate,
		ToDate:    toDate,
	}

	bodyBytes, err := json.Marshal(requestBody)
	if err != nil {
		return nil, fmt.Errorf("không thể mã hóa request: %w", err)
	}

	req, err := http.NewRequest(http.MethodPost, navHistoryEndpoint, bytes.NewReader(bodyBytes))
	if err != nil {
		return nil, fmt.Errorf("không thể tạo request: %w", err)
	}

	req.Header.Set("Content-Type", "application/json")

	resp, err := httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("gọi API Fmarket lỗi: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("Fmarket trả về %d: %s", resp.StatusCode, string(body))
	}

	respBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("không thể đọc phản hồi: %w", err)
	}

	var navResponse navHistoryResponse
	if err := json.Unmarshal(respBytes, &navResponse); err != nil {
		return nil, fmt.Errorf("không thể parse phản hồi: %w", err)
	}

	if navResponse.Status != http.StatusOK || navResponse.Code != http.StatusOK {
		return nil, fmt.Errorf("Fmarket báo lỗi (%d/%d): %s", navResponse.Status, navResponse.Code, navResponse.Message)
	}

	if len(navResponse.Data) == 0 {
		return nil, fmt.Errorf("không nhận được bản ghi NAV nào cho productId=%d", productID)
	}

	return navResponse.Data, nil
}

func transformEntries(entries []navHistoryEntry, code, commodityName string) ([]*price.Price, error) {
	prices := make([]*price.Price, 0, len(entries))
	for _, entry := range entries {
		date, err := time.Parse(responseDateLayout, entry.NAVDate)
		if err != nil {
			return nil, fmt.Errorf("navDate không hợp lệ (%s): %w", entry.NAVDate, err)
		}

		value := decimal.NewFromFloat(entry.NAV)
		prices = append(prices, &price.Price{
			Date:          date,
			CommodityType: config.MutualFund,
			CommodityID:   code,
			CommodityName: commodityName,
			Value:         value,
		})
	}

	sort.Slice(prices, func(i, j int) bool {
		return prices[i].Date.Before(prices[j].Date)
	})

	return prices, nil
}

func buildDateRange() (string, string) {
	now := nowFunc().UTC()
	from := now.AddDate(-5, 0, 0)
	return from.Format(requestDateLayout), now.Format(requestDateLayout)
}

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
	return "vn-fmarket-mf"
}

func (p *PriceProvider) Label() string {
	return "Fmarket Quỹ Tương Hỗ Việt Nam"
}

func (p *PriceProvider) Description() string {
	return "Lấy NAV của các quỹ tương hỗ Việt Nam từ Fmarket."
}

func (p *PriceProvider) AutoCompleteFields() []price.AutoCompleteField {
	return []price.AutoCompleteField{
		{
			Label:     "Product ID",
			ID:        "productId",
			Help:      "ID sản phẩm quỹ tương hỗ trên Fmarket (ví dụ: 12)",
			InputType: "number",
		},
	}
}

func (p *PriceProvider) AutoComplete(_ *gorm.DB, field string, _ map[string]string) []price.AutoCompleteItem {
	if field != "productId" {
		return []price.AutoCompleteItem{}
	}

	mfList := []struct {
		ID        int    `json:"id"`
		Name      string `json:"name"`
		ShortName string `json:"shortName"`
		Code      string `json:"code"`
	}{
		{ID: 12, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU NĂNG ĐỘNG BẢO VIỆT", ShortName: "BVFED", Code: "BVFED"},
		{ID: 28, Name: "QUỸ ĐẦU TƯ CHỨNG KHOÁN NĂNG ĐỘNG DC", ShortName: "DCDS", Code: "VFMVF1"},
		{ID: 35, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU TĂNG TRƯỞNG MIRAE ASSET VIỆT NAM", ShortName: "MAGEF", Code: "MAGEF"},
		{ID: 87, Name: "QUỸ ĐẦU TƯ TĂNG TRƯỞNG BORDIER - MB FLAGSHIP", ShortName: "BMFF", Code: "BMFF"},
		{ID: 47, Name: "QUỸ ĐẦU TƯ GIÁ TRỊ MB CAPITAL", ShortName: "MBVF", Code: "MBVF"},
		{ID: 32, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU HÀNG ĐẦU VCBF", ShortName: "VCBF-BCF", Code: "VCBFBCF"},
		{ID: 58, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU UNITED ESG VIỆT NAM", ShortName: "UVEEF", Code: "UVEEF"},
		{ID: 79, Name: "QUỸ ĐẦU TƯ TĂNG TRƯỞNG THÀNH CÔNG", ShortName: "TCGF", Code: "TCGF"},
		{ID: 75, Name: "QUỸ ĐẦU TƯ BẢN VIỆT DISCOVERY", ShortName: "VCAMDF", Code: "VCAMDF"},
		{ID: 20, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU HƯNG THỊNH VINACAPITAL", ShortName: "VEOF", Code: "VEOF"},
		{ID: 72, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU MANULIFE", ShortName: "MAFEQI", Code: "MAFEQI"},
		{ID: 25, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU TẬP TRUNG CỔ TỨC DC", ShortName: "DCDE", Code: "VFMVF4"},
		{ID: 70, Name: "QUỸ ĐẦU TƯ CÂN BẰNG BẢN VIỆT", ShortName: "VCAMBF", Code: "VCAMBF"},
		{ID: 80, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU CỔ TỨC NĂNG ĐỘNG VINACAPITAL", ShortName: "VDEF", Code: "VDEF"},
		{ID: 31, Name: "QUỸ ĐẦU TƯ CÂN BẰNG CHIẾN LƯỢC VCBF", ShortName: "VCBF-TBF", Code: "VCBFTBF"},
		{ID: 11, Name: "QUỸ ĐẦU TƯ LỢI THẾ CẠNH TRANH BỀN VỮNG SSI", ShortName: "SSISCA", Code: "SSISCA"},
		{ID: 89, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU ESG EASTSPRING INVESTMENTS VIỆT NAM", ShortName: "EVESG", Code: "EVESG"},
		{ID: 66, Name: "QUỸ ĐẦU TƯ CHỌN LỌC PHÚ HƯNG VIỆT NAM", ShortName: "PHVSF", Code: "PHVSF"},
		{ID: 41, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU TĂNG TRƯỞNG BALLAD VIỆT NAM", ShortName: "TBLF", Code: "TBLF"},
		{ID: 29, Name: "QUỸ ĐẦU TƯ TĂNG TRƯỞNG DFVN", ShortName: "DCAF", Code: "DCAF"},
		{ID: 81, Name: "QUỸ ĐẦU TƯ NĂNG ĐỘNG EASTSPRING INVESTMENTS VIỆT NAM", ShortName: "ENF", Code: "ENF"},
		{ID: 23, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU TIẾP CẬN THỊ TRƯỜNG VINACAPITAL", ShortName: "VESAF", Code: "VESAF"},
		{ID: 49, Name: "QUỸ ĐẦU TƯ TĂNG TRƯỞNG DÀI HẠN VIỆT NAM", ShortName: "VLGF", Code: "VLGF"},
		{ID: 68, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU KINH TẾ HIỆN ĐẠI VINACAPITAL", ShortName: "VMEEF", Code: "VMPF"},
		{ID: 76, Name: "QUỸ ĐẦU TƯ NĂNG ĐỘNG LIGHTHOUSE", ShortName: "LHCDF", Code: "LHCDF"},
		{ID: 71, Name: "QUỸ ĐẦU TƯ CÂN BẰNG MANULIFE", ShortName: "MAFBAL", Code: "MAFBAL"},
		{ID: 22, Name: "QUỸ ĐẦU TƯ CÂN BẰNG TUỆ SÁNG VINACAPITAL", ShortName: "VIBF", Code: "VIBF"},
		{ID: 77, Name: "QUỸ ĐẦU TƯ NĂNG ĐỘNG MANULIFE", ShortName: "MDI", Code: "MDI"},
		{ID: 46, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU TĂNG TRƯỞNG VCBF", ShortName: "VCBF-MGF", Code: "VCBFMGF"},
		{ID: 38, Name: "QUỸ ĐẦU TƯ CHỦ ĐỘNG VND", ShortName: "VNDAF", Code: "VNDAF"},
		{ID: 14, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU TRIỂN VỌNG BẢO VIỆT", ShortName: "BVPF", Code: "BVPF"},
		{ID: 52, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU TRIỂN VỌNG NTP", ShortName: "NTPPF", Code: "TVPF"},
		{ID: 78, Name: "QUỸ ĐẦU TƯ UNITED THU NHẬP NĂNG ĐỘNG VIỆT NAM", ShortName: "UVDIF", Code: "UVDIF"},
		{ID: 62, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU LỢI TỨC CAO HD", ShortName: "HDBOND", Code: "HDBOND"},
		{ID: 64, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU LIGHTHOUSE", ShortName: "LHBF", Code: "LHBF"},
		{ID: 48, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU MB", ShortName: "MBBOND", Code: "MBBOND"},
		{ID: 37, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU VND", ShortName: "VNDBF", Code: "VNDBF"},
		{ID: 13, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU BẢO VIỆT ", ShortName: "BVBF", Code: "BVBF"},
		{ID: 33, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU VCBF", ShortName: "VCBF-FIF", Code: "VCBFFIF"},
		{ID: 27, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU DC", ShortName: "DCBF", Code: "VFMVFB"},
		{ID: 21, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU BẢO THỊNH VINACAPITAL", ShortName: "VFF", Code: "VFF"},
		{ID: 50, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU LINH HOẠT MIRAE ASSET VIỆT NAM", ShortName: "MAFF", Code: "MAFF"},
		{ID: 63, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU BẢN VIỆT", ShortName: "VCAMFI", Code: "VCAMFI"},
		{ID: 88, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU DÒNG TIỀN LINH HOẠT MB", ShortName: "MBAM", Code: "MBAM"},
		{ID: 65, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU AN BÌNH", ShortName: "ABBF", Code: "ABBF"},
		{ID: 40, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU LINH HOẠT VND", ShortName: "VNDCF", Code: "VNDCF"},
		{ID: 67, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU GIA TĂNG THU NHẬP CỐ ĐỊNH DC", ShortName: "DCIP", Code: "VFMVFC"},
		{ID: 45, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU PVCOM", ShortName: "PVBF", Code: "PVBF"},
		{ID: 8, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU SSI", ShortName: "SSIBF", Code: "SSIBF"},
		{ID: 51, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU AN TOÀN AMBER", ShortName: "ASBF", Code: "ASBF"},
		{ID: 53, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU THANH KHOẢN VINACAPITAL", ShortName: "VLBF", Code: "VLBF"},
		{ID: 30, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU DFVN", ShortName: "DFIX", Code: "DFIX"},
		{ID: 61, Name: "QUỸ ĐẦU TƯ CÂN BẰNG PVCOM", ShortName: "PBIF", Code: "PBIF"},
		{ID: 90, Name: "QUỸ ĐẦU TƯ KIẾN TẠO TƯƠNG LAI SSI", ShortName: "SSI-EF", Code: "SSIEF"},
		{ID: 86, Name: "QUỸ ĐẦU TƯ CỔ PHIẾU CỔ TỨC TĂNG TRƯỞNG KIM", ShortName: "KDEF", Code: "KDEF"},
		{ID: 83, Name: "QUỸ ĐẦU TƯ THỊNH VƯỢNG RỒNG VIỆT", ShortName: "RVPIF", Code: "RVPF24"},
		{ID: 82, Name: "QUỸ ĐẦU TƯ THU NHẬP CHỦ ĐỘNG VCBF", ShortName: "VCBF-AIF", Code: "VCBFAIF"},
		{ID: 69, Name: "QUỸ ĐẦU TƯ TRÁI PHIẾU LP", ShortName: "LPBF", Code: "GFMVIF"},
	}

	items := make([]price.AutoCompleteItem, 0, len(mfList))
	for _, mf := range mfList {
		items = append(items, price.AutoCompleteItem{
			Label: fmt.Sprintf("%s (%s) - %s", mf.ShortName, mf.Code, mf.Name),
			ID:    strconv.Itoa(mf.ID),
		})
	}

	return items
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

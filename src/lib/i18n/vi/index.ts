import type { Translation } from "../i18n-types";

const vi: Translation = {
  common: {
    appName: "Paisa",
    loading: "Đang tải…",
    selectLanguage: "Ngôn ngữ",
    switchLanguage: "Đổi ngôn ngữ",
    readonlyTag: "chỉ đọc",
    readonlyTooltip: "Paisa đang ở chế độ chỉ đọc"
  },
  auth: {
    login: {
      title: "Đăng nhập vào không gian làm việc",
      usernameLabel: "Tên đăng nhập",
      passwordLabel: "Mật khẩu",
      submit: "Đăng nhập",
      invalidCredentials: "Sai tên đăng nhập hoặc mật khẩu",
      helpLinkLabel: "Tìm hiểu thêm về Paisa"
    }
  },
  nav: {
    breadcrumb: {
      help: "Trợ giúp",
      unknown: "Không xác định"
    },
    legend: {
      cleared: "Đã đối soát",
      clearedLate: "Đối soát trễ",
      pastDue: "Quá hạn",
      upcoming: "Sắp tới"
    },
    sections: {
      dashboard: "Tổng quan",
      cashFlow: {
        label: "Dòng tiền",
        incomeStatement: "Báo cáo thu nhập",
        monthly: "Theo tháng",
        yearly: "Theo năm",
        recurring: "Định kỳ"
      },
      expenses: {
        label: "Chi tiêu",
        monthly: "Theo tháng",
        yearly: "Theo năm",
        budget: "Ngân sách"
      },
      assets: {
        label: "Tài sản",
        balance: "Số dư",
        networth: "Giá trị ròng",
        investment: "Đầu tư",
        gain: "Lợi nhuận",
        allocation: "Phân bổ",
        analysis: "Phân tích"
      },
      liabilities: {
        label: "Nợ phải trả",
        balance: "Số dư",
        creditCards: "Thẻ tín dụng",
        repayment: "Trả nợ",
        interest: "Lãi suất"
      },
      income: {
        label: "Thu nhập"
      },
      ledger: {
        label: "Sổ cái",
        import: "Nhập liệu",
        editor: "Trình sửa",
        transactions: "Giao dịch",
        postings: "Hạch toán",
        price: "Giá"
      },
      more: {
        label: "Khác",
        config: "Cấu hình",
        sheets: "Bảng tính",
        goals: "Mục tiêu",
        doctor: "Doctor",
        logs: "Nhật ký",
        tax: "Thuế",
        taxHarvest: "Thu hoạch",
        taxCapitalGains: "Lãi vốn",
        taxScheduleAL: "Schedule AL",
        about: "Giới thiệu"
      }
    }
  },
  error: {
    notFoundTitle: "Không tìm thấy trang",
    notFoundBody: "Trang bạn truy cập không tồn tại hoặc đã được di chuyển.",
    notFoundCta: "Quay lại trang chủ",
    genericTitle: "Đã xảy ra lỗi",
    genericBody: "Paisa gặp sự cố nghiêm trọng",
    bugReportLabel: "Báo lỗi lên GitHub",
    restartHint: "Hãy thử đóng và mở lại ứng dụng.",
    detailsLabel: "Chi tiết"
  }
};

export default vi;


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
  },
  tables: {
    columns: {
      account: "Tài khoản",
      marketValue: "Giá trị thị trường",
      percent: "Phần trăm",
      percentSymbol: "%",
      drawnAmount: "Số tiền đã rút",
      repaidAmount: "Số tiền đã trả",
      balanceAmount: "Số dư",
      interest: "Lãi suất",
      apr: "APR",
      investmentAmount: "Số tiền đầu tư",
      withdrawalAmount: "Số tiền rút",
      balanceUnits: "Số đơn vị dư",
      change: "Thay đổi",
      xirr: "XIRR",
      absoluteReturn: "Lợi nhuận tuyệt đối",
      commodityName: "Tên hàng hóa",
      lastDate: "Ngày cuối",
      lastPrice: "Giá cuối",
      oneDay: "1 Ngày",
      oneWeek: "1 Tuần",
      fourWeeks: "4 Tuần",
      oneYear: "1 Năm",
      threeYears: "3 Năm",
      fiveYears: "5 Năm",
      commodityType: "Loại hàng hóa",
      commodityId: "ID Hàng hóa",
      code: "Mã",
      section: "Phần",
      details: "Chi tiết",
      amount: "Số tiền",
      endBalance: "Số dư cuối",
      startBalance: "Số dư đầu"
    },
    allocation: {
      columns: {
        account: "Tài khoản",
        marketValue: "Giá trị thị trường",
        percent: "Phần trăm",
        percentSymbol: "%"
      },
      labels: {
        allocationTargets: "Mục tiêu phân bổ",
        allocationByCategory: "Phân bổ theo danh mục",
        allocationByValue: "Phân bổ theo giá trị",
        allocationTimeline: "Dòng thời gian phân bổ",
        allocationTable: "Bảng phân bổ"
      }
    },
    liabilities: {
      columns: {
        account: "Tài khoản",
        drawnAmount: "Số tiền đã rút",
        repaidAmount: "Số tiền đã trả",
        balanceAmount: "Số dư",
        interest: "Lãi suất",
        apr: "APR"
      },
      labels: {
        interestOverview: "Tổng quan lãi suất",
        monthlyRepaymentTimeline: "Dòng thời gian trả nợ hàng tháng",
        yearWiseSpends: "Chi tiêu theo năm",
        availableCredit: "Hạn mức khả dụng",
        creditUsage: "Mức sử dụng tín dụng",
        statementCount: "Số sao kê",
        transactionCount: "Số giao dịch",
        openingBalance: "Số dư đầu kỳ",
        debits: "Ghi nợ",
        credits: "Ghi có",
        amountDue: "Số tiền đến hạn",
        payment: "Thanh toán"
      },
      messages: {
        noLiabilities: "Tuyệt vời! Bạn không có khoản nợ nào.",
        noRepayments: "Bạn chưa trả khoản nợ nào.",
        noCreditCards: "Ối! Bạn chưa cấu hình thẻ tín dụng nào. Xem trang"
      }
    },
    assets: {
      columns: {
        account: "Tài khoản",
        investmentAmount: "Số tiền đầu tư",
        withdrawalAmount: "Số tiền rút",
        balanceUnits: "Số đơn vị dư",
        marketValue: "Giá trị thị trường",
        change: "Thay đổi",
        xirr: "XIRR",
        absoluteReturn: "Lợi nhuận tuyệt đối"
      }
    },
    price: {
      headers: {
        commodityName: "Tên hàng hóa",
        lastDate: "Ngày cuối",
        lastPrice: "Giá cuối",
        oneDay: "1 Ngày",
        oneWeek: "1 Tuần",
        fourWeeks: "4 Tuần",
        oneYear: "1 Năm",
        threeYears: "3 Năm",
        fiveYears: "5 Năm",
        commodityType: "Loại hàng hóa",
        commodityId: "ID Hàng hóa"
      },
      clearCache: "Xóa bộ nhớ đệm giá"
    },
    incomeStatement: {
      headers: {
        account: "Tài khoản",
        change: "Thay đổi",
        endBalance: "Số dư cuối",
        startBalance: "Số dư đầu"
      },
      labels: {
        income: "Thu nhập",
        tax: "Thuế",
        interest: "Lãi suất",
        gainLoss: "Lãi / Lỗ",
        equity: "Vốn chủ sở hữu",
        liabilities: "Nợ phải trả",
        expenses: "Chi phí"
      },
      summary: {
        start: "Đầu",
        end: "Cuối",
        change: "thay đổi"
      },
      messages: {
        noTransactions: "Ối! Bạn chưa thực hiện giao dịch nào trong năm đã chọn."
      }
    },
    scheduleAl: {
      headers: {
        code: "Mã",
        section: "Phần",
        details: "Chi tiết",
        amount: "Số tiền"
      },
      asOn: "Schedule AL tính đến ngày"
    }
  }
};

export default vi;

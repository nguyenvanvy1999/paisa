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
    },
    capitalGains: {
      summary: {
        withdrawn: "Đã rút",
        gain: "Lợi nhuận",
        taxableGain: "Lợi nhuận chịu thuế",
        shortTermTax: "Thuế ngắn hạn",
        longTermTax: "Thuế dài hạn",
        taxableAtSlabRate: "Chịu thuế theo bậc"
      },
      columns: {
        account: "Tài khoản",
        taxCategory: "Danh mục thuế",
        soldUnits: "Đơn vị đã bán",
        purchasePrice: "Giá mua",
        averagePurchaseUnitPrice: "Giá mua trung bình/đơn vị",
        sellPrice: "Giá bán",
        averageSellUnitPrice: "Giá bán trung bình/đơn vị",
        gain: "Lợi nhuận",
        taxableGain: "Lợi nhuận chịu thuế",
        shortTermTax: "Thuế ngắn hạn",
        longTermTax: "Thuế dài hạn",
        taxableAtSlabRate: "Chịu thuế theo bậc"
      },
      detail: {
        purchaseDate: "Ngày mua",
        purchasePrice: "Giá mua",
        sellDate: "Ngày bán",
        sellPrice: "Giá bán",
        gain: "Lợi nhuận",
        taxableGain: "Lợi nhuận chịu thuế",
        shortTermTax: "Thuế ngắn hạn",
        longTermTax: "Thuế dài hạn",
        taxableAtSlabRate: "Chịu thuế theo bậc"
      }
    },
    priceCodeSearch: {
      title: "Chọn nhà cung cấp giá",
      provider: "Nhà cung cấp",
      select: "Chọn",
      cancel: "Hủy",
      clearProviderCache: "Xóa bộ nhớ đệm nhà cung cấp"
    },
    bulkEdit: {
      renameAccount: "Đổi tên tài khoản",
      oldAccountName: "Tên tài khoản cũ",
      newAccountName: "Tên tài khoản mới",
      preview: "Xem trước"
    },
    dateRange: {
      all: "Tất cả",
      tenYears: "10 năm",
      fiveYears: "5 năm",
      threeYears: "3 năm",
      oneYear: "1 năm"
    }
  },
  spreadsheet: {
    unsupportedFileType: "Không hỗ trợ loại file {extension}",
    passwordPrompt: "Vui lòng nhập mật khẩu để mở file XLSX này. Nhấn hủy để thoát.",
    passwordRequired: "Yêu cầu mật khẩu.",
    unableToParsePasswordProtected: "Không thể phân tích file XLSX được bảo vệ bằng mật khẩu"
  },
  sync: {
    failedToSync: "Đồng bộ thất bại"
  },
  transactionSequence: {
    weekly: "hàng tuần",
    biWeekly: "hai tuần một lần",
    monthly: "hàng tháng",
    quarterly: "hàng quý",
    halfYearly: "nửa năm",
    yearly: "hàng năm",
    everyDays: "mỗi {days} ngày"
  },
  pdf: {
    passwordPrompt: "Vui lòng nhập mật khẩu để mở file PDF này. Nhấn hủy để thoát.",
    passwordRequired: "Yêu cầu mật khẩu."
  },
  editor: {
    invalidSyntax: "Cú pháp không hợp lệ",
    invalidDate: "Ngày không hợp lệ",
    cannotUseWith: "{property} không thể sử dụng với {operator} và {type}"
  },
  dashboard: {
    emptyState: {
      title: "Có vẻ như bạn mới ở đây, bạn có thể bắt đầu hoặc xem demo",
      getStarted: {
        title: "Tôi muốn bắt đầu",
        step1: "Đi đến trang cấu hình và thiết lập tiền tệ và ngôn ngữ mặc định.",
        step2: "Đi đến trang trình sửa và bắt đầu thêm giao dịch vào sổ cái.",
        configLink: "cấu hình",
        editorLink: "trình sửa"
      },
      viewDemo: {
        title: "Tôi muốn xem Demo",
        step1:
          "Nhấn nút bên dưới để tải demo. Điều này sẽ tải một sổ cái demo với cấu hình liên quan.",
        step2:
          "Sau khi bạn xong, bạn có thể đi đến trang trình sửa và chọn tất cả nội dung và xóa chúng.",
        step3: "Đi đến trang cấu hình và nhấn nút đặt lại về mặc định.",
        editorLink: "trình sửa",
        configLink: "cấu hình"
      },
      setupDemo: "Thiết lập Demo"
    },
    assets: {
      netWorth: "Giá trị ròng",
      netInvestment: "Đầu tư ròng",
      gainLoss: "Lãi / Lỗ",
      checkingBalance: "Số dư tài khoản"
    },
    cashFlow: {
      emptyState: "Ối! Bạn chưa thực hiện giao dịch nào trong 3 tháng qua."
    },
    expenses: {
      emptyState: "Tuyệt vời! Bạn không có chi tiêu nào trong tháng này."
    },
    recentTransactions: "Giao dịch gần đây"
  },
  config: {
    warning:
      "Giá <b>không</b> được tự động cập nhật sau khi thay đổi cấu hình. Sử dụng menu ở góc trên bên phải để cập nhật giá. Nếu sổ cái không đồng bộ do bất kỳ vấn đề nào, hãy sửa các vấn đề và sử dụng menu để đồng bộ lại.",
    save: "Lưu",
    cancel: "Hủy",
    resetToDefaults: "Đặt lại về Mặc định",
    resetConfirm:
      "Bạn có chắc chắn muốn đặt lại cấu hình về mặc định? Hành động này không thể hoàn tác.",
    saved: "Đã lưu cấu hình"
  },
  about: {
    version: "Phiên bản",
    links: "Liên kết"
  },
  import: {
    failedToSave: "Không thể lưu {name}. lý do: {reason}",
    saved: "Đã lưu {name}",
    deleteConfirm: "Bạn có chắc chắn muốn xóa mẫu {name}?",
    failedToRemove: "Không thể xóa {name}. lý do: {reason}",
    removed: "Đã xóa {name}"
  },
  price: {
    cacheCleared: "Đã xóa bộ nhớ đệm giá."
  }
};

export default vi;

import type { BaseTranslation } from "../i18n-types";

const en: BaseTranslation = {
  common: {
    appName: "Paisa",
    loading: "Loading…",
    selectLanguage: "Language",
    switchLanguage: "Switch language",
    readonlyTag: "readonly",
    readonlyTooltip: "Paisa is in readonly mode"
  },
  auth: {
    login: {
      title: "Sign in to your workspace",
      usernameLabel: "Username",
      passwordLabel: "Password",
      submit: "Login",
      invalidCredentials: "Incorrect username or password",
      helpLinkLabel: "Learn more about Paisa"
    }
  },
  nav: {
    breadcrumb: {
      help: "Help",
      unknown: "Unknown"
    },
    legend: {
      cleared: "Cleared",
      clearedLate: "Cleared late",
      pastDue: "Past due",
      upcoming: "Upcoming"
    },
    sections: {
      dashboard: "Dashboard",
      cashFlow: {
        label: "Cash Flow",
        incomeStatement: "Income Statement",
        monthly: "Monthly",
        yearly: "Yearly",
        recurring: "Recurring"
      },
      expenses: {
        label: "Expenses",
        monthly: "Monthly",
        yearly: "Yearly",
        budget: "Budget"
      },
      assets: {
        label: "Assets",
        balance: "Balance",
        networth: "Networth",
        investment: "Investment",
        gain: "Gain",
        allocation: "Allocation",
        analysis: "Analysis"
      },
      liabilities: {
        label: "Liabilities",
        balance: "Balance",
        creditCards: "Credit Cards",
        repayment: "Repayment",
        interest: "Interest"
      },
      income: {
        label: "Income"
      },
      ledger: {
        label: "Ledger",
        import: "Import",
        editor: "Editor",
        transactions: "Transactions",
        postings: "Postings",
        price: "Price"
      },
      more: {
        label: "More",
        config: "Configuration",
        sheets: "Sheets",
        goals: "Goals",
        doctor: "Doctor",
        logs: "Logs",
        tax: "Tax",
        taxHarvest: "Harvest",
        taxCapitalGains: "Capital Gains",
        taxScheduleAL: "Schedule AL",
        about: "About"
      }
    }
  },
  error: {
    notFoundTitle: "Page not found",
    notFoundBody:
      "The page you are looking for does not exist. It may have been moved or removed altogether.",
    notFoundCta: "Return to homepage",
    genericTitle: "Something went wrong",
    genericBody: "Paisa has encountered a critical error",
    bugReportLabel: "Report issue on GitHub",
    restartHint: "Closing and reopening the app may help.",
    detailsLabel: "Details"
  },
  tables: {
    columns: {
      account: "Account",
      marketValue: "Market Value",
      percent: "Percent",
      percentSymbol: "%",
      drawnAmount: "Drawn Amount",
      repaidAmount: "Repaid Amount",
      balanceAmount: "Balance Amount",
      interest: "Interest",
      apr: "APR",
      investmentAmount: "Investment Amount",
      withdrawalAmount: "Withdrawal Amount",
      balanceUnits: "Balance Units",
      change: "Change",
      xirr: "XIRR",
      absoluteReturn: "Absolute Return",
      commodityName: "Commodity Name",
      lastDate: "Last Date",
      lastPrice: "Last Price",
      oneDay: "1 Day",
      oneWeek: "1 Week",
      fourWeeks: "4 Weeks",
      oneYear: "1 Year",
      threeYears: "3 Years",
      fiveYears: "5 Years",
      commodityType: "Commodity Type",
      commodityId: "Commodity ID",
      code: "Code",
      section: "Section",
      details: "Details",
      amount: "Amount",
      endBalance: "End Balance",
      startBalance: "Start Balance"
    },
    allocation: {
      columns: {
        account: "Account",
        marketValue: "Market Value",
        percent: "Percent",
        percentSymbol: "%"
      },
      labels: {
        allocationTargets: "Allocation Targets",
        allocationByCategory: "Allocation by category",
        allocationByValue: "Allocation by value",
        allocationTimeline: "Allocation Timeline",
        allocationTable: "Allocation Table"
      }
    },
    liabilities: {
      columns: {
        account: "Account",
        drawnAmount: "Drawn Amount",
        repaidAmount: "Repaid Amount",
        balanceAmount: "Balance Amount",
        interest: "Interest",
        apr: "APR"
      },
      labels: {
        interestOverview: "Interest Overview",
        monthlyRepaymentTimeline: "Monthly Repayment Timeline",
        yearWiseSpends: "Year wise spends",
        availableCredit: "Available Credit",
        creditUsage: "Credit Usage",
        statementCount: "Statement Count",
        transactionCount: "Transaction Count",
        openingBalance: "Opening Balance",
        debits: "Debits",
        credits: "Credits",
        amountDue: "Amount Due",
        payment: "Payment"
      },
      messages: {
        noLiabilities: "Hurray! You have no liabilities.",
        noRepayments: "You haven't repaid any liabilities.",
        noCreditCards: "Oops! You haven't configured any credit cards yet. Checkout the"
      }
    },
    assets: {
      columns: {
        account: "Account",
        investmentAmount: "Investment Amount",
        withdrawalAmount: "Withdrawal Amount",
        balanceUnits: "Balance Units",
        marketValue: "Market Value",
        change: "Change",
        xirr: "XIRR",
        absoluteReturn: "Absolute Return"
      }
    },
    price: {
      headers: {
        commodityName: "Commodity Name",
        lastDate: "Last Date",
        lastPrice: "Last Price",
        oneDay: "1 Day",
        oneWeek: "1 Week",
        fourWeeks: "4 Weeks",
        oneYear: "1 Year",
        threeYears: "3 Years",
        fiveYears: "5 Years",
        commodityType: "Commodity Type",
        commodityId: "Commodity ID"
      },
      clearCache: "Clear Price Cache"
    },
    incomeStatement: {
      headers: {
        account: "Account",
        change: "Change",
        endBalance: "End Balance",
        startBalance: "Start Balance"
      },
      labels: {
        income: "Income",
        tax: "Tax",
        interest: "Interest",
        gainLoss: "Gain / Loss",
        equity: "Equity",
        liabilities: "Liabilities",
        expenses: "Expenses"
      },
      summary: {
        start: "Start",
        end: "End",
        change: "change"
      },
      messages: {
        noTransactions: "Oops! You have not made any transactions for the selected year."
      }
    },
    scheduleAl: {
      headers: {
        code: "Code",
        section: "Section",
        details: "Details",
        amount: "Amount"
      },
      asOn: "Schedule AL as on"
    },
    capitalGains: {
      summary: {
        withdrawn: "Withdrawn",
        gain: "Gain",
        taxableGain: "Taxable Gain",
        shortTermTax: "Short Term Tax",
        longTermTax: "Long Term Tax",
        taxableAtSlabRate: "Taxable at Slab Rate"
      },
      columns: {
        account: "Account",
        taxCategory: "Tax Category",
        soldUnits: "Sold Units",
        purchasePrice: "Purchase Price",
        averagePurchaseUnitPrice: "Average Purchase Unit Price",
        sellPrice: "Sell Price",
        averageSellUnitPrice: "Average Sell Unit Price",
        gain: "Gain",
        taxableGain: "Taxable Gain",
        shortTermTax: "Short Term Tax",
        longTermTax: "Long Term Tax",
        taxableAtSlabRate: "Taxable at Slab Rate"
      },
      detail: {
        purchaseDate: "Purchase Date",
        purchasePrice: "Purchase Price",
        sellDate: "Sell Date",
        sellPrice: "Sell Price",
        gain: "Gain",
        taxableGain: "Taxable Gain",
        shortTermTax: "Short Term Tax",
        longTermTax: "Long Term Tax",
        taxableAtSlabRate: "Taxable at Slab Rate"
      }
    },
    priceCodeSearch: {
      title: "Choose Price Provider",
      provider: "Provider",
      select: "Select",
      cancel: "Cancel",
      clearProviderCache: "Clear Provider Cache"
    },
    bulkEdit: {
      renameAccount: "Rename Account",
      oldAccountName: "Old Account name",
      newAccountName: "New Account name",
      preview: "Preview"
    },
    dateRange: {
      all: "All",
      tenYears: "10 years",
      fiveYears: "5 years",
      threeYears: "3 years",
      oneYear: "1 year"
    }
  },
  spreadsheet: {
    unsupportedFileType: "Unsupported file type {extension}",
    passwordPrompt: "Please enter the password to open this XLSX file. Press cancel to exit.",
    passwordRequired: "Password required.",
    unableToParsePasswordProtected: "Unable to parse Password protected XLSX"
  },
  sync: {
    failedToSync: "Failed to sync"
  },
  transactionSequence: {
    weekly: "weekly",
    biWeekly: "bi-weekly",
    monthly: "monthly",
    quarterly: "quarterly",
    halfYearly: "half-yearly",
    yearly: "yearly",
    everyDays: "every {days} days"
  },
  pdf: {
    passwordPrompt: "Please enter the password to open this PDF file. Press cancel to exit.",
    passwordRequired: "Password required."
  },
  editor: {
    invalidSyntax: "Invalid syntax",
    invalidDate: "Invalid date",
    cannotUseWith: "{property} cannot be used with {operator} and {type}"
  },
  dashboard: {
    emptyState: {
      title: "Looks like you are new here, you can either get started or look at a demo setup",
      getStarted: {
        title: "I want to get started",
        step1: "Go to configuration page and set your default currency and locale.",
        step2: "Go to editor page and start adding transactions to your journal.",
        configLink: "configuration",
        editorLink: "editor"
      },
      viewDemo: {
        title: "I want to view a Demo",
        step1:
          "Click the button below to load a demo setup. This will load a demo journal with relevant config.",
        step2:
          "Once you are done playing around, you can go to editor page and select all the content and delete them.",
        step3: "Go to configuration page and click the reset to defaults button.",
        editorLink: "editor",
        configLink: "configuration"
      },
      setupDemo: "Setup Demo"
    },
    assets: {
      netWorth: "Net worth",
      netInvestment: "Net Investment",
      gainLoss: "Gain / Loss",
      checkingBalance: "Checking Balance"
    },
    cashFlow: {
      emptyState: "Oops! You have not made any transactions in the last 3 months."
    },
    expenses: {
      emptyState: "Hurray! You have no expenses this month."
    },
    recentTransactions: "Recent Transactions"
  },
  config: {
    warning:
      "Prices are <b>not</b> automatically updated after config change. Use the menu at the top right corner to update prices. If the journal failed to sync due to any issues, fix the issues and use the menu to sync again.",
    save: "Save",
    cancel: "Cancel",
    resetToDefaults: "Reset to Defaults",
    resetConfirm:
      "Are you sure you want to reset the config to defaults? This action is not reversible.",
    saved: "Saved config"
  },
  about: {
    version: "Version",
    links: "Links"
  },
  import: {
    failedToSave: "Failed to save {name}. reason: {reason}",
    saved: "Saved {name}",
    deleteConfirm: "Are you sure you want to delete {name} template?",
    failedToRemove: "Failed to remove {name}. reason: {reason}",
    removed: "Removed {name}"
  },
  price: {
    cacheCleared: "Price cache cleared."
  }
};

export default en;

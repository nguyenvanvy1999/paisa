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
      messages: {
        noLiabilities: "Hurray! You have no liabilities."
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
    }
  }
};

export default en;

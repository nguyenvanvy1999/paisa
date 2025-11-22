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
  }
};

export default en;

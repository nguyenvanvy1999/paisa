<script lang="ts">
  import { page } from "$app/stores";
  import Actions from "$lib/components/Actions.svelte";
  import { month, year, dateMax, dateMin, dateRangeOption } from "../../store";
  import {
    cashflowExpenseDepth,
    cashflowExpenseDepthAllowed,
    cashflowIncomeDepth,
    cashflowIncomeDepthAllowed,
    obscure
  } from "../../persisted_store";
  import _ from "lodash";
  import { financialYear, forEachFinancialYear, helpUrl, isMobile, now } from "$lib/utils";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import DateRange from "./DateRange.svelte";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import MonthPicker from "./MonthPicker.svelte";
  import Logo from "./Logo.svelte";
  import InputRange from "./InputRange.svelte";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import LL from "$lib/i18n/i18n-svelte";
  import type { TranslationFunctions } from "$lib/i18n/i18n-types";
  export let isBurger: boolean = null;
  const readonly = USER_CONFIG.readonly;

  onMount(async () => {
    if (get(year) == "") {
      year.set(financialYear(now()));
    }
  });

  type LabelResolver = (ll: TranslationFunctions) => string;

  const RecurringIcons: { icon: string; color: string; label: LabelResolver }[] = [
    { icon: "fa-circle-check", color: "success", label: (ll) => ll.nav.legend.cleared() },
    { icon: "fa-circle-check", color: "warning-dark", label: (ll) => ll.nav.legend.clearedLate() },
    { icon: "fa-exclamation-triangle", color: "danger", label: (ll) => ll.nav.legend.pastDue() },
    { icon: "fa-circle-check", color: "grey", label: (ll) => ll.nav.legend.upcoming() }
  ];

  interface Link {
    label: LabelResolver;
    href: string;
    tag?: string;
    help?: string;
    hide?: boolean;
    dateRangeSelector?: boolean;
    monthPicker?: boolean;
    financialYearPicker?: boolean;
    maxDepthSelector?: boolean;
    recurringIcons?: boolean;
    children?: Link[];
    disablePreload?: boolean;
  }
  const links: Link[] = [
    { label: (ll) => ll.nav.sections.dashboard(), href: "/", hide: true },
    {
      label: (ll) => ll.nav.sections.cashFlow.label(),
      href: "/cash_flow",
      children: [
        {
          label: (ll) => ll.nav.sections.cashFlow.incomeStatement(),
          href: "/income_statement",
          financialYearPicker: true
        },
        {
          label: (ll) => ll.nav.sections.cashFlow.monthly(),
          href: "/monthly",
          dateRangeSelector: true
        },
        {
          label: (ll) => ll.nav.sections.cashFlow.yearly(),
          href: "/yearly",
          financialYearPicker: true,
          maxDepthSelector: true
        },
        {
          label: (ll) => ll.nav.sections.cashFlow.recurring(),
          href: "/recurring",
          help: "recurring",
          monthPicker: true,
          recurringIcons: true
        }
      ]
    },
    {
      label: (ll) => ll.nav.sections.expenses.label(),
      href: "/expense",
      children: [
        {
          label: (ll) => ll.nav.sections.expenses.monthly(),
          href: "/monthly",
          monthPicker: true,
          dateRangeSelector: true
        },
        {
          label: (ll) => ll.nav.sections.expenses.yearly(),
          href: "/yearly",
          financialYearPicker: true
        },
        {
          label: (ll) => ll.nav.sections.expenses.budget(),
          href: "/budget",
          help: "budget",
          monthPicker: true
        }
      ]
    },
    {
      label: (ll) => ll.nav.sections.assets.label(),
      href: "/assets",
      children: [
        { label: (ll) => ll.nav.sections.assets.balance(), href: "/balance" },
        {
          label: (ll) => ll.nav.sections.assets.networth(),
          href: "/networth",
          dateRangeSelector: true
        },
        { label: (ll) => ll.nav.sections.assets.investment(), href: "/investment" },
        { label: (ll) => ll.nav.sections.assets.gain(), href: "/gain" },
        {
          label: (ll) => ll.nav.sections.assets.allocation(),
          href: "/allocation",
          help: "allocation-targets"
        },
        {
          label: (ll) => ll.nav.sections.assets.analysis(),
          href: "/analysis",
          tag: "alpha",
          help: "analysis"
        }
      ]
    },
    {
      label: (ll) => ll.nav.sections.liabilities.label(),
      href: "/liabilities",
      children: [
        { label: (ll) => ll.nav.sections.liabilities.balance(), href: "/balance" },
        {
          label: (ll) => ll.nav.sections.liabilities.creditCards(),
          href: "/credit_cards",
          help: "credit-cards"
        },
        { label: (ll) => ll.nav.sections.liabilities.repayment(), href: "/repayment" },
        { label: (ll) => ll.nav.sections.liabilities.interest(), href: "/interest" }
      ]
    },
    { label: (ll) => ll.nav.sections.income.label(), href: "/income" },
    {
      label: (ll) => ll.nav.sections.ledger.label(),
      href: "/ledger",
      children: [
        { label: (ll) => ll.nav.sections.ledger["import"](), href: "/import", help: "import" },
        {
          label: (ll) => ll.nav.sections.ledger.editor(),
          href: "/editor",
          help: "editor",
          disablePreload: true
        },
        {
          label: (ll) => ll.nav.sections.ledger.transactions(),
          href: "/transaction",
          help: "bulk-edit"
        },
        { label: (ll) => ll.nav.sections.ledger.postings(), href: "/posting" },
        { label: (ll) => ll.nav.sections.ledger.price(), href: "/price" }
      ]
    },
    {
      label: (ll) => ll.nav.sections.more.label(),
      href: "/more",
      children: [
        { label: (ll) => ll.nav.sections.more.config(), href: "/config", help: "config" },
        {
          label: (ll) => ll.nav.sections.more.sheets(),
          href: "/sheets",
          help: "sheets",
          disablePreload: true
        },
        { label: (ll) => ll.nav.sections.more.goals(), href: "/goals", help: "goals" },
        { label: (ll) => ll.nav.sections.more.doctor(), href: "/doctor" },
        { label: (ll) => ll.nav.sections.more.logs(), href: "/logs" }
      ]
    }
  ];

  const tax = {
    label: (ll: TranslationFunctions) => ll.nav.sections.more.tax(),
    href: "/tax",
    help: "tax",
    children: [
      {
        label: (ll: TranslationFunctions) => ll.nav.sections.more.taxHarvest(),
        href: "/harvest",
        help: "tax-harvesting"
      },
      {
        label: (ll: TranslationFunctions) => ll.nav.sections.more.taxCapitalGains(),
        href: "/capital_gains",
        help: "capital-gains"
      },
      {
        label: (ll: TranslationFunctions) => ll.nav.sections.more.taxScheduleAL(),
        href: "/schedule_al",
        help: "schedule-al",
        financialYearPicker: true
      }
    ]
  };

  if (USER_CONFIG.default_currency == "INR") {
    _.last(links).children.push(tax);
  }

  const about = {
    label: (ll: TranslationFunctions) => ll.nav.sections.more.about(),
    href: "/about"
  };
  _.last(links).children.push(about);

  let selectedLink: Link = null;
  let selectedSubLink: Link = null;
  let selectedSubSubLink: Link = null;

  $: normalizedPath = $page.url.pathname?.replace(/(.+)\/$/, "");

  $: if (normalizedPath) {
    selectedSubLink = null;
    selectedSubSubLink = null;
    selectedLink = _.find(links, (l) => normalizedPath == l.href);
    if (!selectedLink) {
      selectedLink = _.find(
        links,
        (l) => !_.isEmpty(l.children) && normalizedPath.startsWith(l.href)
      );

      selectedSubLink = _.find(
        selectedLink.children,
        (l) => normalizedPath == selectedLink.href + l.href
      );

      if (!selectedSubLink) {
        selectedSubLink = _.find(selectedLink.children, (l) =>
          normalizedPath.startsWith(selectedLink.href + l.href)
        );

        if (!_.isEmpty(selectedSubLink.children)) {
          selectedSubSubLink = _.find(selectedSubLink.children, (l) =>
            normalizedPath.startsWith(selectedLink.href + selectedSubLink.href + l.href)
          );
        }
      }
    }
  }
</script>

<nav class="navbar px-2 is-transparent" aria-label="main navigation">
  <div class="navbar-brand">
    <a
      href="/"
      class:is-active={normalizedPath == "/"}
      class="navbar-item is-size-4 has-text-weight-medium"
    >
      {#if $obscure}
        <span class="icon is-small is-size-5">
          <i class="fas fa-user-secret" />
        </span><span class="ml-2 is-primary-color">{$LL.common.appName()}</span>
      {:else}
        <Logo size={22} /><span class="ml-1 is-primary-color">{$LL.common.appName()}</span>
      {/if}
    </a>
    <a
      role="button"
      tabindex="-1"
      class="navbar-burger"
      class:is-active={isBurger === true}
      on:click|preventDefault={(_e) => (isBurger = !isBurger)}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div class="navbar-menu" class:is-active={isBurger === true}>
    <div class="navbar-start">
      {#each links as link}
        {#if _.isEmpty(link.children)}
          {#if !link.hide}
            <a
              class="navbar-item"
              href={link.href}
              data-sveltekit-preload-data={link.disablePreload ? "tap" : "hover"}
              class:is-active={normalizedPath == link.href}>{link.label($LL)}</a
            >
          {/if}
        {:else}
          <div class="navbar-item has-dropdown is-hoverable">
            <a
              class="navbar-link"
              class:is-active={normalizedPath.startsWith(link.href)}
              on:click|preventDefault={(e) =>
                isMobile() && e.currentTarget.parentElement.classList.toggle("is-active")}
              >{link.label($LL)}</a
            >
            <div class="navbar-dropdown {!isMobile() && 'is-boxed'}">
              {#each link.children as sublink}
                {@const href = link.href + sublink.href}
                {#if _.isEmpty(sublink.children)}
                  <a
                    class="navbar-item"
                    {href}
                    data-sveltekit-preload-data={sublink.disablePreload ? "tap" : "hover"}
                    class:is-active={normalizedPath.startsWith(href)}>{sublink.label($LL)}</a
                  >
                {:else}
                  <div class="nested has-dropdown navbar-item">
                    <a
                      class="navbar-link is-arrowless is-flex is-justify-content-space-between is-active"
                      class:is-active={normalizedPath.startsWith(href)}
                    >
                      <span>{sublink.label($LL)}</span>
                      <span class="icon is-small">
                        <i
                          class="fas {isMobile() ? 'fa-angle-down' : 'fa-angle-right'}"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>

                    <div class="dropdown-menu">
                      <div class="dropdown-content">
                        {#each sublink.children as subsublink}
                          <a
                            href={href + subsublink.href}
                            class="navbar-item"
                            data-sveltekit-preload-data={subsublink.disablePreload
                              ? "tap"
                              : "hover"}
                            class:is-active={normalizedPath == href + subsublink.href}
                            >{subsublink.label($LL)}</a
                          >
                        {/each}
                      </div>
                    </div>
                  </div>
                {/if}
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    </div>
    <div class="navbar-end" style="margin-right: 0.3em">
      <div class="navbar-item">
        <div class="field is-grouped">
          {#if readonly}
            <p class="control">
              <span
                class="mt-1 tag is-rounded is-danger is-light invertable"
                data-tippy-content={`<p>${$LL.common.readonlyTooltip()}</p>`}
                >{$LL.common.readonlyTag()}</span
              >
            </p>
          {/if}

          <p class="control">
            <LanguageSwitcher />
          </p>
          <p class="control">
            <ThemeSwitcher />
          </p>
          <p class="control">
            <Actions />
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>

<div class="mt-3 px-3 is-flex is-justify-content-space-between">
  {#if selectedLink}
    <nav
      style="margin-left: 0.73rem;"
      class="breadcrumb has-chevron-separator mb-0 is-small"
      aria-label="breadcrumbs"
    >
      <ul>
        <li>
          <a class="is-inactive">{selectedLink.label($LL)}</a>
          {#if selectedLink.help}
            <a style="margin-left: -10px;" class="p-0" href={helpUrl(selectedLink.help)}
              ><span class="icon is-small">
                <i class="fas fa-question fa-border" />
              </span></a
            >
          {/if}

          {#if selectedLink.tag}
            <span style="font-size: 0.6rem" class="tag is-rounded is-warning"
              >{selectedLink.tag}</span
            >
          {/if}
        </li>
        {#if selectedSubLink}
          <li>
            <a class="is-inactive">{selectedSubLink.label($LL)}</a>

            {#if selectedSubLink.help}
              <a style="margin-left: -10px;" class="p-0" href={helpUrl(selectedSubLink.help)}
                ><span class="icon is-small">
                  <i class="fas fa-question fa-border" />
                </span></a
              >
            {/if}

            {#if selectedSubLink.tag}
              <span style="font-size: 0.6rem" class="tag is-rounded is-warning mr-2"
                >{selectedSubLink.tag}</span
              >
            {/if}
          </li>
        {/if}

        {#if selectedSubLink}
          {#if selectedSubSubLink}
            <li>
              <a class="is-inactive">{selectedSubSubLink.label($LL)}</a>
            </li>
          {:else if selectedLink.href + selectedSubLink.href != normalizedPath}
            <li>
              <a class="is-inactive">{decodeURIComponent(_.last(normalizedPath.split("/")))}</a>
            </li>
          {/if}
        {/if}
      </ul>
    </nav>
  {/if}

  <div class="mr-3 is-flex" style="gap: 12px">
    {#if selectedSubLink?.recurringIcons}
      <div class="flex gap-5 items-center has-text-grey">
        {#each RecurringIcons as icon}
          {@const legendLabel = icon.label($LL)}
          <div data-tippy-content={`<p>${legendLabel}</p>`}>
            <span class="icon is-small has-text-{icon.color}">
              <i class={"fas " + icon.icon} />
            </span>
            <span class="is-hidden-mobile">{legendLabel}</span>
          </div>
        {/each}
      </div>
    {/if}

    {#if selectedSubLink?.maxDepthSelector && ($cashflowExpenseDepthAllowed.max > 1 || $cashflowIncomeDepthAllowed.max > 1)}
      <div class="dropdown is-right is-hoverable">
        <div class="dropdown-trigger">
          <button class="button is-small" aria-haspopup="true">
            <span class="icon is-small">
              <i class="fas fa-sliders" />
            </span>
          </button>
        </div>
        <div class="dropdown-menu" role="menu">
          <div class="dropdown-content px-2 py-2">
            <InputRange
              label="Expenses"
              bind:value={$cashflowExpenseDepth}
              allowed={$cashflowExpenseDepthAllowed}
            />
            <InputRange
              label="Income"
              bind:value={$cashflowIncomeDepth}
              allowed={$cashflowIncomeDepthAllowed}
            />
          </div>
        </div>
      </div>
    {/if}

    {#if selectedSubLink?.dateRangeSelector || selectedLink?.dateRangeSelector}
      <div>
        <DateRange bind:value={$dateRangeOption} dateMin={$dateMin} dateMax={$dateMax} />
      </div>
    {/if}

    {#if selectedSubLink?.monthPicker || selectedLink?.monthPicker}
      <MonthPicker bind:value={$month} max={$dateMax} min={$dateMin} />
    {/if}

    {#if selectedSubSubLink?.financialYearPicker || selectedSubLink?.financialYearPicker || selectedLink?.financialYearPicker}
      <div class="has-text-centered">
        <div class="select is-small">
          <select bind:value={$year}>
            {#each forEachFinancialYear($dateMin, $dateMax).reverse() as fy}
              <option>{financialYear(fy)}</option>
            {/each}
          </select>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  li a span.icon {
    margin-top: -5px;
  }
</style>

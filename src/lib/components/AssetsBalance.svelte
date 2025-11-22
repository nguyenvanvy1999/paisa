<script lang="ts">
  import { type AssetBreakdown, buildTree } from "$lib/utils";
  import { LL } from "$lib/i18n/i18n-svelte";
  import _ from "lodash";
  import Table from "./Table.svelte";
  import type { ColumnDefinition } from "tabulator-tables";
  import {
    accountName,
    formatCurrencyChange,
    indendedAssetAccountName,
    nonZeroCurrency,
    nonZeroFloatChange,
    nonZeroPercentageChange
  } from "$lib/table_formatters";

  export let breakdowns: Record<string, AssetBreakdown>;
  export let indent = true;

  const columns: ColumnDefinition[] = [
    {
      title: $LL.tables.assets.columns.account(),
      field: "group",
      formatter: indent ? indendedAssetAccountName : accountName,
      frozen: true
    },
    {
      title: $LL.tables.assets.columns.investmentAmount(),
      field: "investmentAmount",
      hozAlign: "right",
      vertAlign: "middle",
      formatter: nonZeroCurrency
    },
    {
      title: $LL.tables.assets.columns.withdrawalAmount(),
      field: "withdrawalAmount",
      hozAlign: "right",
      formatter: nonZeroCurrency
    },
    {
      title: $LL.tables.assets.columns.balanceUnits(),
      field: "balanceUnits",
      hozAlign: "right",
      formatter: nonZeroCurrency
    },
    {
      title: $LL.tables.assets.columns.marketValue(),
      field: "marketAmount",
      hozAlign: "right",
      formatter: nonZeroCurrency
    },
    {
      title: $LL.tables.assets.columns.change(),
      field: "gainAmount",
      hozAlign: "right",
      formatter: formatCurrencyChange
    },
    {
      title: $LL.tables.assets.columns.xirr(),
      field: "xirr",
      hozAlign: "right",
      formatter: nonZeroFloatChange
    },
    {
      title: $LL.tables.assets.columns.absoluteReturn(),
      field: "absoluteReturn",
      hozAlign: "right",
      formatter: nonZeroPercentageChange
    }
  ];

  let tree: AssetBreakdown[] = [];
  $: if (breakdowns) {
    tree = buildTree(Object.values(breakdowns), (i) => i.group);
  }
</script>

{#if indent}
  <Table data={tree} tree {columns} />
{:else}
  <Table data={Object.values(breakdowns)} {columns} />
{/if}

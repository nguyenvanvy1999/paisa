<script lang="ts">
  import { formatCurrency, type FYCapitalGain } from "$lib/utils";
  import { LL } from "$lib/i18n/i18n-svelte";
  const DATE_FORMAT = "DD MMM YYYY";

  export let fyCapitalGain: FYCapitalGain;
</script>

<div>
  <table class="table is-narrow is-fullwidth is-bordered">
    <thead>
      <tr>
        <th>{$LL.tables.capitalGains.detail.purchaseDate()}</th>
        <th class="has-text-right">{$LL.tables.capitalGains.detail.purchasePrice()}</th>
        <th>{$LL.tables.capitalGains.detail.sellDate()}</th>
        <th class="has-text-right">{$LL.tables.capitalGains.detail.sellPrice()}</th>
        <th class="has-text-right">{$LL.tables.capitalGains.detail.gain()}</th>
        <th class="has-text-right">{$LL.tables.capitalGains.detail.taxableGain()}</th>
        <th class="has-text-right">{$LL.tables.capitalGains.detail.shortTermTax()}</th>
        <th class="has-text-right">{$LL.tables.capitalGains.detail.longTermTax()}</th>
        <th class="has-text-right">{$LL.tables.capitalGains.detail.taxableAtSlabRate()}</th>
      </tr>
    </thead>
    <tbody>
      {#each fyCapitalGain.posting_pairs as pp}
        <tr class="is-size-7">
          <td>{pp.purchase.date.format(DATE_FORMAT)}</td>
          <td class="has-text-right">{formatCurrency(pp.purchase.amount)}</td>
          <td>{pp.sell.date.format(DATE_FORMAT)}</td>
          <td class="has-text-right">{formatCurrency(-pp.sell.amount)}</td>
          <td class="has-text-right has-text-weight-bold">{formatCurrency(pp.tax.gain)}</td>
          <td class="has-text-right has-text-weight-bold">{formatCurrency(pp.tax.taxable)}</td>
          <td class="has-text-right has-text-weight-bold">{formatCurrency(pp.tax.short_term)}</td>
          <td class="has-text-right has-text-weight-bold">{formatCurrency(pp.tax.long_term)}</td>
          <td class="has-text-right has-text-weight-bold">{formatCurrency(pp.tax.slab)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

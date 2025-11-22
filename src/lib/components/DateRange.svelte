<script lang="ts">
  import type dayjs from "dayjs";
  import BoxedTabs from "./BoxedTabs.svelte";
  import { isMobile } from "$lib/utils";
  import { LL } from "$lib/i18n/i18n-svelte";

  export let value: number;
  export let dateMin: dayjs.Dayjs;
  export let dateMax: dayjs.Dayjs;

  let options: { label: string; value: number }[] = [];

  $: {
    options = [{ label: $LL.tables.dateRange.all(), value: -1 }];
    const diff = dateMax.diff(dateMin, "year");
    if (diff >= 10 && !isMobile()) {
      options.push({ label: $LL.tables.dateRange.tenYears(), value: 10 });
    }

    if (diff >= 5 && !isMobile()) {
      options.push({ label: $LL.tables.dateRange.fiveYears(), value: 5 });
    }

    if (diff >= 3) {
      options.push({ label: $LL.tables.dateRange.threeYears(), value: 3 });
    }

    if (diff >= 1) {
      options.push({ label: $LL.tables.dateRange.oneYear(), value: 1 });
    }
  }
</script>

{#if options.length > 1}
  <BoxedTabs bind:value {options} />
{/if}

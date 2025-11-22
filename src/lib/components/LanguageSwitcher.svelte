<script lang="ts">
  import { locale as localeStore } from "$lib/i18n/i18n-svelte";
  import LL from "$lib/i18n/i18n-svelte";
  import type { Locales } from "$lib/i18n/i18n-types";
  import { changeLocale, getLocaleOptions } from "$lib/i18n/locale";

  const options = getLocaleOptions();

  async function handleChange(event: Event) {
    const target = event.currentTarget as HTMLSelectElement;
    const next = target.value as Locales;
    if (next !== $localeStore) {
      await changeLocale(next);
    }
  }
</script>

<div class="field has-addons is-justify-content-center is-align-items-center">
  <div class="control is-hidden-mobile mr-1">
    <span class="is-size-7 has-text-grey">
      {$LL.common.selectLanguage()}
    </span>
  </div>
  <div class="control">
    <div class="select is-small">
      <select
        aria-label={$LL.common.selectLanguage()}
        value={$localeStore}
        on:change={handleChange}
      >
        {#each options as option}
          <option value={option.code}>{option.label}</option>
        {/each}
      </select>
    </div>
  </div>
</div>

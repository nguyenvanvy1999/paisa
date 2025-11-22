<script lang="ts">
  import { page } from "$app/stores";
  import LL from "$lib/i18n/i18n-svelte";
</script>

<section class="section">
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-4 is-offset-4 mt-5">
        {#if $page.error.status === 404}
          <article class="message invertable is-danger">
            <div class="message-header">{$LL.error.notFoundTitle()}</div>
            <div class="message-body">
              <p>{$LL.error.notFoundBody()}</p>
              <p class="mt-2">
                <a class="is-primary-color" href="/">{$LL.error.notFoundCta()}</a>
              </p>
            </div>
          </article>
        {:else}
          <article class="message invertable is-danger">
            <div class="message-header">{$LL.error.genericTitle()}</div>
            <div class="message-body">
              <p>{$LL.error.genericBody()}</p>
              <p class="mt-2">{$page.error.message}</p>
              {#if $page.error.stack}
                <p class="mt-3 has-text-weight-semibold">{$LL.error.detailsLabel()}</p>
                <pre class="mt-1">{$page.error.stack}</pre>
              {/if}
              <p class="mt-5">
                <a
                  href="https://github.com/ananthakumaran/paisa/issues"
                  target="_blank"
                  rel="noreferrer">{$LL.error.bugReportLabel()}</a
                >
              </p>
              <p>{$LL.error.restartHint()}</p>
            </div>
          </article>
        {/if}
      </div>
    </div>
  </div>
</section>

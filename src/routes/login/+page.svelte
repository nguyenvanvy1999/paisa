<script lang="ts">
  import { goto } from "$app/navigation";
  import Logo from "$lib/components/Logo.svelte";
  import { login } from "$lib/utils";
  import _ from "lodash";
  import LL from "$lib/i18n/i18n-svelte";
  let username = "";
  let password = "";

  let invalid = false;
  let invalidErrorMessage = "";

  $: loginDisabled = _.isEmpty(username) || _.isEmpty(password);

  async function tryLogin() {
    if (loginDisabled) return;

    const { success, error } = await login(username, password);
    invalid = !success;
    if (success) {
      goto("/");
    } else {
      invalidErrorMessage = error || $LL.auth.login.invalidCredentials();
    }
  }
</script>

<section class="section m-0 p-0">
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-12 p-0">
        <div class="flex justify-center items-center h-screen">
          <div class="box px-5 w-80">
            <div class="flex justify-center items-center mb-2">
              <div class="mt-1 mr-1"><Logo size={32} /></div>
              <div class="is-size-3">
                <a href="https://paisa.fyi" class="is-primary-color">{$LL.common.appName()}</a>
              </div>
            </div>
            <form on:submit|preventDefault={tryLogin}>
              <div class="field">
                <label for="username" class="label">{$LL.auth.login.usernameLabel()}</label>
                <div class="control">
                  <input
                    id="username"
                    class="input"
                    type="text"
                    bind:value={username}
                    autocomplete="username"
                  />
                </div>
              </div>

              <div class="field">
                <label for="password" class="label">{$LL.auth.login.passwordLabel()}</label>
                <div class="control">
                  <input
                    id="password"
                    class="input"
                    type="password"
                    bind:value={password}
                    autocomplete="current-password"
                  />
                </div>
                {#if invalid}
                  <p class="help is-danger">{invalidErrorMessage}</p>
                {/if}
              </div>

              <div class="field is-grouped is-grouped-right">
                <div class="control">
                  <button class="button is-link" disabled={loginDisabled}>
                    {$LL.auth.login.submit()}
                  </button>
                </div>
              </div>
            </form>
            <p class="mt-4 has-text-centered">
              <a class="is-primary-color" href="https://paisa.fyi" target="_blank" rel="noreferrer">
                {$LL.auth.login.helpLinkLabel()}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

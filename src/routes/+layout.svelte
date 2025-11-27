<script lang="ts">
  let { children } = $props();
  import "../app.css";

  import { setupI18n, updateDisplayDirection } from "$lib/locales/i18n";
  import { onMount } from "svelte";
  import { waitLocale, locale } from "svelte-i18n";

  import { appSession } from "$lib/app-session.svelte";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { page } from "$app/stores";
  import { beforeNavigate } from "$app/navigation";

  let isLocaleReady = $state(false);
  let transitionDirection = $state(1); // 1 for forward, -1 for backward
  let currentDepth = $state(0);

  // Calculate depth based on path segments
  function getDepth(path: string) {
    if (path === "/") return 0;
    return path.split("/").filter(Boolean).length;
  }

  beforeNavigate((navigation) => {
    const to = navigation.to?.url.pathname ?? "/";
    const from = navigation.from?.url.pathname ?? "/";

    const toDepth = getDepth(to);
    const fromDepth = getDepth(from);

    if (toDepth > fromDepth) {
      transitionDirection = 1;
    } else if (toDepth < fromDepth) {
      transitionDirection = -1;
    } else {
      transitionDirection = 0; // Same depth
    }
    currentDepth = toDepth;
  });

  onMount(async () => {
    currentDepth = getDepth($page.url.pathname);
    await setupI18n();
    waitLocale().then(() => {
      isLocaleReady = true;
    });

    // Update display direction when locale changes
    locale.subscribe((localeCode) => {
      updateDisplayDirection(localeCode ?? "en-AU");
    });
  });
</script>

{#if isLocaleReady && appSession.loaded}
  <div class="relative h-full w-full overflow-hidden">
    {#key $page.url.pathname}
      <main
        in:fly={{
          x: transitionDirection * 300,
          duration: 400,
          easing: cubicOut,
        }}
        out:fly={{
          x: transitionDirection * -300,
          duration: 400,
          easing: cubicOut,
        }}
        class="absolute inset-0 overflow-auto bg-[var(--bg1)]"
      >
        <small class="text-center block pt-4">
          &copy; {new Date().getFullYear()} TauriFlow v{appSession.appVersion}
        </small>
        {@render children()}
      </main>
    {/key}
  </div>
{/if}

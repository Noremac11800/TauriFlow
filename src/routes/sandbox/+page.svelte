<script lang="ts">
  import * as Icons from "flowbite-svelte-icons";
  import type { Component } from "svelte";
  import { goto } from "$app/navigation";
  import { t } from "svelte-i18n";
</script>

{#snippet topic(
  title: string,
  route: string,
  icon: Component,
  description?: string
)}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div
    role="button"
    onkeydown={(e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        goto(route);
      }
    }}
    tabindex="0"
    onclick={() => goto(route)}
    class="flex flex-col gap-4 bg-[var(--bg1)] border border-[var(--border1)] p-6 rounded-xl hover:shadow-lg hover:scale-[1.02] hover:border-[var(--brand2)] transition-all duration-200 cursor-pointer h-full group"
  >
    <div class="flex gap-3 items-center">
      <div
        class="p-2 rounded-lg bg-[var(--bg2)] group-hover:bg-[var(--brand1)] group-hover:text-white transition-colors duration-200"
      >
        <svelte:component
          this={icon}
          size="xl"
          strokeWidth={1.5}
          class="text-[var(--text1)] group-hover:text-white transition-colors duration-200"
        />
      </div>
      <span class="text-xl font-semibold">{$t(title)}</span>
    </div>
    {#if description}
      <span class="text-sm text-[var(--text3)] leading-relaxed">
        {$t(description)}
      </span>
    {/if}
  </div>
{/snippet}

<h1 class="mb-6">{$t("page-title.sandbox")}</h1>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {@render topic(
    "page-title.components",
    "/sandbox/components",
    Icons.GridOutline,
    "page.sandbox.components-description"
  )}
  {@render topic(
    "page-title.database",
    "/sandbox/database",
    Icons.DatabaseOutline,
    "page.sandbox.database-description"
  )}
  {@render topic(
    "page-title.debugging",
    "/sandbox/debugging",
    Icons.BugOutline,
    "page.sandbox.debugging-description"
  )}
  {@render topic(
    "page-title.iconography",
    "/sandbox/iconography",
    Icons.PizzaSliceOutline,
    "page.sandbox.iconography-description"
  )}
  {@render topic(
    "page-title.internationalization",
    "/sandbox/internationalization",
    Icons.LanguageOutline,
    "page.sandbox.internationalization-description"
  )}
  {@render topic(
    "page-title.theming",
    "/sandbox/theming",
    Icons.PaletteOutline,
    "page.sandbox.theming-description"
  )}
  {@render topic(
    "page-title.typography",
    "/sandbox/typography",
    Icons.FontFamilyOutline,
    "page.sandbox.typography-description"
  )}
  {@render topic(
    "page-title.wcag-accessibility",
    "/sandbox/wcag-accessibility",
    Icons.EyeOutline,
    "page.sandbox.wcag-accessibility-description"
  )}
</div>

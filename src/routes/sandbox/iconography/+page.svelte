<script lang="ts">
  import { Tooltip } from "flowbite-svelte";
  import { RangeSlider } from "svelte-range-slider-pips";
  import { t } from "svelte-i18n";
  import * as Icons from "@lucide/svelte";
  import { Search } from "@lucide/svelte";
  import type { Component } from "svelte";
  import { appSession } from "$lib/app-session.svelte";

  import Input from "../components/Input.svelte";
  import Switch from "../../../components/Switch.svelte";

  let searchQuery = $state("");
  let strokeWidth = $state(1.5);
  let size = $state(24);
  let absoluteStrokeWidth = $state(false);

  // Filter out anything that isn't a Svelte component
  const iconEntries = Object.entries(Icons).filter(
    ([name, value]) =>
      typeof value === "function" &&
      !name.includes("Icon") &&
      !name.includes("Lucide")
  ) as [string, Component<Icons.IconProps, {}, "">][];

  const filteredIconEntries: () => [
    string,
    Component<Icons.IconProps, {}, "">,
  ][] = $derived(() => {
    return iconEntries.filter(([name]) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
</script>

{#snippet iconTile(name: string, Icon: Component<Icons.IconProps, {}, "">)}
  <div
    class="flex flex-col items-center justify-center w-12 h-12 bg-[var(--bg1)] rounded hover:bg-[var(--bg2)] hover:scale-110 transition-all duration-100"
  >
    <Icon color="var(--text1)" {size} {strokeWidth} {absoluteStrokeWidth} />
  </div>
  <Tooltip type={appSession.themeManager.isDark ? "dark" : "light"}>
    <span>{name}</span>
  </Tooltip>
{/snippet}

<h1>{$t("page-title.iconography")}</h1>

<div
  id="customisation"
  class="flex flex-col gap-2 border border-[var(--border1)] rounded-lg p-2 min-w-1/3 max-w-[300px]"
>
  <div class="flex flex-col">
    <p class="flex justify-between mx-6">
      <span class="font-bold"
        >{$t("page.sandbox.iconography.stroke-width")}</span
      >
      <span>{strokeWidth}px</span>
    </p>

    <RangeSlider
      min={0.5}
      max={3}
      step={0.25}
      bind:value={strokeWidth}
      class="cursor-pointer"
      style="
    --slider-accent: var(--brand1);
    --slider-accent-100: transparent;
    --slider-base: var(--brand1);
    --slider-base-100: transparent;
    --slider-bg: var(--bg1);
    --slider-fg: var(--text1);"
    />
  </div>
  <div class="flex flex-col">
    <p class="flex justify-between mx-6">
      <span class="font-bold">{$t("page.sandbox.iconography.size")}</span>
      <span>{size}px</span>
    </p>

    <RangeSlider
      min={8}
      max={48}
      step={1}
      bind:value={size}
      class="cursor-pointer"
      style="
    --slider-accent: var(--brand1);
    --slider-accent-100: transparent;
    --slider-base: var(--brand1);
    --slider-base-100: transparent;
    --slider-bg: var(--bg1);
    --slider-fg: var(--text1);"
    />
  </div>
  <div class="flex flex-col">
    <span>{$t("page.sandbox.iconography.absolute-stroke-width")}</span>
    <Switch bind:toggled={absoluteStrokeWidth} />
  </div>
</div>

<Input
  placeholder={$t("page.sandbox.iconography.search", {
    values: { iconCount: iconEntries.length },
  })}
  bind:value={searchQuery}
>
  {#snippet left()}
    <Search color="var(--text3)" />
  {/snippet}
</Input>

<!-- <Input
  type="text"
  placeholder={$t("page.sandbox.iconography.search", {
    values: { iconCount: iconEntries.length },
  })}
  class="w-full"
  bind:value={searchQuery}
/> -->

<div class="flex flex-wrap justify-center gap-4">
  {#each filteredIconEntries() as [name, Icon]}
    {@render iconTile(name, Icon)}
  {/each}
</div>

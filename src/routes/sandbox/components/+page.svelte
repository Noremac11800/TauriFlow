<script lang="ts">
  import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Checkbox,
  } from "flowbite-svelte";
  import { t } from "svelte-i18n";

  import Input from "./Input.svelte";
  import { User, LockKeyhole, ArrowRight } from "@lucide/svelte";

  let areButtonsDisabled = $state(false);
</script>

{#snippet componentTile(
  componentName: string,
  componentDescription?: string,
  chips?: string[]
)}
  <div class="tile">
    <h4 class="self-start">{componentName}</h4>
    <p class="italic text-[var(--text3)]! text-sm!">{componentDescription}</p>
    <div class="flex items-center justify-between gap-2">
      {#if chips}
        <div class="flex flex-wrap gap-2">
          {#each chips as chip}
            {#if chip == "Display"}
              <span
                class="px-2 py-1 rounded-full bg-[var(--chip-blue)] text-[var(--text-invariant-black)]! text-sm!"
                >{chip}</span
              >
            {/if}
            {#if chip == "Input"}
              <span
                class="px-2 py-1 rounded-full bg-[var(--chip-green)] text-[var(--text-invariant-black)]! text-sm!"
                >{chip}</span
              >
            {/if}
            {#if chip == "Overlay"}
              <span
                class="px-2 py-1 rounded-full bg-[var(--chip-yellow)] text-[var(--text-invariant-black)]! text-sm!"
                >{chip}</span
              >
            {/if}
          {/each}
        </div>
      {/if}
      <ArrowRight size="24" class="self-end" color="var(--text1)" />
    </div>
  </div>
{/snippet}

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/"
    >{$t("page-title.home")}</BreadcrumbItem
  >
  <BreadcrumbItem linkClass="text-lg" href="/sandbox"
    >{$t("page-title.sandbox")}</BreadcrumbItem
  >
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    {$t("page-title.components")}
  </BreadcrumbItem>
</Breadcrumb>

<h1>{$t("page-title.components")}</h1>

<div id="tiles" class="flex flex-wrap gap-4 justify-center">
  {@render componentTile(
    "Alert",
    "Alerts are used to display messages to the user",
    ["Display"]
  )}
  {@render componentTile(
    "Avatar",
    "Avatars are used to display user profiles",
    ["Display"]
  )}
  {@render componentTile(
    "Badge",
    "Badges are used to display small labels like item counts or status indicators",
    ["Display"]
  )}
  {@render componentTile(
    "Button",
    "Buttons are used to trigger actions or events when clicked",
    ["Input"]
  )}
  {@render componentTile(
    "Drawer",
    "Drawers are used to display additional content in a container extruding from the edge of the screen",
    ["Overlay"]
  )}
  {@render componentTile(
    "Dropdown",
    "Dropdowns are used to display a list or collection of choices",
    ["Overlay", "Input"]
  )}
  {@render componentTile(
    "Dialog",
    "Dialogs are used to display additional content in a modal popup area",
    ["Overlay"]
  )}
  {@render componentTile(
    "Input",
    "Inputs are used to capture and display user-entered text or data",
    ["Input"]
  )}
  {@render componentTile(
    "Popover",
    "Popovers are used to display contextual information in a popup area positioned relative to the trigger element",
    ["Overlay"]
  )}
</div>

<Input />
<Input value="This is the default value" disabled={areButtonsDisabled}>
  {#snippet left()}
    <User color="var(--text3)" />
  {/snippet}
</Input>
<Input
  value="This is the default value"
  disabled={areButtonsDisabled}
  type="password"
>
  {#snippet left()}
    <LockKeyhole color="var(--text3)" />
  {/snippet}
</Input>

<div class="flex items-center gap-2">
  <Checkbox bind:checked={areButtonsDisabled} />
  <span>Disable buttons</span>
</div>
<Button class="brand-solid-button" disabled={areButtonsDisabled}
  >Brand Solid Button</Button
>
<Button class="brand-outline-button" disabled={areButtonsDisabled}
  >Brand Outline Button</Button
>
<Button class="brand-transparent-button" disabled={areButtonsDisabled}
  >Brand Transparent Button</Button
>
<Button class="neutral-solid-button" disabled={areButtonsDisabled}
  >Neutral Solid Button</Button
>
<Button class="neutral-outline-button" disabled={areButtonsDisabled}
  >Neutral Outline Button</Button
>
<Button class="neutral-transparent-button" disabled={areButtonsDisabled}
  >Neutral Transparent Button</Button
>
<Button class="status-danger-solid-button" disabled={areButtonsDisabled}
  >Status Danger Solid Button</Button
>
<Button class="status-danger-outline-button" disabled={areButtonsDisabled}
  >Status Danger Outline Button</Button
>
<Button class="status-danger-transparent-button" disabled={areButtonsDisabled}
  >Status Danger Transparent Button</Button
>

<style>
  @import "tailwindcss";

  .tile {
    @apply flex flex-col justify-between gap-2 border border-[var(--border1)] rounded p-4 max-w-[200px]  aspect-square bg-[var(--bg1)] cursor-pointer transition-all duration-100;
    @apply hover:scale-101 hover:border-[var(--status-info1)];
    @apply active:scale-99 active:border-[var(--status-info1)];
  }
</style>

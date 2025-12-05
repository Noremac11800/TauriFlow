<script lang="ts">
  import { t } from "svelte-i18n";
  import { ArrowRight } from "@lucide/svelte";
  import { goto } from "$app/navigation";
</script>

{#snippet componentTile(
  componentName: string,
  componentDescription?: string,
  chips?: string[],
  route?: string
)}
  <button class="tile" onclick={() => (route ? goto(route) : null)}>
    <h4 class="self-start">{componentName}</h4>
    <p class="italic text-[var(--text3)]! text-sm!">{componentDescription}</p>
    <div class="w-full flex items-center justify-between gap-2">
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
  </button>
{/snippet}

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
    ["Display"],
    "/sandbox/components/avatar"
  )}
  {@render componentTile(
    "Badge",
    "Badges are used to display small labels like item counts or status indicators",
    ["Display"]
  )}
  {@render componentTile(
    "Button",
    "Buttons are used to trigger actions or events when clicked",
    ["Input"],
    "/sandbox/components/button"
  )}
  {@render componentTile(
    "Drawer",
    "Drawers are used to display additional content in a container extruding from the edge of the screen",
    ["Overlay"]
  )}
  {@render componentTile(
    "Dialog",
    "Dialogs are used to display additional content in a modal popup area",
    ["Overlay"],
    "/sandbox/components/dialog"
  )}
  {@render componentTile(
    "Input",
    "Inputs are used to capture and display user-entered text or data",
    ["Input"],
    "/sandbox/components/input"
  )}
  {@render componentTile(
    "Picker",
    "Pickers are used to display a list or collection of choices",
    ["Overlay", "Input"],
    "/sandbox/components/picker"
  )}
  {@render componentTile(
    "Popover",
    "Popovers are used to display contextual information in a popup area positioned relative to the trigger element",
    ["Overlay"]
  )}
  {@render componentTile(
    "Switch",
    "Switches are used to toggle between two states",
    ["Input"],
    "/sandbox/components/switch"
  )}
</div>

<!-- svelte-ignore css_unused_selector-->
<style>
  @import "tailwindcss";

  .tile {
    @apply flex flex-col justify-between gap-2 border border-[var(--border1)] rounded p-4 max-w-[180px] bg-[var(--bg1)] cursor-pointer transition-all duration-100;
    @apply hover:scale-101 hover:border-[var(--brand1)];
    @apply active:scale-99 active:border-[var(--brand1)];
  }
</style>

<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import { SelectionMode } from "./Picker.svelte.ts";
  import type { PickerProps } from "./Picker.svelte.ts";
  import { Dropdown } from "flowbite-svelte";

  let {
    class: className,
    options,
    value = $bindable<string | null>(),
    values = $bindable<string[]>([]),
    selectionMode,
    disabled,
    optionSnippet,
    selectedOptionSnippet,
  }: PickerProps = $props();

  let dropdown = $state<typeof Dropdown.prototype>();
  let isOpen = $state(false);

  export function selectOption(option: string) {
    if (dropdown && selectionMode !== SelectionMode.Multiple) {
      isOpen = false;
    }

    if (value === option) {
      value = null;
    } else {
      value = option;
    }

    if (selectionMode === SelectionMode.Multiple) {
      if (values.includes(option)) {
        values = values.filter((v) => v !== option);
      } else {
        values.push(option);
      }
    }
  }

  export function toggleDropdown() {
    setTimeout(() => {
      isOpen = !isOpen;
    }, 150);
  }
</script>

<button
  onclick={toggleDropdown}
  class="flex gap-4 border min-h-[48px] border-[var(--border1)] rounded items-center px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--text1)] cursor-pointer {disabled
    ? 'opacity-70 cursor-default!'
    : ''} {className}"
  {disabled}
>
  <div class="flex items-center w-full gap-2">
    {#if selectionMode == SelectionMode.Multiple}
      <div class="flex flex-wrap items-center gap-2">
        {#each values as selectedValue}
          {#if selectedOptionSnippet}
            {@render selectedOptionSnippet(selectedValue)}
          {:else}
            <span>{selectedValue}</span>
          {/if}
        {/each}
      </div>
    {:else if selectedOptionSnippet && value}
      {@render selectedOptionSnippet(value)}
    {:else}
      <span>{value}</span>
    {/if}
  </div>

  {#if !disabled}
    <ChevronDown
      color="var(--text1)"
      size="16"
      class="self-start min-h-[30px]"
    />
  {/if}
</button>

<!-- Used to attach the DropDown to this component so that it can be controlled programatically by the button above -->
<span></span>

<Dropdown
  bind:this={dropdown}
  bind:isOpen
  placement="bottom"
  simple
  class="flex flex-col bg-[var(--fg)] rounded border border-[var(--border1)] max-h-[200px] overflow-y-scroll"
>
  {#each options as option}
    <button
      class="neutral-transparent-button w-full"
      onclick={() => selectOption(option)}
    >
      {#if optionSnippet}
        {@render optionSnippet(option)}
      {:else}
        <span>{option}</span>
      {/if}
    </button>
  {/each}
</Dropdown>

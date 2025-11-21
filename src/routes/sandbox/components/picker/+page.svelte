<script lang="ts">
  import { Check, XIcon } from "@lucide/svelte";
  import Picker from "../../../../components/Picker.svelte";
  import Switch from "../../../../components/Switch.svelte";
  import { SelectionMode } from "../../../../components/Picker.svelte.ts";

  let arePickersDisabled = $state(false);
  let optionsList1 = $state(["Option 1", "Option 2", "Option 3"]);
  let optionsList2 = $state([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ]);

  let picker1Value = $state("Option 1");
  let picker2Value = $state("Option 1");
  let picker3Value = $state("Option 1");
  let picker5Values = $state<string[]>([]);

  let picker1 = $state<typeof Picker.prototype>();
  let picker2 = $state<typeof Picker.prototype>();
  let picker3 = $state<typeof Picker.prototype>();
  let picker4 = $state<typeof Picker.prototype>();
  let picker5 = $state<typeof Picker.prototype>();
  let picker6 = $state<typeof Picker.prototype>();

  function removeChip(chip: string, picker: typeof Picker.prototype) {
    picker.selectOption(chip);
  }
</script>

<div class="flex items-center gap-4">
  <Switch bind:toggled={arePickersDisabled} />
  <span>Disable pickers</span>
</div>

<div class="flex flex-col items-center gap-4">
  <h4>Select One</h4>

  <div class="flex flex-col gap-2 w-full">
    <span>Default</span>
    <Picker
      bind:this={picker1}
      disabled={arePickersDisabled}
      options={optionsList1}
      bind:value={picker1Value}
    />
  </div>

  <div class="flex flex-col gap-2 w-full">
    <span>With option snippet</span>
    <Picker
      class="w-full"
      bind:this={picker2}
      disabled={arePickersDisabled}
      options={optionsList1}
      bind:value={picker2Value}
    >
      {#snippet optionSnippet(option)}
        <div class="flex items-center justify-end w-full gap-2">
          {#if picker2Value === option}
            <Check size="16" color="var(--brand1)" />
          {/if}
          <span>{option}</span>
        </div>
      {/snippet}
    </Picker>
  </div>

  <div class="flex flex-col gap-2 w-full">
    <span>With selected option snippet</span>
    <Picker
      class="w-full"
      bind:this={picker3}
      disabled={arePickersDisabled}
      options={optionsList1}
      bind:value={picker3Value}
    >
      {#snippet selectedOptionSnippet(option)}
        <div
          class="flex items-center gap-2 bg-[var(--chip-green)] p-1 rounded-full px-2"
        >
          <span class="text-sm! text-[var(--text-invariant-black)]!"
            >{option}</span
          >
        </div>
      {/snippet}
    </Picker>
  </div>

  <h4>Select Multiple</h4>

  <div class="flex flex-col gap-2 w-full">
    <span>Default</span>
    <Picker
      class="w-full"
      bind:this={picker4}
      disabled={arePickersDisabled}
      options={optionsList2}
      selectionMode={SelectionMode.Multiple}
    />
  </div>

  <div class="flex flex-col gap-2 w-full">
    <span>With option snippet</span>
    <Picker
      class="w-full"
      bind:this={picker5}
      disabled={arePickersDisabled}
      options={optionsList2}
      bind:values={picker5Values}
      selectionMode={SelectionMode.Multiple}
    >
      {#snippet optionSnippet(option)}
        <div class="flex items-center justify-end w-full gap-2">
          {#if picker5Values.includes(option)}
            <Check size="16" color="var(--brand1)" />
          {/if}
          <span>{option}</span>
        </div>
      {/snippet}
    </Picker>
  </div>

  <div class="flex flex-col gap-2 w-full">
    <span>With selected option snippet</span>
    <Picker
      class="w-full"
      bind:this={picker6}
      disabled={arePickersDisabled}
      options={optionsList2}
      values={optionsList2}
      selectionMode={SelectionMode.Multiple}
    >
      {#snippet selectedOptionSnippet(option)}
        <div
          class="flex items-center gap-2 bg-[var(--chip-blue)] p-1 rounded-full px-2"
        >
          <span class="text-sm! text-[var(--text-invariant-black)]!"
            >{option}</span
          >
          {#if !arePickersDisabled && option}
            <button
              class="neutral-transparent-button p-1! rounded-full!"
              onclick={(event) => {
                event.stopPropagation();
                removeChip(option, picker6);
              }}
            >
              <XIcon size="14" color="var(--text-invariant-black)" />
            </button>
          {/if}
        </div>
      {/snippet}
    </Picker>
  </div>
</div>

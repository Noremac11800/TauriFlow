<script lang="ts">
  import { Checkbox, Button } from "flowbite-svelte";
  let areButtonsDisabled = $state(false);
</script>

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

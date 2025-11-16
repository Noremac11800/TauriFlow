<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
  import { User, LockKeyhole } from "@lucide/svelte";
  import Input from "../Input.svelte";

  let areInputsDisabled = $state(false);
</script>

<div class="flex items-center gap-2">
  <Checkbox bind:checked={areInputsDisabled} />
  <span>Disable inputs</span>
</div>

<Input disabled={areInputsDisabled} />
<Input value="This is the default value" disabled={areInputsDisabled}>
  {#snippet left()}
    <User color="var(--text3)" />
  {/snippet}
</Input>
<Input
  value="This is the default value"
  disabled={areInputsDisabled}
  type="password"
>
  {#snippet left()}
    <LockKeyhole color="var(--text3)" />
  {/snippet}
</Input>

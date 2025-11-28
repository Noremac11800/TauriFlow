<script lang="ts">
  import { User, LockKeyhole } from "@lucide/svelte";
  import Input from "../../../../components/Input.svelte";
  import Switch from "../../../../components/Switch.svelte";

  let areInputsDisabled = $state(false);
</script>

<div class="flex items-center gap-4">
  <Switch bind:toggled={areInputsDisabled} />
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

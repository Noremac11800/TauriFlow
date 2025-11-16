<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
  import { User, LockKeyhole } from "@lucide/svelte";
  import Switch from "../../../../components/Switch.svelte";

  let areSwitchesDisabled = $state(false);
  let switch1 = $state(false);
  let switch2 = $state(true);
</script>

<div class="flex items-center gap-4">
  <Switch bind:toggled={areSwitchesDisabled} />
  <span>Disable switches</span>
</div>

<div class="flex flex-col items-center gap-4">
  <div class="flex items-center gap-4">
    <Switch bind:toggled={switch1} disabled={areSwitchesDisabled} />
    <span>{switch1 ? "On" : "Off"}</span>
  </div>
  <div class="flex items-center gap-4">
    <Switch bind:toggled={switch2} disabled={areSwitchesDisabled} />
    <span>{switch2 ? "On" : "Off"}</span>
  </div>
</div>

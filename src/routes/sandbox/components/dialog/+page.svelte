<script lang="ts">
  import Dialog from "../../../../components/Dialog.svelte";

  let showDialog = $state(false);
</script>

{#if showDialog}
  <Dialog isOpen closed={() => (showDialog = false)} />
{/if}

<div class="flex flex-col items-center gap-4">
  {showDialog}
  <button class="brand-solid-button" onclick={() => (showDialog = true)}>
    Open Dialog
  </button>
</div>

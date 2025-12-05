<script lang="ts">
  import { Modal } from "flowbite-svelte";

  let {
    children,
    isOpen = $bindable(false),
    dismissable = true,
    closed,
  }: {
    children?: () => any;
    isOpen?: boolean;
    dismissable?: boolean;
    closed?: () => void;
  } = $props();

  $effect(() => {
    if (isOpen == false && closed) {
      closed();
    }
  });
</script>

{isOpen}
<Modal focustrap title="Terms of Service" form bind:open={isOpen} {dismissable}>
  {@render children?.()}
</Modal>

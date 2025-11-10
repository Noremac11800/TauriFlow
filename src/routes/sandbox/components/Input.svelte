<script lang="ts">
  import { CircleX } from "@lucide/svelte";
  import type { Snippet } from "svelte";

  let {
    value,
    left,
    disabled = false,
    type = "text",
  } = $props<{
    value?: string;
    left?: Snippet;
    disabled?: boolean;
    type?: string;
  }>();

  export function clear() {
    value = "";
  }
</script>

<div
  class="flex gap-4 border border-[var(--border1)] rounded items-center px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--text1)]"
>
  {#if left}
    {@render left()}
  {/if}
  <input
    {type}
    bind:value
    class="w-full border-none focus:ring-0! p-0 disabled:opacity-70 disabled:cursor-default"
    {disabled}
  />
  {#if value && !disabled}
    <button
      class="neutral-transparent-button p-0! rounded-full! text-[var(--text3)]!"
      onclick={clear}
    >
      <CircleX size="16" />
    </button>
  {/if}
</div>

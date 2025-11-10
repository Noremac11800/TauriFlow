<script lang="ts">
  import { CircleX } from "@lucide/svelte";
  import type { InputProps } from "./Input.svelte.ts";

  let {
    class: className,
    value = $bindable<string>(),
    left,
    disabled = false,
    placeholder = "",
    type = "text",
  }: InputProps = $props();

  export function clear() {
    value = "";
  }
</script>

<div
  class="flex gap-4 border border-[var(--border1)] rounded items-center px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--text1)] {className}"
>
  {#if left}
    {@render left()}
  {/if}
  <input
    {type}
    bind:value
    class="w-full border-none focus:ring-0! p-0 disabled:opacity-70 disabled:cursor-default"
    {disabled}
    {placeholder}
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

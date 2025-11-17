<script lang="ts">
  import { UserRound } from "@lucide/svelte";

  let {
    class: className,
    initialis,
    img,
    textColor,
  }: {
    class?: string;
    initialis?: string;
    img?: string;
    textColor?: string;
  } = $props();

  let isAnonymous = $derived.by(() => !img && !initialis);
  let txtColor = $derived.by(() => textColor || "var(--text1)");
</script>

<div
  class="rounded-full border-2 border-[var(--border1)] bg-[var(--bg2)] w-14 h-14 flex items-center justify-center overflow-hidden {className} {isAnonymous
    ? 'p-0 pt-2'
    : initialis
      ? 'p-0'
      : ''}"
>
  {#if img}
    <img
      src={img}
      alt="Avatar"
      class="w-full h-full object-cover rounded-full"
    />
  {:else if initialis}
    <span class="text-[{txtColor}]! text-[24px]!">{initialis}</span>
  {:else}
    <UserRound color={txtColor} size="100%" absoluteStrokeWidth />
  {/if}
</div>

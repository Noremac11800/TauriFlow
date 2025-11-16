<script lang="ts">
  let {
    toggled = $bindable<boolean>(false),
    disabled = false,
    trackOffClass = "border border-[var(--bg2)] bg-[var(--bg2)]",
    trackOnClass = "border border-[var(--brand2)] bg-[var(--brand1)]",
    thumbOffClass = "border border-[var(--border1)] bg-[var(--fg)] translate-x-0",
    thumbOnClass = "border border-[var(--brand1)] bg-[var(--fg)] ltr:translate-x-[24px] rtl:translate-x-[-24px]",
  }: {
    toggled: boolean;
    disabled?: boolean;
    trackOffClass?: string;
    trackOnClass?: string;
    thumbOffClass?: string;
    thumbOnClass?: string;
  } = $props();

  export function toggle(): void {
    if (disabled) return;
    toggled = !toggled;
  }
</script>

<button
  aria-label="Switch"
  class="flex justify-start w-[48px] h-[24px] rounded-full {toggled
    ? trackOnClass
    : trackOffClass} box-content {disabled
    ? 'opacity-70 cursor-default'
    : 'cursor-pointer'}"
  onclick={toggle}
>
  <div
    id="thumb"
    class="w-[24px] h-[24px] rounded-full transition-all duration-200 ease-in-out {toggled
      ? thumbOnClass
      : thumbOffClass}"
  ></div>
</button>

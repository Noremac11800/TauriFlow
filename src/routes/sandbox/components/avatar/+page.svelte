<script lang="ts">
  import Avatar from "../../../../components/Avatar.svelte";
</script>

<div class="flex flex-col items-center gap-4">
  <Avatar />
  <Avatar initialis="CK" />
  <Avatar img="/puppy.jpg" />
  <Avatar
    class="bg-[var(--chip-green)]"
    textColor="var(--text-invariant-black)"
  />
  <Avatar
    class="bg-[var(--chip-blue)]"
    initialis="CK"
    textColor="var(--text-invariant-black)"
  />
</div>

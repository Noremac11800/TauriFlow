<script lang="ts">
  import { page } from "$app/state";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { t } from "svelte-i18n";

  let { children } = $props();

  let pageNames = page.url.pathname.split("/").filter((name) => name !== "");
  let currentPage = pageNames[pageNames.length - 1];

  function constructHrefPath(pageName: string) {
    let index = pageNames.indexOf(pageName);
    return "/" + pageNames.slice(0, index + 1).join("/");
  }
</script>

<Breadcrumb olClass="flex flex-wrap">
  <BreadcrumbItem home homeClass="text-lg" href="/"
    >{$t("page-title.home")}</BreadcrumbItem
  >
  {#each pageNames.slice(0, -1) as name}
    <BreadcrumbItem linkClass="text-lg!" href={constructHrefPath(name)}>
      {$t("page-title." + name)}
    </BreadcrumbItem>
  {/each}
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    {$t("page-title." + currentPage)}
  </BreadcrumbItem>
</Breadcrumb>

{@render children()}

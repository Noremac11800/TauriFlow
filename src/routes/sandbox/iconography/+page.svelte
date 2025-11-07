<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { t } from "svelte-i18n";
</script>

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/"
    >{$t("page-title.home")}</BreadcrumbItem
  >
  <BreadcrumbItem linkClass="text-lg" href="/sandbox"
    >{$t("page-title.sandbox")}</BreadcrumbItem
  >
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    {$t("page-title.iconography")}
  </BreadcrumbItem>
</Breadcrumb>

<h1>{$t("page-title.iconography")}</h1>

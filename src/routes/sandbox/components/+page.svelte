<script lang="ts">
  import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Checkbox,
  } from "flowbite-svelte";
  import { t } from "svelte-i18n";

  import Input from "./Input.svelte";
  import { User, LockKeyhole } from "@lucide/svelte";

  let areButtonsDisabled = $state(false);
</script>

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/"
    >{$t("page-title.home")}</BreadcrumbItem
  >
  <BreadcrumbItem linkClass="text-lg" href="/sandbox"
    >{$t("page-title.sandbox")}</BreadcrumbItem
  >
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    {$t("page-title.components")}
  </BreadcrumbItem>
</Breadcrumb>

<h1>{$t("page-title.components")}</h1>

<Input />
<Input value="This is the default value" disabled={areButtonsDisabled}>
  {#snippet left()}
    <User color="var(--text3)" />
  {/snippet}
</Input>
<Input
  value="This is the default value"
  disabled={areButtonsDisabled}
  type="password"
>
  {#snippet left()}
    <LockKeyhole color="var(--text3)" />
  {/snippet}
</Input>

<div class="flex items-center gap-2">
  <Checkbox bind:checked={areButtonsDisabled} />
  <span>Disable buttons</span>
</div>
<Button class="brand-solid-button" disabled={areButtonsDisabled}
  >Brand Solid Button</Button
>
<Button class="brand-outline-button" disabled={areButtonsDisabled}
  >Brand Outline Button</Button
>
<Button class="brand-transparent-button" disabled={areButtonsDisabled}
  >Brand Transparent Button</Button
>
<Button class="neutral-solid-button" disabled={areButtonsDisabled}
  >Neutral Solid Button</Button
>
<Button class="neutral-outline-button" disabled={areButtonsDisabled}
  >Neutral Outline Button</Button
>
<Button class="neutral-transparent-button" disabled={areButtonsDisabled}
  >Neutral Transparent Button</Button
>
<Button class="status-danger-solid-button" disabled={areButtonsDisabled}
  >Status Danger Solid Button</Button
>
<Button class="status-danger-outline-button" disabled={areButtonsDisabled}
  >Status Danger Outline Button</Button
>
<Button class="status-danger-transparent-button" disabled={areButtonsDisabled}
  >Status Danger Transparent Button</Button
>

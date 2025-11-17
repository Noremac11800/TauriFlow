import type { Snippet } from "svelte";

export interface PickerProps {
  class?: string;
  options?: string[];
  value?: string | null;
  values?: string[];
  selectionMode?: SelectionMode;
  disabled?: boolean;
  optionSnippet?: Snippet<[option: string]>;
  selectedOptionSnippet?: Snippet<[option: string | null]>;
}

export enum SelectionMode {
  Single,
  Multiple,
}

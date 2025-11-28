import type { Snippet } from "svelte";

export interface InputProps {
  class?: string;
  value?: string;
  left?: Snippet;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
}

import { ExtractPropTypes, PropType } from "vue";

const themes = ["light", "success", "info", "warning", "error", "dark"] as const;
const sizes = ["small", "moderate", "large"] as const;
const appearances = ["normal", "circle", "fluid"] as const;
const statuses = ["stateless", "loading", "disable"] as const;

export const buttonProps = {
  theme: {
    type: String as PropType<(typeof themes)[number]>,
    default: "light",
  },
  size: {
    type: String as PropType<(typeof sizes)[number]>,
    default: "moderate",
  },
  appearance: {
    type: String as PropType<(typeof appearances)[number]>,
    default: "normal",
  },
  status: {
    type: String as PropType<(typeof statuses)[number]>,
    default: "stateless",
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

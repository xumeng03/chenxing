import { ExtractPropTypes, PropType } from "vue";

type theme = "light" | "success" | "info" | "warning" | "error" | "dark";
type size = "small" | "moderate" | "large";
type appearance = "normal" | "circle" | "fluid";
type status = "stateless" | "loading" | "disable";

export const buttonProps = {
  theme: {
    type: String as () => theme,
    default: "light",
  },
  size: {
    type: String as PropType<size>,
    default: "moderate",
  },
  appearance: {
    type: String as PropType<appearance>,
    default: "normal",
  },
  status: {
    type: String as PropType<status>,
    default: "stateless",
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

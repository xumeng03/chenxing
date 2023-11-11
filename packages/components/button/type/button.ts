import { ExtractPropTypes, PropType } from "vue";

type theme = "light" | "success" | "info" | "warning" | "error" | "dark";

export const buttonProps = {
  theme: {
    type: String as PropType<theme>,
    default: "light",
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

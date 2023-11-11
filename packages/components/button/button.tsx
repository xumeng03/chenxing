import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonProps } from "./type/button";
import "./style/button.scss";

export default defineComponent({
  name: "XButton",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { theme } = toRefs(props);
    console.log(theme);
    return () => {
      return <div class={`x-button x-button-${theme.value}`}>{slots.default ? slots.default() : "Button"}</div>;
    };
  },
});

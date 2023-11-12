import { computed, defineComponent } from "vue";
import { ButtonProps, buttonProps } from "./type/button";
import { useNS } from "../../utils/bem/useNS.ts";
import "./style/button.scss";

export default defineComponent({
  name: "XButton",
  props: buttonProps,
  setup(props: ButtonProps, { attrs, emit, expose, slots }) {
    console.log(JSON.stringify(props));
    // Object.keys(buttonProps).forEach((prop) => {
    //   console.log(`${prop}: ${typeof props[prop]}`);
    // });
    console.log(attrs);
    console.log(emit);
    console.log(expose);
    console.log(slots);
    const ns = useNS("button");
    const classes = computed(() => {
      return [ns.className, ns.m(props.theme), ns.m(props.size), ns.m(props.appearance), ns.m(props.status)];
    });
    console.log(classes);
    return () => {
      return <div class={classes.value}>{slots.default ? slots.default() : "Button"}</div>;
    };
  },
});

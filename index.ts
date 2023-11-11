import { App } from "vue";
import { XButton } from "./packages/components";

export * from "./packages/components";

const components = [XButton];

export default {
  install(Vue: App) {
    components.forEach((c) => {
      Vue.component(c.name, c);
    });
  },
};

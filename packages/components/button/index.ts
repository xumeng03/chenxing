import XButton from "./button";
import { App } from "vue";

XButton.install = (Vue: App) => {
  Vue.component("XButton", XButton);
};

export default XButton;

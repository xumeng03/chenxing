import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Chenxing",
  description: "适用于Vue3的组件库",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/start" },
      { text: "组件", link: "/components/button/button" },
      { text: "关于", link: "/about/project" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "快速开始", link: "/guide/start" },
            { text: "联系我", link: "/guide/contact" },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [{ text: "Button 按钮", link: "/components/button/button" }],
        },
      ],
      "/about/": [
        {
          text: "关于",
          items: [
            { text: "项目", link: "/about/project" },
            { text: "我", link: "/about/me" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/xumeng03/chenxing" }],
  },
});

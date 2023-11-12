# 快速开始

::: tip 组件库兼容性

目前只在edge浏览器和chrome浏览器测试过，请尽量选择主流浏览器！

:::

## 安装

可以选择使用 `npm` / `yarn` / `pnpm` 安装

::: code-group

```sh [npm]
# 如果你想使用最新版
npm install chenxing

# 如果你想安装指定版本
npm install chenxing@0.0.1
```

```sh [yarn]
# 如果你想使用最新版
yarn add chenxing

# 如果你想安装指定版本
yarn add chenxing@0.0.1
```

```sh [pnpm]
# 如果你想使用最新版
pnpm install chenxing

# 如果你想安装指定版本
pnpm install chenxing@0.0.1
```

:::

## 使用

修改 `main.ts` / `main.js`

```typescript
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 导入chenxing
import chenxing from "chenxing";
// 导入chenxing的样式文件
import "chenxing/dist/style.css";

// 使用use安装chenxing
createApp(App).use(chenxing).mount("#app");
```

## 安装 epic-designer

```bash
npm i epic-designer
```

epic-designer 目标是支持多 UI 兼容,目前支持以下 UI

- element-plus
- ant-design-vue

## 选择 UI 组件库

- ### 选择 element-plus

```bash
npm i element-plus
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入Element plus样式
import "element-plus/dist/index.css";
// 引入k-designer样式
import "epic-designer/dist/style.css";
import { pluginManager } from "epic-designer";
import { setupElementPlus } from "epic-designer/dist/ui/elementPlus";
// 注册Element UI
setupElementPlus(pluginManager);
```

- ### 选择 ant-design-vue

```bash
npm i ant-design-vue
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入antd UI样式
import "ant-design-vue/dist/antd.css";
// 引入k-designer样式
import "epic-designer/dist/style.css";
import { pluginManager } from "epic-designer";
import { setupAntd } from "epic-designer/dist/ui/antd";
// 注册Antd UI
setupAntd(pluginManager);
```
- ### 选择 naive-ui

```bash
npm i naive-ui
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入k-designer样式
import "epic-designer/dist/style.css";
import { pluginManager } from "epic-designer";
import { setupNaiveUi } from "epic-designer/dist/ui/naiveUi";
// 注册Naive Ui
setupNaiveUi(pluginManager);
```

## 在页面使用 epic-designer

```vue
<template>
  <div class="h-full">
    <EDesigner />
  </div>
</template>
<script setup lang="ts">
import { EDesigner } from "epic-designer";
</script>
<style>
.h-full {
  height: 100vh;
}
</style>
```

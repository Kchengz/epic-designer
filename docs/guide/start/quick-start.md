## 安装 k-designer

```bash
npm i k-designer
```

> k-designer 目标是支持多 UI 兼容,目前支持以下 UI

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
import "k-designer/dist/style.css";
import { pluginManager } from "k-designer";
import { useElementPlus } from "k-designer/dist/ui/useElementPlus";
// 使用Elemnt UI
useElementPlus(pluginManager);
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
import "k-designer/dist/style.css";
import { pluginManager } from "k-designer";
import { useAntd } from "k-designer/dist/ui/useAntd";
// 使用Antd UI
useAntd(pluginManager);
```

## 在页面使用 k-designer

```vue
<template>
  <div class="h-full">
    <KDesigner />
  </div>
</template>
<script setup lang="ts">
import { KDesigner } from "k-designer";
</script>
<style>
.h-full {
  height: 100vh;
}
</style>
```

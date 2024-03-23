# 快速上手

## 安装 epic-designer

```bash
npm i epic-designer
```

epic-designer 目标是支持多 UI 兼容,目前支持以下 UI

- element-plus
- ant-design-vue
- naive-ui


## 选择 UI 组件库

### 选择 element-plus

安装ui框架依赖

```bash
npm i element-plus
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入epic-designer样式
import "epic-designer/dist/style.css";

// 引入Element plus样式
import "element-plus/dist/index.css";

import { setupElementPlus } from "epic-designer/dist/ui/elementPlus";
// 注册Element UI
setupElementPlus();
```

### 选择 ant-design-vue v4.x版本（antd推荐使用v4.x版本）

安装ui框架依赖

```bash
npm i ant-design-vue
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入epic-designer样式
import "epic-designer/dist/style.css";

// 引入antd UI 重置样式
import "ant-design-vue/dist/reset.css";

import { setupAntd } from "epic-designer/dist/ui/antd";
// 使用Antd UI
setupAntd();
```

### ant-design-vue v3.x版本需要改成下面方式

  为了减少维护精力，后续开发测试主要以 v4.x版本，不再对v3.x版本进行测试，建议升级ant-design-vue到v4.x最新版本

```javascript
// 引入epic-designer样式
import "epic-designer/dist/style.css";

// 引入antd UI样式
import "ant-design-vue/dist/antd.css";

import { setupAntd } from "epic-designer/dist/ui/antd";
// 使用Antd UI
setupAntd();
```

### 选择 naive-ui

安装ui框架依赖

```bash
npm i -D naive-ui
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入epic-designer样式
import "epic-designer/dist/style.css";

import { setupNaiveUi } from "epic-designer/dist/ui/naiveUi";
// 注册Naive Ui
setupNaiveUi();
```

## EDesigner(设计器) 基础用法

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

## EBuilder(生成器) 基础用法

```vue
<template>
  <div>
    <EBuilder :pageSchema="pageSchema" />
  </div>
</template>
<script setup>
import { EBuilder } from "epic-designer";

const pageSchema = {
  schemas: [
    {
      type: "page",
      id: "root",
      children: [
        {
          label: "输入框",
          type: "input",
          field: "input",
          icon: "epic-icon-write",
          input: true,
          componentProps: {
            defaultValue: "",
            placeholder: "请输入",
            size: "default",
            type: "text",
          },
          id: "gbm1xhrrj5s00",
        },
      ],
      componentProps: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
};
</script>
```

## monaco-editor资源加载问题

vite项目安装使用vite-plugin-monaco-editor插件加载monaco-editor依赖资源

```bash
npm i -D vite-plugin-monaco-editor
```

在vite.config.ts中添加

```typescript
import monacoEditorPlugin from 'vite-plugin-monaco-editor'
 
export default defineConfig({
plugins: [
    vue(), 
    monacoEditorPlugin({
      languageWorkers:['editorWorkerService', 'css', 'html', 'json', 'typescript']
    })
  ]
});
```
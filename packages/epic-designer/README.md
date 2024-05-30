![](https://epic.kcz66.com/static/logo.png#pic_center)

<h3 align="center" style="background-image:-webkit-linear-gradient(left,#44c0fa,#c26cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">EpicDesigner</h3>


<h4 align="center">一个开箱即用的拖拽式的可视化低代码设计器</h4>

<p align="center">
  <a href="https://github.com/vuejs/core">
    <img src="https://img.shields.io/badge/vue-3.3.4-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/microsoft/TypeScript">
    <img src="https://img.shields.io/badge/typescript-5.1.6-blue" alt="ant-design-vue">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>



📦github仓库：[https://github.com/Kchengz/epic-designer](https://github.com/Kchengz/epic-designer)

📦gitee仓库：[https://gitee.com/kcz66/epic-designer](https://gitee.com/kcz66/epic-designer)

📖文档地址：[https://docs.epicjs.cn](https://docs.epicjs.cn)

📖文档备用地址：[https://www.kcz66.com/epic-designer/](https://www.kcz66.com/epic-designer/)

💎项目预览地址：

- ElementPlus：[https://epic.kcz66.com/element-plus/basic](https://epic.kcz66.com/element-plus/basic?maximize=1)
- AntDesignVue：[https://epic.kcz66.com/ant-designe-vue/basic](https://epic.kcz66.com/ant-designe-vue/basic?maximize=1)
- NaiveUi：[https://epic.kcz66.com/naive-ui/basic](https://epic.kcz66.com/naive-ui/basic?maximize=1)

> 使用必须遵守国家法律法规，⛔不允许非法项目使用，后果自负❗

## 简介

可以简称`epic设计器`，是一个功能强大、开箱即用的拖拽式低代码设计器。它基于 Vue3 开发，兼容多套 UI 组件库，除了基础的页面设计功能，EpicDesigner 还提供了强大的扩展功能，可以让开发者根据自己的需求自由扩展和定制组件。此外，EpicDesigner使用 JSON 配置来生成页面，可帮助开发者快速生成页面，提高开发效率。它提供了两个重要组件：`e-designer` 设计器和 `e-builder` 生成器。


## 最新版本

[![](https://img.shields.io/npm/v/epic-designer.svg?style=flat-square)](https://www.npmjs.com/package/epic-designer)

[查看更新日志](./docs/updateLog.md)

#### 功能

- [x] 拖拽设计
- [x] 自定义 actionBar
- [x] 布局组件扩展
- [x] 自定义组件扩展
- [x] 事件扩展
- [x] 组件懒加载
- [x] 完善布局
- [x] 组件属性自定义
- [x] 支持不同 UI
- [x] 插件扩展



## 核心组件介绍

#### EDesigner 设计器

`EDesigner ` 是一个可视化设计器组件，用户可以通过拖拽组件的方式快速生成 JSON 配置。它提供了丰富的组件库和配置项，用户可以根据需要选择合适的组件并配置相应的属性、事件和动作。设计器还提供了实时预览功能，用户可以随时查看所设计页面的效果。最终，用户可以将 JSON 配置导出，用于页面的生成和修改。

#### EBuilder 生成器

`EBuilder` 是一个页面构建组件，它可以将设计器生成的 JSON 配置构建成页面，完成组件的渲染、事件绑定和数据回显等操作。

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

## 交流

点击链接加入 qq 群聊

- [【epic-designer 交流群：747609683】](https://jq.qq.com/?_wv=1027&k=CtrM9ce2)

## 捐赠

如果你觉得epic-designer对你有帮助，欢迎给我捐赠

![](https://epic.kcz66.com/static/donation.png)


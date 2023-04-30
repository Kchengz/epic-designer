## 简介
可以简称“K 设计器”，是一个功能强大、开箱即用的拖拽式低代码设计器。它基于 Vue3 开发，兼容多套 UI，除了基础的页面设计功能，KDesigner 还提供了强大的扩展功能，可以让开发者根据自己的需求自由扩展和定制组件。此外，KDesigner 使用 JSON 配置来生成页面，使得页面开发更快速、更方便，节约开发成本，提高开发效率。

- [github](https://github.com/Kchengz/k-designer)
- [码云 gitee](https://gitee.com/kcz66/k-designer)

## 最新版本

[![](https://img.shields.io/npm/v/k-designer.svg?style=flat-square)](https://www.npmjs.com/package/k-designer)

#### 功能

- [x] 拖拽设计
- [x] 自定义actionBar
- [x] 布局组件扩展
- [x] 自定义组件扩展
- [x] 事件扩展
- [x] 组件懒加载
- [ ] 完善布局
- [x] 组件属性自定义
- [ ] 支持不同UI
- [ ] 插件扩展





## 如何使用
### 安装k-designer

```bash
npm i k-designer
```



k-designer目标是支持多UI兼容

目前支持element-plus/ant-design-vue,以下可以选择安装

### 使用element-plus需要自行安装element-plus UI

```bash
npm i element-plus
```
main.ts 或者 main.js引入注册组件
```javascript
// 引入Element plus样式
import 'element-plus/dist/index.css'
// 引入k-designer样式
import "k-designer/dist/style.css";
import { pluginManager } from "k-designer";
import { useElementPlus } from "k-designer/dist/ui/useElementPlus";
// 使用Elemnt UI
useElementPlus(pluginManager);
```

### 使用ant-design-vue需要自行安装ant-design-vue

```bash
npm i ant-design-vue
```
main.ts 或者 main.js引入注册组件
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



### 在页面使用k-designer

```vue
<template>
  <div class="h-full">
    <KDesigner />
  </div>
</template>
<script setup lang="ts">
import { KDesigner } from 'k-designer';
</script>
<style>
.h-full {
  height: 100vh;
}
</style>
```



## 组件

- 设计器  k-designer

> 设计器（基于可视化操作快速设计出页面，生成配置json）

- 生成器 k-builder

> 构建器（根据设计器中获取的配置json数据，快速构建出页面）



## 交流
点击链接加入qq群聊

- [【k-designer交流群：747609683】](https://jq.qq.com/?_wv=1027&k=CtrM9ce2)

  

## 简介
基于vue和ant-design-vue实现的设计器，样式使用less作为开发语言，主要功能是能通过简单操作来生成配置表单，生成可保存的JSON数据，并能将JSON还原成页面，使开发更简单更快速

k-designer的前身是[k-form-design](https://gitee.com/kcz66/k-form-design)

k-form-design是基于vue2开发一个表单设计器，
在升级vue3时，参考了很多用户反馈的意见，在设计时，不仅仅只是设计表单，还可以用来设计页面等等

k-designer将不仅仅局限于设计表单，它或许把做一些页面组件进行封装，例如H5页面设计器

所以在vue3版本中 k-form-design 改名 k-designer

- [github](https://github.com/Kchengz/k-designer)
- [码云 gitee](https://gitee.com/kcz66/k-designer)

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
import { pluginManager, useElementPlus } from "k-designer";

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
import { pluginManager, useAntd } from "k-designer";

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

  

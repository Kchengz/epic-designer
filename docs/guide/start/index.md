## 简介

:::tip EpicDesigner 设计器
`EpicDesigner`是一个功能强大、开箱即用的拖拽式低代码设计器。它基于 Vue3 开发，兼容多套 UI 组件库，除了基础的页面设计功能，EDesigner 还提供了强大的扩展功能，可以让开发者根据自己的需求自由扩展和定制组件。此外，EDesigner 使用 JSON 配置来生成页面，可帮助开发者快速生成页面，提高开发效率。它提供了两个重要组件：`e-designer` 设计器和 `e-builder` 生成器。
:::

#### e-designer 设计器

`e-designer` 是一个可视化设计器组件，用户可以通过拖拽组件的方式快速生成 JSON 配置。它提供了丰富的组件库和配置项，用户可以根据需要选择合适的组件并配置相应的属性、事件和动作。设计器还提供了实时预览功能，用户可以随时查看所设计页面的效果。最终，用户可以将 JSON 配置导出，用于页面的生成和修改。

#### e-builder 生成器

`e-builder` 是一个页面构建组件，它可以将设计器生成的 JSON 配置构建成页面，完成组件的渲染、事件绑定和数据回显等操作。

## 最新版本

[![](https://img.shields.io/npm/v/epic-designer.svg?style=flat-square)](https://www.npmjs.com/package/epic-designer)

## 特性

- 可视化配置页面
- 提供预览、保存、生成 json、生成可执行代码等操作
- 支持表单验证
- 面板自定义
- 自定义组件扩展
- 组件属性自定义配置
- 组件样式配置
- 组件事件动作配置
- 布局嵌套使用及布局组件扩展

## 技术栈

| 图标                                                                      | 名称       | 版本  |
| ------------------------------------------------------------------------- | ---------- | ----- |
| [![](https://skillicons.dev/icons?i=vue)](https://cn.vuejs.org/)          | Vue        | 3.2.x |
| [![](https://skillicons.dev/icons?i=ts)](https://www.typescriptlang.org/) | Typescript | 5.0.x |
| [![](https://skillicons.dev/icons?i=vite)](https://cn.vitejs.dev/)        | Vite       | 3.2.x |

更多请查看 **package.json**

## 浏览器支持

开发和测试平台均在 Google 和最新版 EDGE 上完成，其它浏览器请自行测试。如果存在兼容问题可在 gitee 或 github 提交 Issue。

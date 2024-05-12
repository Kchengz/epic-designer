# 暗黑模式  <span style="font-size:16px">v0.9.11</span>

:::tip 国际化
`EpicDesigner`从v0.9.11开始支持了暗黑模式！

注：本部分文档仅切换暗黑模式主题，UI组件暗黑模式请自行参照UI文档

:::

## 如何使用

 首先你可以创建一个开关来控制 `暗黑模式` 的 class 类名。



> 如果您只需要暗色模式，只需在 html 上添加一个名为 `dark` 的类 。

```html
<html class="dark">
  <head></head>
  <body></body>
</html>
```

## 动态切换模式

```tsx
import { useTheme } from 'epic-designer'
const { toggleDark } = useTheme()

// 切换主题模式
toggleDark()
```

![](https://epic.kcz66.com/static/dark.png)

## 修改暗黑主题

同自定义主题一样，直接覆盖对应的 css 变量即可

像这样，新建一个 `styles/dark-vars.css`文件:

```css
html.dark {
  /* 自定义深色背景颜色 */
  --epic-primary-color: #98f;
  --epic-primary-hover-color: #9988ff26;
  --epic-widget-shade-color: #9988ff18;
}
```

在 Epic Designer 的样式之后导入它

```tsx
// main.ts
import "epic-designer/dist/style.css";
import './styles/dark-vars.css'
```

## UI组件暗黑模式

> 参照上面方案，可完成EpicDesigner 设计器暗黑模式，UI组件还需要参照UI官方文档完成暗黑模式切换

### Element Plus

> EpicDesigner与Element Plus暗黑模式一致，只需在 html 上添加一个名为 `dark` 的类即可

[暗黑模式 | Element Plus (element-plus.org)](https://element-plus.org/zh-CN/guide/dark-mode.html)

### Ant Design Vue

[定制主题 - Ant Design Vue (antdv.com)](https://www.antdv.com/docs/vue/customize-theme-cn#使用预设算法)

### Naive UI

[调整主题 - Naive UI](https://www.naiveui.com/zh-CN/light/docs/customize-theme#使用暗色主题)

## css变量

```
// 主色
--epic-primary-color: #3e8bf2;

// hover颜色
--epic-primary-hover-color: rgba(62, 139, 242, 0.08);

// 设计器背景色
--epic-designer-color: #fafafc;

// 设计器点颜色
--epic-designer-dot-color: #373739;

// 画布背景
--epic-edit-range-color: #fff;

// 属性视图背景色
--epic-view-color: #fff;

// 拖拽区域背景色
--epic-edit-color: #ccc;

// 活动视图切换器背景色
--epic-action-bar-color: #fff;

// 顶部颜色
--epic-header-color: white;

// 动作栏 hover
--epic-action-hover-color: #f8f8f8;

// 窗口部件 hover
--epic-widget-hover-color: #f8f8f8;

// 窗口部件遮罩颜色
--epic-widget-shade-color: rgba(62, 139, 242, 0.06);

// 事件项背景色
--epic-event-item-color: #f8f8f8;

// 阴影颜色
--epic-shadow-color: #0000003d;

// 主要文本颜色
--epic-text-main: #000000de;

// 二级文本颜色（介于主要文本和辅助文本之间）
--epic-text-secondary: #00000099;

// 辅助文本颜色（更浅）
--epic-text-helper: #00000066;

// 禁用文本颜色
--epic-text-disabled: #00000042;

// 边框颜色
--epic-border-color: #d9d9d9;

// 组件tabs颜色
--epic-compoent-tabs-color: #f8f8f8;

// 组件hover颜色
--epic-compoent-hover-color: rgba(62, 139, 242, 0.06);

// 字体大小
--epic-font-size: 14px;
```


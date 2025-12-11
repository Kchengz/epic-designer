# 自定义主题<span style="font-size:16px">v0.9.11</span>

:::tip 国际化
`EpicDesigner` 默认提供一套CSS 变量，方便使用者覆盖样式。

注：本部分文档仅定制设计器主题，不包含UI，UI组件主题定制请自行参照UI文档

:::

## 通过 CSS 变量设置

CSS 变量是一个非常有用的功能，几乎所有浏览器都支持。

你可以直接在全局样式中直接覆盖默认变量名称，比如：

像这样，新建一个 `styles/common-vars.css`文件:

```css
:root {
  --ep-primary: #98f;
  --ep-primary-hover: #9988ff26;
  --epic-widget-shade-color: #9988ff18;
}
```

在 Epic Designer 的样式之后导入它

```tsx
// main.ts
import "epic-designer/dist/style.css";
import './styles/common-vars.css'
```

 ![](https://examples.epicjs.cn/static/theme.jpg)

## UI组件主题定制

> 参照上面方案，仅完成EpicDesigner 设计器主题定制，UI组件主题还需要参照UI官方文档完成主题

### Element Plus
[主题 | Element Plus (element-plus.org)](https://element-plus.org/zh-CN/guide/theming.html)

### Ant Design Vue

[定制主题 - Ant Design Vue (antdv.com)](https://www.antdv.com/docs/vue/customize-theme-cn)

### Naive UI

[调整主题 - Naive UI](https://www.naiveui.com/zh-CN/os-theme/docs/customize-theme)

## css变量

```
// 主色
--ep-primary: #3e8bf2;

// hover颜色
--ep-primary-hover: rgba(62, 139, 242, 0.08);

// 设计器背景色
--ep-primary-foreground: #fafafc;

// 设计器点颜色
--epic-designer-dot-color: #373739;

// 画布背景
--ep-background: #fff;

// 属性视图背景色
--ep-background: #fff;

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
--ep-text-main: #000000de;

/* 次级级文本颜色 */
--ep-text-medium: #000000ab;

// 二级文本颜色
--ep-text-secondary: #00000099;

// 辅助文本颜色（更浅）
--ep-text-helper: #00000066;

// 禁用文本颜色
--ep-disabled: #00000042;

// 边框颜色
--ep-border: #d9d9d9;

// 组件tabs颜色
--epic-compoent-tabs-color: #f8f8f8;

// 组件hover颜色
--ep-primary-hover: rgba(62, 139, 242, 0.06);

// 字体大小
--ep-text-sm: 12px;
--ep-text-md: 14px;
--ep-text-lg: 16px;
```


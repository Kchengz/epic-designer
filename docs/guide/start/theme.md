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
  // 字体大小
  --ep-text-sm: 12px;
  --ep-text-md: 14px;
  --ep-text-lg: 16px;
  // 圆角
  --ep-radius: 6px;
  /* 背景与前景色 */
  --ep-background: oklch(1 0 0);
  --ep-foreground: oklch(0.141 0.005 285.823);
  /* 主色调 */
  --ep-primary: oklch(0.623 0.214 259.815);
  /* 浅紫色前景 */
  --ep-primary-foreground: oklch(0.97 0.014 254.604);
  /* 辅助色调 */
  --ep-secondary: oklch(0.967 0.001 286.375);
  --ep-secondary-foreground: oklch(0.21 0.006 285.885);
  /* 柔和色调 */
  --ep-muted: oklch(0.967 0.001 286.375);
  /* 柔和色调前景 */
  --ep-muted-foreground: oklch(0.552 0.016 285.938);
  /* 警示色调 */
  --ep-destructive: oklch(0.577 0.245 27.325);
  /* 边框与分隔线 */
  --ep-border: oklch(0.92 0.004 286.32);
  /* 侧边栏背景 */
  --ep-sidebar: oklch(0.985 0 0);
```


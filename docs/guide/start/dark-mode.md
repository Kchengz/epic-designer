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

![](https://examples.epicjs.cn/static/dark.png)

## 修改暗黑主题

同自定义主题一样，直接覆盖对应的 css 变量即可

像这样，新建一个 `styles/dark-vars.css`文件:

```css
html.dark {
  /* 自定义深色背景颜色 */
  --ep-primary: #98f;
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
  /* 背景色 */
  --ep-background: oklch(0.141 0.005 285.823);
  /* 前景色 */
  --ep-foreground: oklch(0.985 0 0);
  /* 主色调 */
  --ep-primary: oklch(0.623 0.214 259.815);
  /* 主色调前景 */
  --ep-primary-foreground: oklch(0.97 0.014 254.604);
  /* 辅助色调 */
  --ep-secondary: oklch(0.274 0.006 286.033);
  /* 辅助色调前景 */
  --ep-secondary-foreground: oklch(0.985 0 0);
  /* 柔和色调 */
  --ep-muted: oklch(0.274 0.006 286.033);
  /* 柔和色调前景 */
  --ep-muted-foreground: oklch(0.705 0.015 286.067);
  /* 警示色调 */
  --ep-destructive: oklch(0.704 0.191 22.216);
  /* 边框与分隔线 */
  --ep-border: oklch(1 0 0 / 10%);
  /* 侧边栏背景 */
  --ep-sidebar: oklch(0.21 0.006 285.885);
```


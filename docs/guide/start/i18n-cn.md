# 国际化

:::tip 国际化
`EpicDesigner` 目前的默认是ui的默认语言，如果需要调整ui使用其他语言，可以参考下面的方案。
:::

## Element Plus

先参考官方文档的国际化

[国际化 | Element Plus (element-plus.org)](https://element-plus.org/zh-CN/guide/i18n.html#国际化)

完成UI文档国际化基础上，添加`provideGlobalConfig`函数，完成EpicDesigner内部国际化

```tsx
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { provideGlobalConfig } from "epic-designer/dist/ui/elementPlus";
provideGlobalConfig({ locale: zhCn });
```

## Ant Design Vue

先参考官方文档的国际化

[国际化 - Ant Design Vue (antdv.com)](https://www.antdv.com/docs/vue/i18n-cn)

完成UI文档国际化基础上，添加`setDateLocale`函数，完成EpicDesigner内部国际化

```tsx
import { setDateLocale } from "epic-designer/dist/ui/antd";
setDateLocale('zh-cn')
```

## Naive UI

直接参考官方文档的国际化

[全局化配置 Config Provider - Naive UI](https://www.naiveui.com/zh-CN/os-theme/components/config-provider#language.vue)


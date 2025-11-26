# UI组件国际化

:::tip 国际化

注：本文档内容只是针对UI组件国际化设置说明，EpicDesigner暂时没支持国际化设置

`EpicDesigner` 目前的默认是ui组件的默认语言，如果需要调整ui使用其他语言，可以参考下面的方案。
:::

## Element Plus

先参考官方文档的国际化

[国际化 | Element Plus (element-plus.org)](https://element-plus.org/zh-CN/guide/i18n.html#国际化)

完成UI文档国际化基础上，添加`provideGlobalConfig`函数，完成EpicDesigner内部ElementPlus组件国际化

```tsx
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { provideGlobalConfig } from "@epic-designer/element-plus";
provideGlobalConfig({ locale: zhCn });
```

## Ant Design Vue

请参考官方文档的国际化

[国际化 - Ant Design Vue (antdv.com)](https://www.antdv.com/docs/vue/i18n-cn)

## Naive UI

请参考官方文档的国际化

[全局化配置 Config Provider - Naive UI](https://www.naiveui.com/zh-CN/os-theme/components/config-provider#language.vue)


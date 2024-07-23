# EDesigner 设计器

:::tip 设计器
`EDesigner` 是一个可视化设计器组件，用户可以通过拖拽组件的方式快速生成 JSON 配置。它提供了丰富的组件库和配置项，用户可以根据需要选择合适的组件并配置相应的属性、事件和动作。设计器还提供了实时预览功能，用户可以随时查看所设计页面的效果。最终，用户可以将 JSON 配置导出，用于页面的生成和修改。
:::

## 设计器布局说明

![](/layout.jpg)

**界面主要分为 6 个区域**

1. 顶部 操作按钮
2. 活动栏 可以切换侧边栏面板
3. 侧边栏 组件选择或信息展示
4. 编辑区域 拖拽组件布局设计
5. 右侧边栏 属性编辑相关
6. 底部 状态展示

其中 活动栏，侧边栏及右侧边栏可以自定义配置修改

## 基础用法

<ConfigProvider :theme="{ algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm }">
  <div class="epic-designer-container">
    <EDesigner  @save="handleSubmit"  />
  </div>
</ConfigProvider>

```vue
<template>
  <div class="epic-designer-container">
    <EDesigner @save="handleSubmit" />
  </div>
</template>
<script setup>
import { EDesigner } from "epic-designer";

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e) {
  console.log(e);
}
</script>
<style>
.epic-designer-container {
  width: 1100px;
  height: 800px;
  border: 1px solid var(--epic-border-color);
}
</style>
```

<script setup>
import "epic-designer/dist/style.css";
import { EDesigner, pluginManager } from "epic-designer";
import { setupAntd } from "epic-designer/dist/ui/antd";
import { ConfigProvider, theme } from 'ant-design-vue'
import { useTheme } from '@epic-designer/hooks'
const { isDark } = useTheme()

setupAntd(pluginManager);



function handleSubmit (e) {
  console.log(e)
}
</script>

<style>
.epic-designer-container{
width:1200px;
height:800px;
border: 1px solid var(--epic-border-color);
position: relative;
z-index: 20;
background: white;
}
</style>

## API

| 参数                  | 说明                                                       | 类型       | 默认值 | 版本   |
| --------------------- | ---------------------------------------------------------- | ---------- | ------ | ------ |
| title                 | 设计器头部标题                                             | string     | -      | 0.9.7  |
| defaultSchema         | 默认pageSchema，初始化和重置设计器将以该数据为基础模板     | PageSchema | -      | 0.9.6  |
| lockDefaultSchemaEdit | 锁定defaultSchema中组件不可以复制或移除                    | boolean    | false  | 0.9.7  |
| disabledZoom          | 禁止缩放功能                                               | boolean    | false  | -      |
| hiddenHeader          | 隐藏头部                                                   | boolean    | false  | -      |
| formMode              | 单表单模式，开启后不可再拖入表单，跟节点默认切换为表单组件 | boolean    | false  | 0.9.19 |

## 函数

| 函数名称 | 说明                                       | 参数 | 回调参数 | 版本   |
| -------- | ------------------------------------------ | ---- | -------- | ------ |
| setData  | 导入 json 数据，继续编辑                   | json | Boolean  | 0.0.36 |
| getData  | 获取 json 数据                             | -    | Object   | 0.0.36 |
| reset    | 清除表单                                   | -    | Boolean  | 0.0.36 |
| preview  | 预览组件，与点击设计器头部预览按钮效果一致 | -    | -        | 0.9.15 |

## 事件

| 事件名称         | 说明                   | 参数       | 版本   |
| ---------------- | ---------------------- | ---------- | ------ |
| save             | 点击保存按钮时回调     | json       | 0.0.35 |
| reset            | 点击清空重置按钮时触发 | PageSchema | 0.9.6  |
| toggleDeviceMode | 点击切换设备模式时触发 | string     | 0.9.7  |

## 插槽

| 插槽名称            | 说明                       | 参数 | 版本   |
| ------------------- | -------------------------- | ---- | ------ |
| header-prefix       | 顶部左侧插槽（logo，标题） |      | 0.8.1  |
| header-title        | 顶部标题                   |      |        |
| header-right-prefix | 顶部右侧区域前置插槽       |      | 0.8.10 |
| header-right-suffix | 顶部右侧区域后置插槽       |      | 0.8.10 |

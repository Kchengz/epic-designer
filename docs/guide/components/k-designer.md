## k-designer 设计器

:::tip 设计器
`k-designer` 是一个可视化设计器组件，用户可以通过拖拽组件的方式快速生成 JSON 配置。它提供了丰富的组件库和配置项，用户可以根据需要选择合适的组件并配置相应的属性、事件和动作。设计器还提供了实时预览功能，用户可以随时查看所设计页面的效果。最终，用户可以将 JSON 配置导出，用于页面的生成和修改。
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

<div class="k-designer-container">
    <KDesigner />
</div>

<script setup>
import "k-designer/dist/style.css";
import { pluginManager } from "k-designer";
import 'element-plus/dist/index.css'
import { useElementPlus } from "k-designer/dist/ui/useElementPlus";
useElementPlus(pluginManager);

import { KDesigner } from 'k-designer';

</script>
<style>
.k-designer-container{
width:1100px;
height:800px;
border:1px solid #ccc;
}
</style>

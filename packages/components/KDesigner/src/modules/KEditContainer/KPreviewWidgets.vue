<!--
该文件暂时未使用
-->
<template>
    <div class="k-preview-widgets">
        <div class="action-box">
            <div class="action-item">
                {{ designer.state.checkedNode?.type && pluginManager.getComponentConfingByType(designer.state.checkedNode.type)?.defaultSchema.label }}
            </div>
            <div title="复制" class="action-item" @click.stop="handleCopy()">
                <span class="iconfont icon-fuzhi3"></span>
            </div>
            <div title="删除" class="action-item" @click.stop="handleDelete()">
                <span class="iconfont icon-shanchu1"></span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

import { inject } from 'vue'
import { pluginManager } from '../../../../../utils/index'
import { Designer } from '../../../../../types/kDesigner'
const designer = inject('designer') as Designer
/**
 * 复制选中节点元素
 * @param schemas
 * @param schema
 * @param index
 */
function handleCopy () {

}

/**
 * 删除元素
 * @param schemas
 * @param schema
 * @param index
 */
function handleDelete () {
  //   schemas = schemas.filter((item, i) => index !== i)
  //   designer.setCheckedNode(schemas[index])
}
</script>

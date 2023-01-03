<template>
  <div class="k-designer-main">
    <KHeader />
    <div class="k-split-view-container">
      <KActionBar />
      <KEditContainer />
      <KRightSidebar />
    </div>
    <KFooter />
  </div>
</template>
<script lang="ts" setup>
import KHeader from './modules/KHeader/KHeader.vue'
import KFooter from './modules/KFooter/KFooter.vue'
import KRightSidebar from './modules/KAttributeView/KAttributeView.vue'
import KEditContainer from './modules/KEditContainer/KEditContainer.vue'
import KActionBar from './modules/KActionBar/KActionBar.vue'
import { provide, reactive, ref } from 'vue'
import { DesignerState, NodeItem, FormDataModel } from '../../../types/kDesigner'
import { findPathById } from '../../../utils/index'
const state = reactive<DesignerState>({
  checkedNode: null
})
const schemas = ref<NodeItem[]>([])

const formData = reactive<FormDataModel>({})
provide('schemas', schemas)

provide('formData', formData)

const rootSchema = {
  type: 'form',
  id: 'root',
  name: 'default',
  children: []
}

// 添加根节点
schemas.value.push(rootSchema)
// 选中根节点
setCheckedNode(rootSchema)

provide('designer', {
  setCheckedNode,
  state
})

/**
 * 选中节点
 * @param schema
 */
async function setCheckedNode (schema: NodeItem = rootSchema) {
  state.checkedNode = schema

  const ggg = await findPathById(schemas.value, schema.id)
  console.log(ggg)
}

</script>

<style lang="less">
@import './KDesigner.less';
</style>

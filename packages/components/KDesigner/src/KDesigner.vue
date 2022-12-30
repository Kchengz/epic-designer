<template>
    <div class="k-designer-main">
        <KHeader />
        <div class="k-split-view-container">
            <KActionBar />
            <!-- <KComponentView v-show="state.actionBarCheckedIndex === 0" /> -->
            <KEditContainer />
            <KRightSidebar />
        </div>
        <KFooter />
    </div>
</template>
<script lang="ts" setup>
import KHeader from './modules/KHeader/KHeader.vue'
import KFooter from './modules/KFooter/KFooter.vue'
// import KComponentView from './modules/KComponentView/KComponentView.vue'
import KRightSidebar from './modules/KAttributeView/KAttributeView.vue'
import KEditContainer from './modules/KEditContainer/KEditContainer.vue'
import KActionBar from './modules/KActionBar/KActionBar.vue'
import { provide, reactive, ref } from 'vue'
import { DesignerState, NodeItem } from '../../../types/kDesigner'

const state = reactive<DesignerState>({
  checkedNode: null
})
const schemas = ref<NodeItem[]>([])
provide('schemas', schemas)

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
function setCheckedNode (schema: NodeItem) {
  console.log(schema)
  state.checkedNode = schema
}

</script>

<style lang="less">
@import './KDesigner.less';
</style>

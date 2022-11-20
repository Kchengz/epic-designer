<template>
    <div class="k-designer-main">
        <KHeader />
        <div class="k-split-view-container">
            <KActionBar />
            <KLeftSidebar />
            <KContent />
            <KRightSidebar />
        </div>
        <KFooter />
    </div>
</template>
<script lang="ts" setup>
import KHeader from './modules/KHeader/KHeader.vue'
import KFooter from './modules/KFooter/KFooter.vue'
import KLeftSidebar from './modules/KComponentView/KComponentView.vue'
import KRightSidebar from './modules/KAttributeView/KAttributeView.vue'
import KContent from './modules/KEditContainer/KEditContainer.vue'
import KActionBar from './modules/KActionBar/KActionBar.vue'
import { provide, reactive } from 'vue'
import { DesignerState } from '../../../types/kDesigner'
const state = reactive<DesignerState>({
    checkedNode: null
})

provide('designer', {
    setCheckedNode,
    state
})

/**
 * 选中节点
 * @param schema 
 */
function setCheckedNode(schema) {
    state.checkedNode = schema
}


</script>

<style lang="less">
@import './KDesigner.less';
</style>
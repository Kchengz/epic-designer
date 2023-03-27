<template>
    <Modal title="动作配置" v-model:visible="visible" v-model="visible" width="700px">
        <div class="k-modal-action-main">
            <div class="k-modal-left-panel">
                组件 or 公共方法
            </div>
            <div class="k-modal-right-panel">
                动作选择
            </div>
        </div>
    </Modal>
</template>
<script lang="ts" setup>
import { pluginManager } from '../../../index'
import { ref } from 'vue'
const Modal = pluginManager.getComponent('Modal')
const visible = ref(false)

function handleOpen () {
  visible.value = true
}

defineExpose({
  handleOpen
})

</script>

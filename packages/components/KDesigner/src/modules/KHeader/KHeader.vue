<template>
    <header class="k-header">
        <div class="k-header-item">
            撤销 重做
        </div>
        <div class="k-header-item">
            k-designer
        </div>
        <div class="k-header-item">
            <span @click="handlePreview">预览</span> 关闭
        </div>
        <KPreview ref="preview" />

    </header>
</template>
<script lang="ts" setup>
import KPreview from '../KPreview/KPreview.vue'
import { ref } from 'vue'
const preview = ref<any>(null)

function handlePreview () {
  preview.value.handleOpen()
}
</script>

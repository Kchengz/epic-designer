<template>
  <header class="epic-header relative">
    <div class="epic-header-item flex-1 items-center flex text-12px text-#3d3d3d">
      <slot name="prefix">
        <a class="text-black decoration-none items-center flex" href="https://github.com/Kchengz/epic-designer"
          target="_blank">
          <img src="../../../../../static/logo.png" class="w-17px h-17px" alt="" srcset="">
          <span class="ml-4">epic-designer</span>
        </a>
      </slot>
    </div>

    <div class="epic-header-item flex-1 flex justify-center text-12px text-#3d3d3d">
      <slot name="title">
        epic-designer默认项目
      </slot>
    </div>
    <div class="epic-header-item flex-1 flex justify-end items-center">
      <Button size="small" @click="handlePreview">
        <EIcon name="icon-yulan" style="margin-right:6px" />
        预览
      </Button>

      <Button size="small" @click="handleSave">
        <EIcon name="icon-baocun" style="margin-right:6px" />
        保存
      </Button>
      <slot name="suffix"></slot>
    </div>
    <EPreview ref="preview" />
  </header>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { pluginManager } from '@epic-designer/utils'
import EIcon from '../../../../icon'
import EPreview from './../preview/index.vue'
const emits = defineEmits(['save', 'reset'])
const Button = pluginManager.getComponent('button')
const preview = ref<InstanceType<typeof EPreview> | null>(null)

function handlePreview() {
  preview.value!.handleOpen()
}

/**
 * 触发保存操作
 */
function handleSave() {
  emits('save')
}

</script>

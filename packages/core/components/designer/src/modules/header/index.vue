<template>
  <header class="epic-header relative">
    <div class="epic-header-item items-center flex text-12px text-#3d3d3d">
      <slot name="prefix">
        <a class="text-black decoration-none items-center flex" href="https://github.com/Kchengz/epic-designer"
          target="_blank">
          <img src="../../../../../static/logo.png" class="w-17px h-17px" alt="" srcset="">
          <span class="ml-4">epic-designer</span>
        </a>
      </slot>
    </div>

    <div class="epic-header-item epic-header-title absolute text-12px text-#3d3d3d">
      <slot name="title">epic-designer默认项目</slot>
    </div>
    <div class="epic-header-item flex flex items-center">
      <Button size="small" :disabled="!recordList.length" @click="handleUndo">
        <EIcon name="icon-chexiao2x" />
      </Button>
      <Button size="small" :disabled="!undoList.length" @click="handleRedo">
        <EIcon name="icon-fanhui2x" />
      </Button>
      <Button size="small" @click="handleReset">
        <EIcon name="icon-shanchu1" />
      </Button>
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
import { ref, inject } from 'vue'
import { pluginManager, revoke, deepCompareAndModify } from '@epic-designer/utils'
import { PageSchema, Designer } from '../../../../../types/epic-designer'
import EIcon from '../../../../icon'
import EPreview from './../preview/index.vue'
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer
const emits = defineEmits(['save', 'reset'])
const Button = pluginManager.getComponent('button')
const preview = ref<InstanceType<typeof EPreview> | null>(null)
const recordList = revoke.recordList
const undoList = revoke.undoList

function handlePreview() {
  preview.value!.handleOpen()
}

/**
 * 撤销操作
 */
function handleUndo() {
  const record = revoke.undo()
  if (!record) return
  deepCompareAndModify(pageSchema.schemas, record)
  designer.setCheckedNode(pageSchema.schemas[0])
}

/**
 * 重做操作
 */
function handleRedo() {
  const record = revoke.redo()
  if (!record) return
  deepCompareAndModify(pageSchema.schemas, record)
  designer.setCheckedNode(pageSchema.schemas[0])
}

/**
 * 触发保存操作
 */
function handleSave() {
  emits('save')
}


/**
 * 重置页面数据
 */
function handleReset() {
  emits('reset')
}
</script>

<template>
  <header class="k-header">
    <div class="k-header-item">
      <Button @click="handleUndo" size="small" :disabled="!recordList.length">
        <span class="iconfont icon-chexiao2x"></span>
      </Button>
      <Button @click="handleRedo" size="small" :disabled="!undoList.length">
        <span class="iconfont icon-fanhui2x"></span>
      </Button>
    </div>
    <div class="k-header-item">
      k-designer
    </div>
    <div class="k-header-item">
      <Button @click="handlePreview" size="small">
        <span class="iconfont icon-yulan" style="margin-right:6px"></span>
        预览</Button>
    </div>
    <KPreview ref="preview" />

  </header>
</template>
<script lang="ts" setup>
import KPreview from '../KPreview/KPreview.vue'
import { ref, Ref, inject } from 'vue'
import { pluginManager, revoke, getUUID } from '../../../../../utils/index'
import { NodeItem, Designer } from '../../../../../types/kDesigner'
const schemas = inject('schemas') as Ref<NodeItem[]>
const designer = inject('designer') as Designer

const Button = pluginManager.getComponent('button')
const preview = ref<any>(null)
const recordList = revoke.recordList
const undoList = revoke.undoList
function handlePreview () {
  preview.value.handleOpen()
}

/**
 * 撤销操作
 */
function handleUndo () {
  const record = revoke.undo()
  if (!record) return
  record[0].id = getUUID()
  schemas.value = record
  designer.setCheckedNode(record[0])
}

/**
 * 重做操作
 */
function handleRedo () {
  const record = revoke.redo()
  if (!record) return
  record[0].id = getUUID()
  schemas.value = record
  designer.setCheckedNode(record[0])
}
</script>

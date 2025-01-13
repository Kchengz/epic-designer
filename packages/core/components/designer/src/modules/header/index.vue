<template>
  <header class="epic-header relative">
    <div class="epic-header-item flex-1 items-center flex">
      <slot name="prefix">
        <a
          class="decoration-none items-center flex"
          href="https://github.com/Kchengz/epic-designer"
          target="_blank"
        >
          <img
            src="../../../../../static/logo.png"
            class="w-18px h-18px"
            alt=""
            srcset=""
          />
          <span class="ml-3">EpicDesigner</span>
        </a>
      </slot>
    </div>

    <div class="epic-header-item flex-1 flex justify-center text-12px">
      <slot name="title">
        {{ designerProps.title }}
      </slot>
    </div>
    <div class="epic-header-item flex-1 flex justify-end items-center">
      <slot name="right-prefix"></slot>
      <slot name="right-action">
        <div>
          <Button size="small" @click="handlePreview">
            <span class="flex! items-center h-full">
              <EIcon name="icon--epic--eye" class="mr-4px" />
              预览
            </span>
          </Button>
        </div>
        <div class="ml-2">
          <Button size="small" @click="handleSave">
            <span class="flex! items-center h-full">
              <EIcon name="icon--epic--save-outline-rounded" class="mr-4px" />
              保存
            </span>
          </Button>
        </div>
      </slot>
      <slot name="right-suffix"></slot>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { inject, type Ref } from 'vue'
import { pluginManager } from '@epic-designer/utils'
import EIcon from '../../../../icon'
import { DesignerProps } from '../../types'
const emits = defineEmits(['save', 'reset', 'preview'])
const Button = pluginManager.getComponent('button')
const designerProps = inject('designerProps') as Ref<DesignerProps>

/**
 * 预览
 */
function handlePreview() {
  emits('preview')
}

/**
 * 触发保存操作
 */
function handleSave() {
  emits('save')
}
</script>

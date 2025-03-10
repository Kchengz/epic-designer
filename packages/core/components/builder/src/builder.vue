<script lang="ts" setup>
import type { FormDataModel, PageSchema } from '@epic-designer/types';
import type { PageManager } from '@epic-designer/utils';

import {
  computed,
  getCurrentInstance,
  nextTick,
  provide,
  useSlots,
  watch,
} from 'vue';

import { EpicBaseLoader, EpicNode } from '@epic-designer/base-ui';
import { deepCompareAndModify, pluginManager } from '@epic-designer/utils';

import { useBuilder } from '../hooks/useBuilder';

// 定义组件的 props 类型
const props = defineProps<{
  disabled?: boolean;
  formData?: FormDataModel;
  pageSchema: PageSchema;
}>();

// 定义事件
const emit = defineEmits<{
  ready: [pageManager: PageManager];
}>();

// 使用 hooks 获取表单相关方法和状态
const {
  forms,
  getData,
  getFormInstance,
  getForms,
  pageManager,
  ready,
  setData,
  setForms,
  validate,
  validateAll,
} = useBuilder();

// 监听 pageSchema 的变化，并更新 pageManager.pageSchema
watch(
  () => props.pageSchema,
  (newSchema) => {
    deepCompareAndModify(pageManager.pageSchema, newSchema);
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听 formData 的变化，并设置表单数据
watch(
  () => props.formData,
  (data) => {
    if (data) {
      setData(data);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 提供依赖注入的上下文
provide('slots', useSlots());
provide('pageManager', pageManager);
provide('forms', forms);
provide('pageSchema', pageManager.pageSchema);
provide(
  'disabled',
  computed(() => props.disabled),
);

// 获取当前实例，并提取 proxy
const instance = getCurrentInstance();
const proxy = instance?.proxy;

/**
 * 组件加载完成后的处理函数
 * @returns {void}
 */
function handleReady() {
  nextTick(() => {
    ready.value = true;
    emit('ready', pageManager);

    // 注入组件实例到 pageManager
    if (proxy) {
      pageManager.addComponentInstance('builder', proxy);
    }
  });
}

// 暴露组件的方法和状态
defineExpose({
  getData,
  getFormInstance,
  getForms,
  pageManager,
  ready,
  setData,
  setForms,
  validate,
  validateAll,
});
</script>

<template>
  <div v-if="!pluginManager.initialized.value" class="epic-loading-box">
    <!-- <EpicBaseLoader /> -->
  </div>
  <Suspense v-else @resolve="handleReady">
    <template #default>
      <div class="epic-builder-main epic-scoped">
        <EpicNode
          v-for="(item, index) in pageManager.pageSchema.schemas"
          :key="index"
          :component-schema="item"
        />
      </div>
    </template>
    <template #fallback>
      <div class="epic-loading-box">
        <EpicBaseLoader />
      </div>
    </template>
  </Suspense>
</template>

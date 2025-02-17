<template>
  <div
    v-if="!pluginManager.initialized.value"
    class="epic-loading-box"
  >
    <!-- <EAsyncLoader /> -->
  </div>
  <Suspense
    v-else
    @resolve="handleReady"
  >
    <template #default>
      <div class="epic-builder-main epic-scoped">
        <ENode
          v-for="(item, index) in pageManager.pageSchema.schemas"
          :key="index"
          :component-schema="item"
        />
      </div>
    </template>
    <template #fallback>
      <div class="epic-loading-box">
        <EAsyncLoader />
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import ENode from "../../node";
import {
  provide,
  useSlots,
  getCurrentInstance,
  watch,
  computed,
  nextTick,
} from "vue";
import { PageSchema, FormDataModel } from "../../../types/epic-designer";
import {
  loadAsyncComponent,
  deepCompareAndModify,
  pluginManager,
} from "@epic-designer/utils";
import { useBuilder } from "../hooks/useBuilder";

// 异步加载 EAsyncLoader 组件
const EAsyncLoader = loadAsyncComponent(() => import("../../asyncLoader/index.vue"));

// 定义事件
const emit = defineEmits<{
  ready: any;
}>();

// 使用 hooks 获取表单相关方法和状态
const {
  ready,
  pageManager,
  forms,
  getData,
  setData,
  validate,
  getForms,
  setForms,
  validateAll,
  getFormInstance,
} = useBuilder();

// 定义组件的 props 类型
const props = defineProps<{
  pageSchema: PageSchema;
  formData?: FormDataModel;
  disabled?: boolean;
}>();

// 监听 pageSchema 的变化，并更新 pageManager.pageSchema
watch(
  () => props.pageSchema,
  (newSchema) => {
    deepCompareAndModify(pageManager.pageSchema, newSchema);
  },
  {
    immediate: true,
    deep: true,
  }
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
    immediate: true,
    deep: true,
  }
);

// 提供依赖注入的上下文
provide("slots", useSlots());
provide("pageManager", pageManager);
provide("forms", forms);
provide("pageSchema", pageManager.pageSchema);
provide(
  "disabled",
  computed(() => props.disabled)
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
    emit("ready", pageManager);

    // 注入组件实例到 pageManager
    if (proxy) {
      pageManager.addComponentInstance("builder", proxy);
    }
  });
}

// 暴露组件的方法和状态
defineExpose({
  ready,
  pageManager,
  getData,
  setData,
  validate,
  getForms,
  setForms,
  validateAll,
  getFormInstance,
});
</script>

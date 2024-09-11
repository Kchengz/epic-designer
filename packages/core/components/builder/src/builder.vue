<template>
  <div class="epic-loading-box" v-if="!pluginManager.initialized.value">
    <!-- <EAsyncLoader /> -->
  </div>
  <Suspense v-else @resolve="handleReady">
    <template #default>
      <div class="epic-builder-main">
        <ENode
          v-for="(item, index) in pageSchemaReactive.schemas"
          :key="index"
          :componentSchema="item"
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
  reactive,
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
import { useForm } from "../hooks/useForm";

// 异步加载 EAsyncLoader 组件
const EAsyncLoader = loadAsyncComponent(() => import("../../asyncLoader/index.vue"));

// 定义事件发射器
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
  getFormInstance,
} = useForm();

// 定义组件的 props 类型
const props = defineProps<{
  pageSchema: PageSchema;
  formData?: FormDataModel;
  disabled?: boolean;
}>();

// 定义页面 schema
const pageSchemaReactive = reactive<PageSchema>({
  schemas: [],
});

// 监听 pageSchema 的变化，并更新 pageSchemaReactive
watch(
  () => props.pageSchema,
  (newSchema) => {
    deepCompareAndModify(pageSchemaReactive, newSchema);
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

// 监听 pageSchemaReactive.script 的变化，并设置页面方法
watch(
  () => pageSchemaReactive.script,
  (script) => {
    if (script) {
      pageManager.setMethods(script, true);
    }
  },
  {
    immediate: true,
  }
);

// 提供依赖注入的上下文
provide("slots", useSlots());
provide("pageManager", pageManager);
provide("forms", forms);
provide("pageSchema", pageSchemaReactive);
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
  getFormInstance,
});
</script>

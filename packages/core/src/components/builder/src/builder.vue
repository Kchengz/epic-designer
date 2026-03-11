<script lang="ts" setup>
import type { PageManager } from '@epic-designer/manager';
import type {
  EpNodeInstance,
  FieldStates,
  FormDataModel,
  PageSchema,
} from '@epic-designer/types';

import {
  computed,
  getCurrentInstance,
  provide,
  ref,
  useSlots,
  watch,
} from 'vue';

import { EpBaseLoader, EpicNode } from '@epic-designer/base-ui';
import {
  BUILDER_KEY,
  createEventBus,
  FORM_INSTANCES_KEY,
  provideBuilderDisabled,
  providePageManager,
} from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';
import { setupPage } from '@epic-designer/panel-ui';
import {
  deepCompareAndModify,
  findSchemas,
  migrateComponentProps,
} from '@epic-designer/utils';

import { useBuilder } from '../hooks/useBuilder';

// 定义组件的 props 类型
const props = defineProps<{
  /** 禁用表单 */
  disabled?: boolean;
  /** 字段状态规则 */
  fieldStates?: FieldStates;
  formData?: FormDataModel;
  pageSchema: PageSchema;
}>();
// 定义事件
const emit = defineEmits<{
  change: [
    context: {
      field: string;
      formData: FormDataModel;
      value: any;
    },
  ];
  ready: [pageManager: PageManager];
}>();

setupPage(pluginManager);

const epBuilderSlot = pluginManager.component.get('epBuilderSlot');
// 使用 hooks 获取表单相关方法和状态
const {
  formInstances,
  getData,
  getFormInstance,
  getForms,
  pageManager,
  ready,
  resetData,
  setData,
  setForms,
  validate,
  validateAll,
} = useBuilder();

const suspenseKey = ref(0);

// 监听 pageSchema 的变化，并更新 pageManager.pageSchema
watch(
  () => props.pageSchema,
  (newSchema) => {
    if (!newSchema?.schemas?.length) return;
    migrateComponentProps(newSchema, true);
    deepCompareAndModify(pageManager.pageSchema, newSchema);
    suspenseKey.value++;
    ready.value = false;
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

createEventBus();
// 提供依赖注入的上下文
provideBuilderDisabled(computed(() => props.disabled));
provide(BUILDER_KEY, {
  fieldStateMap: computed(() => {
    //  将fieldStates转换对象类型
    const fieldStateMap = {};
    props.fieldStates?.forEach((fieldState) => {
      fieldStateMap[fieldState.field] = fieldState;
    });
    return fieldStateMap;
  }),
  slots: useSlots(),
});
providePageManager(pageManager);

provide(FORM_INSTANCES_KEY, formInstances);

/**
 * 组件加载完成后的处理函数，注: pageSchema更新会触发组件重新加载
 * @returns {void}
 */
function handleReady() {
  const unwatch = watch(
    () => pageManager.mountMonitor.isAllMounted.value,
    (finished) => {
      if (finished) {
        if (unwatch) unwatch();
        triggerEpicReady();
      }
    },
    { immediate: true },
  );
}

function triggerEpicReady() {
  ready.value = true;
  emit('ready', pageManager);

  // 执行绑定的ready事件
  findSchemas(pageManager.pageSchema.schemas, (schema) => {
    if (schema.on?.epicReady) {
      pageManager.doActions(schema.on.epicReady);
    }
    return false;
  });
}

// 获取当前实例，并提取 proxy
const instance = getCurrentInstance() as EpNodeInstance;
// 注入组件实例到 pageManager
pageManager.addComponentInstance('builder', instance);

pageManager.hook.register('formChange', (context) => {
  emit('change', context);
});

// 暴露组件的方法和状态
defineExpose({
  getData,
  getFormInstance,
  getForms,
  pageManager,
  ready,
  resetData,
  setData,
  setForms,
  validate,
  validateAll,
});
</script>

<template>
  <div
    v-if="
      !pluginManager.designer.initialized.value ||
      pageManager.pageSchema.schemas.length === 0
    "
    class="epic-loading-box"
  >
    <EpBaseLoader />
  </div>
  <Suspense v-else :key="suspenseKey" @resolve="handleReady">
    <template #default>
      <div class="epic-builder-main ep-scoped">
        <EpicNode
          v-for="(item, index) in pageManager.pageSchema.schemas"
          :key="index"
          :component-schema="item"
        />
        <component v-if="epBuilderSlot" :is="epBuilderSlot" />
      </div>
    </template>
    <template #fallback>
      <div class="epic-loading-box">
        <EpBaseLoader />
      </div>
    </template>
  </Suspense>
</template>

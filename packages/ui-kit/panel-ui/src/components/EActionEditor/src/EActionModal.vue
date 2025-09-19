<script lang="ts" setup>
import { computed, inject, nextTick, reactive, ref, toRaw } from 'vue';

import { EpicIcon, EpicTree } from '@epic-designer/base-ui';
import { PageManager, pluginManager } from '@epic-designer/manager';
import {
  ActionItem,
  ComponentConfigModel,
  ComponentSchema,
  PageSchema,
} from '@epic-designer/types';
import { deepClone, findSchemaById, getUUID } from '@epic-designer/utils';
import { useClipboard } from '@vueuse/core';

import EArgsEditor from './EArgsEditor.vue';
import EScriptEdit from './EScriptEdit.vue';

const emit = defineEmits(['add', 'edit']);
const Modal = pluginManager.getComponent('modal');
const Button = pluginManager.getComponent('button');
const isAdd = ref(true);
const pageSchema = inject('pageSchema') as PageSchema;
const pageManager = inject('pageManager', {}) as PageManager;
const visible = ref(false);
const selectedKeys = ref<string[]>([]);
const componentSchema = ref<ComponentSchema | null>(null);
const componentConfigModel = ref<ComponentConfigModel | null>(null);
const { copy } = useClipboard({});

const argsEditorKey = computed(() => {
  return componentSchema.value?.id ?? '';
});
const state = reactive({
  actionItem: {
    componentId: null,
    methodName: 'test',
    type: 'custom',
  } as ActionItem,
  cacheData: {},
});

const actionTypeText = computed(() => {
  const typeMap = {
    component: '组件',
    custom: '自定义函数',
    public: '公共函数',
  };

  if (state.actionItem.type === 'component' && componentSchema.value) {
    const label =
      componentSchema.value.label ||
      pluginManager.getComponentConfigByType(componentSchema.value.type)
        ?.defaultSchema.label ||
      '未命名组件';
    return `${label}`;
  }

  return typeMap[state.actionItem.type] || state.actionItem.type;
});

const methodOptions = computed(() => {
  // 组件动作列表
  if (state.actionItem.type === 'component') {
    if (componentSchema.value) {
      const componentConfigs = pluginManager.getComponentConfigs();
      return componentConfigs[componentSchema.value.type].config.action?.map(
        (item) => ({
          label: item.describe ?? item.description,
          value: item.type,
        }),
      );
    }
    return [];
  }

  // 自定义函数列表
  if (state.actionItem.type === 'custom') {
    return Object.entries(pageManager.funcs.value)
      .filter(([_key, value]) => typeof value === 'function')
      .map(([label]) => ({ label, value: label }));
  }

  // 公共函数列表
  if (state.actionItem.type === 'public') {
    return Object.entries(pluginManager.publicMethods).map(
      ([label, publicMethod]) => ({
        ...publicMethod,
        label: publicMethod.description,
        value: label,
      }),
    );
  }

  return [];
});

const actionArgsConfigs = computed(() => {
  if (state.actionItem.type === 'component' && componentSchema.value) {
    const action =
      pluginManager.getComponentConfigs()[componentSchema.value.type].config
        .action;
    const actionItem = action?.find(
      (item) => item.type === state.actionItem.methodName,
    );

    if (actionItem?.argsConfigs) {
      const index = actionItem.argsConfigs.findIndex(
        (item) => item.label === '设置数据',
      );
      index !== -1 &&
        (actionItem.argsConfigs[index] = {
          ...componentSchema.value,
          field: '0',
          id: getUUID(),
          label: '设置数据',
        } as ComponentSchema);
    }

    return actionItem?.argsConfigs ?? [];
  }
  return [];
});

function handleOpen() {
  visible.value = true;
  isAdd.value = true;
  state.actionItem.type = 'custom';
  state.actionItem.componentId = null;
  if (methodOptions.value?.length) {
    handleCheckedMethod(methodOptions.value[0]);
  }
}

function handleOpenEdit(action: any) {
  visible.value = true;
  isAdd.value = false;
  componentSchema.value = null;

  if (action.componentId) {
    const schema = findSchemaById(pageSchema.schemas, action.componentId);

    componentSchema.value = schema;
    selectedKeys.value = [action.componentId];
  }

  nextTick(() => {
    state.actionItem.componentId = action.componentId;
    state.actionItem.methodName = action.methodName;
    state.actionItem.type = action.type;
    state.actionItem.args = action.args;
  });
}

function handleSave() {
  if (!state.actionItem.methodName) {
    // eslint-disable-next-line no-alert
    alert('请先选择动作方法');
    return;
  }
  emit(isAdd.value ? 'add' : 'edit', deepClone(toRaw(state.actionItem)));
  handleClose();
}

function handleClose() {
  visible.value = false;
  selectedKeys.value = [];
  // 清空缓存数据
  state.cacheData = {};
}

function toggleMethod(type: 'component' | 'custom' | 'public') {
  state.actionItem.componentId = null;
  state.actionItem.type = type;
  componentSchema.value = null;
  state.actionItem.methodName = null;

  selectedKeys.value = [];
  if (methodOptions.value?.length) {
    handleCheckedMethod(methodOptions.value[0]);
  }
}
function handleNodeClick(e: any) {
  if (state.actionItem.args) {
    // 存在参数配置，缓存参数配置数据
    state.cacheData[
      `${state.actionItem.componentId}${state.actionItem.methodName}`
    ] = state.actionItem.args;
  }

  state.actionItem.componentId = e.id;
  state.actionItem.type = 'component';
  state.actionItem.methodName = null;
  componentSchema.value = e.componentSchema;
  componentConfigModel.value =
    pluginManager.getComponentConfigs()[e.componentSchema.type];

  if (methodOptions.value?.length) {
    handleCheckedMethod(methodOptions.value[0]);
  }
}

function handleCheckedMethod({ args, value }: any) {
  // activeTab.value = '脚本编辑'
  state.actionItem.methodName = value;

  // 获取缓存参数配置
  state.actionItem.args =
    state.cacheData[
      `${state.actionItem.componentId}${state.actionItem.methodName}`
    ] || args;
}

defineExpose({
  handleOpen,
  handleOpenEdit,
});
</script>
<template>
  <Modal
    v-model="visible"
    width="1200px"
    title="动作配置"
    @close="handleClose"
    @ok="handleSave"
  >
    <div class="epic-modal-action-main rounded">
      <div class="epic-modal-left-panel flex h-full flex-col">
        <!-- 动作所属对象 start -->
        <div class="flex h-0 flex-1 flex-col">
          <div
            class="fun-btn"
            :class="{ checked: state.actionItem.type === 'custom' }"
            @click="toggleMethod('custom')"
          >
            自定义函数
          </div>
          <div
            class="fun-btn"
            :class="{ checked: state.actionItem.type === 'public' }"
            @click="toggleMethod('public')"
          >
            公共函数
          </div>
          组件
          <div class="h-0 flex-1">
            <EpicTree
              v-model:selected-keys="selectedKeys"
              :options="pageSchema.schemas"
              @node-click="handleNodeClick"
            >
              <template #tree-node="{ schema }">
                <div
                  class="epic-text-padding hover:bg-$epic-widget-hover-color flex items-center"
                  :class="{ hidden: schema.componentProps?.hidden }"
                >
                  <span class="max-w-full truncate">
                    <EpicIcon
                      v-if="schema.componentProps?.hidden"
                      name="icon--epic--visibility-off-outline-rounded"
                      class="translate-y-2px"
                    />
                    {{
                      schema.label ??
                      pluginManager.getComponentConfigByType(schema.type)
                        ?.defaultSchema.label
                    }}
                  </span>
                  <span class="epic-node-type-text w-0 flex-1 truncate">
                    {{ schema.id }}
                  </span>
                  <Button
                    class="epic-copy-id-btn opacity-0"
                    size="small"
                    @click.stop="copy(schema.id)"
                  >
                    复制ID
                  </Button>
                </div>
              </template>
            </EpicTree>
          </div>
        </div>
        <!-- 动作选择 start -->
        <div class="epic-action-select h-30/100 flex flex-col">
          <div class="mb-2">动作选择（{{ actionTypeText }}）</div>
          <div class="pr-8px flex-1 overflow-auto">
            <div
              v-for="item in methodOptions"
              :key="item.value"
              :class="{ checked: item.value === state.actionItem.methodName }"
              class="epic-action-item"
              @click="handleCheckedMethod(item)"
            >
              <span :title="item.value">{{ item.label }}</span>
            </div>
            <div
              v-show="!methodOptions?.length"
              class="pt-42px text-center text-gray-400"
            >
              当前组件暂无动作
            </div>
          </div>
        </div>
        <!-- 动作所属对象 end -->
        <!-- 动作选择 end -->
      </div>
      <!-- 动作配置 start -->
      <div class="epic-modal-right-panel">
        <EScriptEdit v-if="state.actionItem.type === 'custom'" />
        <div
          v-if="
            state.actionItem.type !== 'custom' &&
            state.actionItem.methodName &&
            methodOptions?.length
          "
          class="bg-$epic-widget-hover-color mb-4 rounded-lg border p-4 transition-colors"
        >
          <div class="flex flex-col gap-1">
            <div class="flex items-center">
              <EpicIcon name="icon--epic--info" class="mr-2" />
              <span class="text-$epic-text-medium text-sm font-medium">
                {{ componentSchema?.label }}
                <span class="text-$epic-text-main">
                  {{
                    methodOptions.find(
                      (item) => item.value === state.actionItem.methodName,
                    )?.label || '未知'
                  }}
                </span>
                动作配置
              </span>
            </div>
          </div>
        </div>
        <div
          v-if="actionArgsConfigs.length === 0"
          class="pt-42px text-center text-gray-400"
        >
          暂无配置
        </div>
        <EArgsEditor
          v-else
          :key="argsEditorKey"
          v-model="state.actionItem.args"
          :action-item="state.actionItem"
          :action-args-configs="actionArgsConfigs"
          :component-config-model="componentConfigModel"
        />
      </div>
      <!-- 动作配置 end -->
    </div>
  </Modal>
</template>

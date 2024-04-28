<template>
  <Modal
    v-model="visible"
    class="w-1200px"
    width="1200px"
    @close="handleClose"
    @ok="handleSave"
    title="动作配置"
  >
    <div class="rounded bg-white epic-modal-action-main">
      <div class="epic-modal-left-panel h-full flex flex-col">
        <!-- 动作所属对象 start -->
        <div class="flex flex-1 h-0 flex-col">
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
          <div class="flex-1 h-0">
            <ETree
              v-model:selectedKeys="selectedKeys"
              :options="pageSchema.schemas"
              @nodeClick="handleNodeClick"
            />
          </div>
        </div>
        <!-- 动作选择 start -->
        <div class="epic-action-select h-30/100 flex flex-col">
          <div class="mb-2">动作选择</div>
          <div class="flex-1 overflow-auto pr-8px">
            <div
              v-for="item in methodOptions"
              :class="{ checked: item.value === state.actionItem.methodName }"
              @click="handleCheckedMethod(item.value)"
              :key="item.value"
              class="epic-action-item"
            >
              <span>{{ item.label }}</span>
            </div>
            <div
              v-show="!methodOptions?.length"
              class="text-center pt-42px text-gray-400"
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
          v-else-if="actionArgsConfigs.length === 0"
          class="text-center pt-42px text-gray-400"
        >
          暂无配置
        </div>
        <EArgsEditor
          v-else
          v-model="state.actionItem.args"
          :actionArgsConfigs="actionArgsConfigs"
        />
      </div>
      <!-- 动作配置 end -->
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import {
  pluginManager,
  PageManager,
  deepClone,
  findSchemaById,
  getUUID,
} from "@epic-designer/utils";
import { ref, inject, toRaw, reactive, computed, nextTick } from "vue";
import ETree from "../../../components/tree";
import { ComponentSchema, PageSchema, FormDataModel } from "../../../types/epic-designer";
import EScriptEdit from "./EScriptEdit.vue";
import EArgsEditor from "./EArgsEditor.vue";

const Modal = pluginManager.getComponent("modal");
const isAdd = ref(true);
const pageSchema = inject("pageSchema") as PageSchema;
const pageManager = inject("pageManager", {}) as PageManager;
const visible = ref(false);
const selectedKeys = ref<string[]>([]);
const componentSchema = ref<ComponentSchema | null>(null);

const emit = defineEmits(["add", "edit"]);

const methodOptions = computed(() => {
  // 组件动作列表
  if (state.actionItem.type === "component") {
    if (componentSchema.value) {
      return pluginManager
        .getComponentConfings()
        [componentSchema.value.type].config.action?.map((item) => ({
          label: item.describe,
          value: item.type,
        }));
    }
    return [];
  }

  // 自定义函数列表
  if (state.actionItem.type === "custom") {
    return Object.entries(pageManager.funcs.value)
      .filter(([_key, value]) => typeof value === "function")
      .map(([label]) => ({ label, value: label }));
  }

  // 公共函数列表
  if (state.actionItem.type === "public") {
    return Object.entries(pluginManager.publicMethods).map(([label]) => ({
      label,
      value: label,
    }));
  }

  return [];
});

const actionArgsConfigs = computed(() => {
  if (state.actionItem.type === "component") {
    if (componentSchema.value) {
      const action = pluginManager.getComponentConfings()[componentSchema.value.type]
        .config.action;
      const actionItem = action?.find(
        (item) => item.type === state.actionItem.methodName
      );

      if (actionItem?.argsConfigs) {
        const index = actionItem.argsConfigs.findIndex(
          (item) => item.label === "设置数据"
        );
        index !== -1 &&
          (actionItem.argsConfigs[index] = {
            ...componentSchema.value,
            label: "设置数据",
            field: "0",
            id: getUUID(),
          } as ComponentSchema);
      }

      return actionItem?.argsConfigs ?? [];
    }
  }
  return [];
});

const state = reactive({
  actionItem: {
    type: "custom",
    methodName: "test",
    componentId: null,
  } as FormDataModel,
  cacheData: {},
});

function handleOpen() {
  visible.value = true;
  isAdd.value = true;
  state.actionItem.type = "custom";
  state.actionItem.componentId = null;
  if (methodOptions.value?.length) {
    handleCheckedMethod(methodOptions.value[0].value);
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
    alert("请先选择动作方法");
    return;
  }
  emit(isAdd.value ? "add" : "edit", deepClone(toRaw(state.actionItem)));
  handleClose();
}

function handleClose() {
  visible.value = false;
  selectedKeys.value = [];
  // 清空缓存数据
  state.cacheData = {};
}

function toggleMethod(type: string) {
  state.actionItem.componentId = null;
  state.actionItem.type = type;
  componentSchema.value = null;
  state.actionItem.methodName = null;

  selectedKeys.value = [];
  if (methodOptions.value?.length) {
    handleCheckedMethod(methodOptions.value[0].value);
  }
}
function handleNodeClick(e: any) {
  if (state.actionItem.args) {
    // 存在参数配置，缓存参数配置数据
    state.cacheData[state.actionItem.componentId + state.actionItem.methodName] =
      state.actionItem.args;
  }

  state.actionItem.componentId = e.id;
  state.actionItem.type = "component";
  state.actionItem.methodName = null;
  componentSchema.value = e.componentSchema;

  if (methodOptions.value?.length) {
    handleCheckedMethod(methodOptions.value[0].value);
  }
}

function handleCheckedMethod(value: string) {
  // activeTab.value = '脚本编辑'
  state.actionItem.methodName = value;

  // 获取缓存参数配置
  state.actionItem.args =
    state.cacheData[state.actionItem.componentId + state.actionItem.methodName];
}

defineExpose({
  handleOpen,
  handleOpenEdit,
});
</script>

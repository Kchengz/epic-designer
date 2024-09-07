<template>
  <!-- 工具条 start  -->
  <div class="epic-edit-toolbar flex items-center justify-between px-2">
    <!-- 操作按钮 start  -->
    <div class="flex-1 h-full flex items-center">
      <template v-for="(action, index) in actionOptions" :key="index">
        <div v-if="action.divider" class="epic-divider"></div>
        <div
          :title="action.title"
          class="epic-action-item text-base h-90% px-10px flex items-center cursor-pointer"
          :class="{ disabled: action.disabled }"
          @click="action.on"
        >
          <EIcon :name="action.icon"></EIcon>
        </div>
      </template>
    </div>
    <!-- 操作按钮 end  -->

    <input
      type="file"
      ref="fileRef"
      accept=".json,.txt"
      v-show="false"
      @change="handleFileSelected"
    />

    <div class="flex-1 h-full flex items-center justify-end">
      <!-- 缩放操作 start  -->
      <div v-if="!disabledZoom" class="flex items-center ml-12px">
        <div class="pr-8px w-82px cursor-pointer">
          <Select
            v-model:value="canvasScaleComuted"
            v-model="canvasScaleComuted"
            :options="canvasScaleOptions"
            size="small"
          ></Select>
        </div>
      </div>
      <!-- 缩放操作 end  -->
      <!-- 画布类型切换 start -->
      <div class="epic-device h-28px items-center gap-1 rounded-md border p-2px flex">
        <template v-for="item in deviceOptions" :key="item.key">
          <div
            :title="item.title"
            class="epic-device-item h-full px-1 flex items-center cursor-pointer text-base transition-colors rounded-sm"
            :class="{ checked: item.key === checkedKey }"
            @click="handleSetCanvas(item.key)"
          >
            <EIcon :name="item.icon"></EIcon>
          </div>
        </template>
      </div>
      <!-- 画布类型切换 end -->
    </div>
  </div>
  <EPreviewJson ref="previewJson" />
  <!-- 工具条 end  -->
</template>
<script lang="ts" setup>
import {
  pluginManager,
  Revoke,
  deepCompareAndModify,
  convertKFormData,
} from "@epic-designer/utils";
import { useStore } from "@epic-designer/hooks";
import type { PageSchema, Designer } from "../../../../../types/epic-designer";
import { computed, inject, ref } from "vue";
import EIcon from "../../../../icon";
import EPreviewJson from "./previewJson.vue";

const Select = pluginManager.getComponent("select");

const { canvasScale, disabledZoom } = useStore();
const checkedKey = ref("pc");
const pageSchema = inject("pageSchema") as PageSchema;
const designer = inject("designer") as Designer;
const revoke = inject("revoke") as Revoke;
const previewJson = ref<InstanceType<typeof EPreviewJson> | null>(null);
const deviceOptions = [
  {
    icon: "icon--epic--computer-outline-rounded",
    title: "pc",
    key: "pc",
  },
  {
    icon: "icon--epic--tablet-android-outline-rounded",
    title: "平板",
    key: "pad",
  },
  {
    icon: "icon--epic--phone-iphone-outline-sharp",
    title: "手机",
    key: "mobile",
  },
];

const actionOptions = computed(() => {
  return [
    {
      icon: "icon--epic--code",
      title: "查看数据",
      on: () => handlePreview(),
    },
    {
      icon: "icon--epic--exit-to-app-rounded",
      title: "导入数据",
      on: handleOpenFileSelector,
    },
    {
      icon: "icon--epic--trash",
      title: "清空",
      on: handleReset,
    },
    {
      icon: "icon--epic--undo",
      title: "撤销",
      on: handleUndo,
      disabled: !revoke.recordList.value.length,
      divider: true,
    },
    {
      icon: "icon--epic--redo",
      title: "重做",
      on: handleRedo,
      disabled: !revoke.undoList.value.length,
    },
  ];
});

const fileRef = ref<HTMLInputElement | null>(null);
const canvasScaleComuted = computed({
  get() {
    return `${(canvasScale.value * 100).toFixed(0)}%`;
  },
  set(value) {
    const percentage = parseFloat(value);
    canvasScale.value = percentage / 100;
  },
});

const canvasScaleOptions = [
  {
    label: "60%",
    value: "60%",
  },
  {
    label: "80%",
    value: "80%",
  },
  {
    label: "100%",
    value: "100%",
  },
  {
    label: "120%",
    value: "120%",
  },
  {
    label: "140%",
    value: "140%",
  },
];

/**
 * 撤销操作
 */
function handleUndo() {
  const componentSchema = revoke.undo();
  if (!componentSchema) return;
  deepCompareAndModify(pageSchema.schemas, componentSchema);
  designer.setCheckedNode(pageSchema.schemas[0]);
}

/**
 * 重做操作
 */
function handleRedo() {
  const componentSchema = revoke.redo();
  if (!componentSchema) return;
  deepCompareAndModify(pageSchema.schemas, componentSchema);
  designer.setCheckedNode(pageSchema.schemas[0]);
}

/**
 * 重置页面数据
 */
function handleReset() {
  designer.reset();
}

// 预览数据
function handlePreview() {
  previewJson.value!.handleOpen();
}

/**
 * 打开文件选择器
 */
function handleOpenFileSelector() {
  fileRef.value?.click();
}

// 选择文件
function handleFileSelected(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  e.target.value = null;

  // 通过json文件导入
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = (res) => {
    handleImporttData(res.target?.result as string);
  };
}

/**
 * 导入数据
 */
function handleImporttData(content?: string) {
  // 导入JSON
  try {
    let schema = JSON.parse(content ?? "");
    if (!schema.schemas) {
      schema = convertKFormData(schema);
    }

    // 调用 deepCompareAndModify 函数比较 pageSchema 和传入的 schema，进行修改
    deepCompareAndModify(pageSchema, schema);
  } catch (error) {
    console.error(error);
  }
}

/**
 * 设置画布宽高
 * @param type
 */
function handleSetCanvas(type: string) {
  designer.handleToggleDeviceMode(type);
  checkedKey.value = type;
  const canvasConfigs = {
    pc: {},
    pad: {
      width: "780px",
      mode: type,
    },
    mobile: {
      width: "390px",
      mode: type,
    },
  };

  pageSchema.canvas = canvasConfigs[type];
}
</script>

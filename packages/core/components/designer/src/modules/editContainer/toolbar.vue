<template>
  <!-- 工具条 start  -->
  <div class="epic-edit-toolbar flex items-center justify-between px-4">
    <div class="flex-1 h-full flex items-center">
      <div
        :title="item.title"
        class="epic-action-item text-18px h-90% px-10px flex items-center cursor-pointer"
        v-for="(item, index) in actionOptions"
        :class="{ disabled: item.disabled }"
        :key="index"
        @click="item.on"
      >
        <EIcon :name="item.icon"></EIcon>
      </div>
    </div>

    <input
      type="file"
      ref="fileRef"
      accept=".json,.txt"
      v-show="false"
      @change="handleFileSelected"
    />

    <div class="flex-1 h-full flex items-center justify-center">
      <div
        :title="item.title"
        class="epic-device-item h-90% px-10px flex items-center cursor-pointer"
        :class="{ checked: item.key === checkedKey }"
        v-for="item in deviceOptions"
        :key="item.key"
        @click="handleSetCanvas(item.key)"
      >
        <EIcon :name="item.icon"></EIcon>
      </div>
    </div>
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
        <div class="w-90px cursor-pointer">
          <Slider
            :min="0.6"
            :max="1.4"
            :step="0.01"
            :tooltip="false"
            v-model:value="canvasScale"
            v-model="canvasScale"
          />
        </div>
      </div>
      <!-- 缩放操作 end  -->
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

const Slider = pluginManager.getComponent("slider");
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
      icon: "icon--epic--code-blocks-outline-rounded",
      title: "查看数据",
      on: () => handlePreview(),
    },
    {
      icon: "icon--epic--exit-to-app-rounded",
      title: "导入数据",
      on: handleOpenFileSelector,
    },
    {
      icon: "icon--epic--delete-outline-rounded",
      title: "清空",
      on: handleReset,
    },
    {
      icon: "icon--epic--undo-rounded",
      title: "撤销",
      on: handleUndo,
      disabled: !revoke.recordList.value.length,
    },
    {
      icon: "icon--epic--redo-rounded",
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
    canvasScale.value = Number(value);
  },
});

const canvasScaleOptions = [
  {
    label: "60%",
    value: "0.6",
  },
  {
    label: "80%",
    value: "0.8",
  },
  {
    label: "100%",
    value: "1.0",
  },
  {
    label: "120%",
    value: "1.2",
  },
  {
    label: "140%",
    value: "1.4",
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

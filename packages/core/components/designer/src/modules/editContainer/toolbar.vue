<script lang="ts" setup>
import type { Ref } from 'vue';

import type { Designer, PageSchema } from '../../../../../types/epic-designer';

import { computed, inject, ref } from 'vue';

import { useStore } from '@epic-designer/hooks';
import {
  convertKFormData,
  deepCompareAndModify,
  pluginManager,
  Revoke,
} from '@epic-designer/utils';

import EIcon from '../../../../icon';
import { DesignerProps } from '../../types';
import EPreviewJson from './previewJson.vue';

const Select = pluginManager.getComponent('select');

const { canvasScale, disabledZoom } = useStore();
const pageSchema = inject('pageSchema') as PageSchema;
const designer = inject('designer') as Designer;
const revoke = inject('revoke') as Revoke;
const designerProps = inject('designerProps') as Ref<DesignerProps>;
const previewJson = ref<InstanceType<typeof EPreviewJson> | null>(null);

const deviceOptions = [
  {
    icon: 'icon--epic--computer-outline-rounded',
    key: 'pc',
    title: 'pc',
  },
  {
    icon: 'icon--epic--tablet-android-outline-rounded',
    key: 'pad',
    title: '平板',
  },
  {
    icon: 'icon--epic--phone-iphone-outline-sharp',
    key: 'mobile',
    title: '手机',
  },
];

const actionOptions = computed(() => {
  return [
    {
      icon: 'icon--epic--code',
      on: handlePreviewJSON,
      title: '查看数据',
    },
    {
      icon: 'icon--epic--exit-to-app-rounded',
      on: handleOpenFileSelector,
      title: '导入数据',
    },
    {
      icon: 'icon--epic--trash',
      on: designer.reset,
      title: '清空',
    },
    {
      disabled: revoke.recordList.value.length === 0,
      divider: true,
      icon: 'icon--epic--undo',
      on: handleUndo,
      title: '撤销',
    },
    {
      disabled: revoke.undoList.value.length === 0,
      icon: 'icon--epic--redo',
      on: handleRedo,
      title: '重做',
    },
    {
      divider: true,
      icon: 'icon--epic--eye',
      on: designer.preview,
      show: () => designerProps.value.hiddenHeader,
      title: '预览',
    },
    {
      icon: 'icon--epic--save-outline-rounded',
      on: designer.save,
      show: () => designerProps.value.hiddenHeader,
      title: '保存',
    },
  ];
});

const canvasConfigs = {
  mobile: {
    mode: 'mobile',
    width: '390px',
  },
  pad: {
    mode: 'pad',
    width: '780px',
  },
  pc: {},
};

const selectedKey = computed({
  get() {
    return pageSchema.canvas?.mode ?? 'pc';
  },
  set(type: string) {
    designer.handleToggleDeviceMode(type);
    pageSchema.canvas = canvasConfigs[type];
  },
});

const fileRef = ref<HTMLInputElement | null>(null);
const canvasScaleComuted = computed({
  get() {
    return `${(canvasScale.value * 100).toFixed(0)}%`;
  },
  set(value) {
    const percentage = Number.parseFloat(value);
    canvasScale.value = percentage / 100;
  },
});

const canvasScaleOptions = [
  {
    label: '60%',
    value: '60%',
  },
  {
    label: '80%',
    value: '80%',
  },
  {
    label: '100%',
    value: '100%',
  },
  {
    label: '120%',
    value: '120%',
  },
  {
    label: '140%',
    value: '140%',
  },
];

function isShow(show: any) {
  // show属性为function类型则执行
  if (typeof show === 'function') {
    return show();
  }

  return true;
}

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

// 预览数据
function handlePreviewJSON() {
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
  reader.addEventListener('load', (res) => {
    handleImportData(res.target?.result as string);
  });
}

/**
 * 导入数据
 */
function handleImportData(content?: string) {
  // 导入JSON
  try {
    let schema = JSON.parse(content ?? '');
    if (!schema.schemas) {
      // 兼容 处理kform表单数据
      schema = convertKFormData(schema);
    }

    // 调用 deepCompareAndModify 函数比较 pageSchema 和传入的 schema，进行修改
    deepCompareAndModify(pageSchema, schema);

    designer.handleImported(schema);

    // 选中根节点
    designer.setCheckedNode(pageSchema.schemas[0]);
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
  selectedKey.value = type;
}
</script>
<template>
  <!-- 工具条 start  -->
  <div class="epic-edit-toolbar flex items-center justify-between px-2">
    <!-- 操作按钮 start  -->
    <div class="flex h-full flex-1 items-center">
      <template v-for="(action, index) in actionOptions" :key="index">
        <div
          v-if="action.divider && isShow(action.show)"
          class="epic-divider"
        ></div>
        <div
          v-if="isShow(action.show)"
          :title="action.title"
          class="epic-action-item h-90% px-10px flex cursor-pointer items-center text-base"
          :class="{ disabled: action.disabled }"
          @click="action.on"
        >
          <EIcon :name="action.icon" />
        </div>
      </template>
    </div>
    <!-- 操作按钮 end  -->

    <input
      v-show="false"
      ref="fileRef"
      type="file"
      accept=".json,.txt"
      @change="handleFileSelected"
    />

    <div class="flex h-full flex-1 items-center justify-end">
      <!-- 缩放操作 start  -->
      <div v-if="!disabledZoom" class="ml-12px flex items-center">
        <div class="pr-8px w-82px cursor-pointer">
          <Select
            v-model:value="canvasScaleComuted"
            v-model="canvasScaleComuted"
            :options="canvasScaleOptions"
            size="small"
          />
        </div>
      </div>
      <!-- 缩放操作 end  -->
      <!-- 画布类型切换 start -->
      <div
        class="epic-device h-28px p-2px flex items-center gap-1 rounded-md border"
      >
        <template v-for="item in deviceOptions" :key="item.key">
          <div
            :title="item.title"
            class="epic-device-item flex h-full cursor-pointer items-center rounded-sm px-1 text-base transition-colors"
            :class="{ checked: item.key === selectedKey }"
            @click="handleSetCanvas(item.key)"
          >
            <EIcon :name="item.icon" />
          </div>
        </template>
      </div>
      <!-- 画布类型切换 end -->
    </div>
  </div>
  <EPreviewJson ref="previewJson" />
  <!-- 工具条 end  -->
</template>

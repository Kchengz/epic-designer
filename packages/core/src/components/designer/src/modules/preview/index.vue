<script lang="ts" setup>
import type { ComponentSchema, PageSchema } from '@epic-designer/types';

import { computed, inject, nextTick, ref } from 'vue';

import { pluginManager } from '@epic-designer/manager';
import { findSchemas } from '@epic-designer/utils';

import { EBuilder } from '../../../../builder';

const props = withDefaults(
  defineProps<{
    hideConfirm?: boolean;
    width?: string;
  }>(),
  {
    width: '900px',
  },
);
const MonacoEditor = pluginManager.component.get('monacoEditor');
const Modal = pluginManager.component.get('modal');
const monacoEditorRef = ref<any>(null);

const visible = ref(false);
const dataVisible = ref(false);
const formValues = ref({});

const pageSchema = inject('pageSchema') as PageSchema;
const kb = ref<any>(null);

const getFormNames = computed(() => {
  // 查找页面 schema 中所有类型为 'form' 的组件，并将其转换为 ComponentSchema[] 类型
  const formNames = (
    findSchemas(
      pageSchema.schemas,
      (schemas) => schemas.type.includes('form') && schemas.props?.name,
    ) as ComponentSchema[]
  )
    // 提取每个 form 组件的名称（从 props 中获取 name 属性）
    .map((schemas) => schemas.props?.name);

  // 使用 Set 去重后返回表单组件名称数组
  return [...new Set(formNames)];
});

function handleCloseData() {
  dataVisible.value = false;
}

function handleClose() {
  visible.value = false;
}

function handleOpen() {
  visible.value = true;
}

async function handleOk() {
  // 如果没有表单组件，则弹出提示并返回
  if (!getFormNames.value.length) {
    pluginManager.global.$message.error('缺少表单组件!');
    return;
  }

  try {
    let values: any = {};

    // 遍历获取的表单组件名称并进行验证
    for (const name of getFormNames.value) {
      values[`${name}`] = await kb.value.validate(name);
    }

    // 如果只有一个表单组件且名称为 'default'，则将 values 赋值为 'default' 的值
    if (
      getFormNames.value.length === 1 &&
      getFormNames.value[0] === 'default'
    ) {
      values = values.default;
    }

    // 将验证后的表单数据转换为 JSON 字符串格式，并赋值给 formValues
    formValues.value = JSON.stringify(values, null, 2);

    // 在下一次 DOM 更新时，将 formValues 的值设置到 Monaco Editor 中
    nextTick(() => {
      monacoEditorRef.value?.setValue(formValues.value);
    });

    // 显示数据弹窗
    dataVisible.value = true;
  } catch (error) {
    // 捕获并输出错误
    console.error(error);
  }
}

defineExpose({
  handleOpen,
});
</script>
<template>
  <Modal
    v-model="visible"
    title="预览"
    :width="width"
    :hide-confirm="props.hideConfirm"
    ok-text="表单数据"
    @close="handleClose"
    @ok="handleOk"
  >
    <div class="min-w-750px translate-y-0px h-full rounded">
      <EBuilder v-if="visible" ref="kb" :page-schema="pageSchema" />
      <!-- 表单数据 start -->
      <Modal
        v-model="dataVisible"
        title="表单数据"
        width="860px"
        @close="handleCloseData"
        @ok="handleCloseData"
      >
        <div class="h-full rounded">
          <MonacoEditor
            ref="monacoEditorRef"
            auto-toggle-theme
            read-only
            class="editor h-full"
            :model-value="formValues"
          />
        </div>
      </Modal>
      <!-- 表单数据 end -->
    </div>
  </Modal>
</template>

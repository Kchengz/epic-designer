<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { inject, nextTick, ref } from 'vue';

import { getUUID, pluginManager } from '@epic-designer/utils';

import EBuilder from '../../../../builder';

const props = withDefaults(
  defineProps<{
    hideConfirm?: boolean;
    width?: string;
  }>(),
  {
    width: '900px',
  },
);
const MonacoEditor = pluginManager.getComponent('monacoEditor');
const Modal = pluginManager.getComponent('modal');
const monacoEditorRef = ref<any>(null);

const visible = ref(false);
const dataVisible = ref(false);
const formValues = ref({});

const pageSchema = inject('pageSchema') as PageSchema;
const kb = ref<any>(null);
const EBuilderKey = ref('');

function handleCloseData() {
  dataVisible.value = false;
}

function handleClose() {
  visible.value = false;
}

function handleOpen() {
  visible.value = true;
  // 通过修改key重新渲染组件
  EBuilderKey.value = getUUID();
}

async function handleOk() {
  try {
    // 遍历获取的表单组件名称并进行验证
    let values = await kb.value.validateAll();

    // 如果没有表单数据，则弹出提示并返回
    if (Object.keys(values).length === 0) {
      // eslint-disable-next-line no-alert
      alert('请添加表单组件后再尝试！');
      return;
    }

    // 如果只有一个表单组件，则将 values 赋值为表单数据的值
    if (Object.keys(values).length === 1) {
      values = values.default;
    }

    // 将验证后的表单数据转换为 JSON 字符串格式，并赋值给 formValues
    formValues.value = JSON.stringify(values, null, 2);

    // 显示数据弹窗
    dataVisible.value = true;

    // 在下一次 DOM 更新时，将 formValues 的值设置到 Monaco Editor 中
    nextTick(() => {
      monacoEditorRef.value?.setValue(formValues.value);
    });
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
    <div class="min-w-750px rounded">
      <EBuilder :key="EBuilderKey" ref="kb" :page-schema="pageSchema" />

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

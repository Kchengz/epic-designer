<script lang="ts" setup>
import { ref, toRaw, watch } from 'vue';

import { useDesignerContext } from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';
import { deepCompareAndModify, deepEqual } from '@epic-designer/utils';

const MonacoEditor = pluginManager.component.get('monacoEditor');
const monacoEditorRef = ref<any>(null);
const designer = useDesignerContext();
const designerProps = designer.props;

let oldVal: any = {};
watch(
  () => designer.state.selectedNode,
  (newVal: any) => {
    if (!deepEqual(oldVal, toRaw(newVal))) {
      monacoEditorRef.value?.setValue(JSON.stringify(newVal, null, 2));
    }
  },
  {
    deep: true,
  },
);

const initModelValue = JSON.stringify(designer.state.selectedNode, null, 2);

function setSchemas(e: string) {
  try {
    if (!designer.state.selectedNode) {
      return false;
    }
    oldVal = JSON.parse(e);
    deepCompareAndModify(designer.state.selectedNode, oldVal);
  } catch (error) {
    console.warn('[Epic：源码]异常：', error);
  }
}
</script>
<template>
  <div class="epic-sound-code">
    <MonacoEditor
      ref="monacoEditorRef"
      auto-toggle-theme
      class="epic-editor"
      :read-only="designerProps.sourceCodeReadOnly"
      :model-value="initModelValue"
      line-numbers="off"
      @update:model-value="setSchemas"
    />
  </div>
</template>

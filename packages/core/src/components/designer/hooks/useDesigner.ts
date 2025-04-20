import type {
  ComponentSchema,
  DesignerState,
  PageSchema,
} from '@epic-designer/types';

import { reactive, ref, watchEffect } from 'vue';

import {
  deepClone,
  deepCompareAndModify,
  deepEqual,
  findSchemaInfoById,
  generateNewSchema,
  getMatchedById,
  pluginManager,
  usePageManager,
  useRevoke,
} from '@epic-designer/utils';
import { useMagicKeys } from '@vueuse/core';

// 内部默认页面数据
let innerDefaultSchema: PageSchema = {
  schemas: [
    {
      componentProps: {
        style: {
          padding: '16px',
        },
      },
      id: 'root',
      label: '页面',
      type: 'page',
      children: [],
    },
  ],
  script: `const { defineExpose, find } = epic;

function test (){
    console.log('test')
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
 test
})`,
};

export function useDesigner(props, emit) {
  const ready = ref<boolean>(false);
  const pageManager = usePageManager();
  const pageSchema = pageManager.pageSchema;
  const revoke = useRevoke();

  const state = reactive<DesignerState>({
    disabledHover: false,
    hoverNode: null,
    matched: [],
    selectedNode: null,
  });

  // 更新初始化数据
  watchEffect(() => {
    // 如果props.defaultSchema有值，则优先使用props.defaultSchema
    if (props.defaultSchema) {
      innerDefaultSchema = props.defaultSchema;
    } else {
      // 切换表单模式默认schema数据
      if (props.formMode) {
        innerDefaultSchema.schemas = pluginManager.formSchema;
      }
    }
    // 记录默认组件id
    pageManager.setDefaultComponentIds(innerDefaultSchema.schemas);
  });

  // 设计模式
  pageManager.setDesignMode();

  /**
   * 复制选中节点元素
   */
  function handleCopy() {
    const data = findSchemaInfoById(
      pageSchema.schemas,
      state.selectedNode?.id ?? 'root',
    );
    if (!data) {
      return false;
    }
    const { index, schema, list } = data;
    const node = generateNewSchema(schema);
    list.splice(index + 1, 0, node);
    setSelectedNode(node);

    revoke.push(pageSchema.schemas, '复制组件');
  }

  /**
   * 删除元素
   */
  function handleDelete() {
    const data = findSchemaInfoById(
      pageSchema.schemas,
      state.selectedNode?.id ?? 'root',
    );
    if (!data) {
      return false;
    }
    let { index, list } = data;
    list.splice(index, 1);
    if (index === list.length) {
      index--;
    }
    setSelectedNode(list[index]);
    revoke.push(pageSchema.schemas, '删除组件');
  }

  /**
   * 选中节点
   * @param schema
   */
  async function setSelectedNode(
    schema: ComponentSchema = pageSchema.schemas[0],
  ) {
    state.selectedNode = schema;
    state.matched = getMatchedById(pageSchema.schemas, schema.id ?? '');
  }

  /**
   * 设置悬停节点
   * @param schema
   */
  async function setHoverNode(schema: ComponentSchema | null = null) {
    if (!schema || state.disabledHover) {
      state.hoverNode = null;
      return false;
    }
    if (schema?.id === state.hoverNode?.id) {
      return false;
    }
    // console.log(schema?.id)
    state.hoverNode = schema;
  }

  /**
   * 重置页面数据为默认数据。
   */
  function reset() {
    // 判断数据是否已修改，如果未修改，则取消重置操作
    if (
      deepEqual(pageSchema.schemas, innerDefaultSchema.schemas) &&
      pageSchema.script === innerDefaultSchema.script
    )
      return;

    // 调用 deepCompareAndModify 函数比较 pageSchema.schemas 和 innerDefaultSchema.schemas，进行修改
    deepCompareAndModify(pageSchema.schemas, innerDefaultSchema.schemas);
    // 更新 script.value
    pageSchema.script = innerDefaultSchema.script;
    // 选中根节点
    setSelectedNode(pageSchema.schemas[0]);
    revoke.push(pageSchema.schemas, '重置操作');

    emit('reset', pageSchema);
  }

  function init() {
    // 初始化默认节点
    pageSchema.schemas = deepClone(innerDefaultSchema.schemas);

    // 选中根节点
    setSelectedNode(pageSchema.schemas[0]);
    revoke.push(pageSchema.schemas, '初始化');
  }

  /**
   * 设置快捷键
   */
  function setupHotkeys() {
    const keys = useMagicKeys();

    // 通过watchEffect监听快捷键状态变化
    watchEffect(() => {
      console.log(keys);
      // 忽略输入框中的快捷键
      const activeElement = document.activeElement;
      if (
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // 删除元素 (Delete 或 Backspace)
      if ((keys.Delete.value || keys.Backspace.value) && state.selectedNode) {
        handleDelete();
      }

      // 复制元素 (Ctrl+C)
      if (keys['ctrl+c'].value && state.selectedNode) {
        handleCopy();
      }

      // 撤销 (Ctrl+Z)
      if (keys['ctrl+z'].value && !keys.shift.value) {
        revoke.undo();
      }

      // 重做 (Ctrl+Shift+Z 或 Ctrl+Y)
      if (keys['ctrl+shift+z'].value || keys['ctrl+y'].value) {
        revoke.redo();
      }

      // 保存 (Ctrl+S)
      if (keys['ctrl+s'].value) {
        window.event?.preventDefault();
        emit('save', pageSchema);
      }

      // 取消选择 (Escape)
      if (keys.Escape.value) {
        setSelectedNode(pageSchema.schemas[0]);
      }
    });
  }

  init();
  setupHotkeys();

  return {
    handleCopy,
    handleDelete,
    pageManager,
    pageSchema,
    ready,
    reset,
    revoke,
    setHoverNode,
    setSelectedNode,
    state,
  };
}

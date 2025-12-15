import type {
  ComponentSchema,
  DesignerState,
  PageSchema,
} from '@epic-designer/types';

import { reactive, ref, watchEffect } from 'vue';

import { useClipboard } from '@epic-designer/hooks';
import {
  pluginManager,
  usePageManager,
  useRevoke,
} from '@epic-designer/manager';
import {
  deepClone,
  deepCompareAndModify,
  deepEqual,
  findSchemaById,
  findSchemaInfoById,
  getMatchedById,
} from '@epic-designer/utils';

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

  const state = reactive<DesignerState>({
    disabledHover: false,
    hoverNode: null,
    matched: [],
    selectedNode: null,
  });
  const revoke = useRevoke(pageSchema, state, setSelectedNode);

  // 使用封装的clipboard hook
  const { duplicate } = useClipboard(pageSchema, setSelectedNode, (message) =>
    revoke.push(message),
  );

  const canvasConfigs = {
    desktop: {},
    mobile: {
      mode: 'mobile',
      width: '390px',
    },
    tablet: {
      mode: 'tablet',
      width: '780px',
    },
  };

  // 更新初始化数据
  watchEffect(() => {
    // 如果props.defaultSchema有值，则优先使用props.defaultSchema
    if (props.defaultSchema) {
      innerDefaultSchema = props.defaultSchema;
    } else if (props.formMode) {
      // 切换表单模式默认schema数据
      innerDefaultSchema.schemas = pluginManager.designer.formSchema;
    }

    const canvasMode = props.canvasMode ?? 'desktop';
    // 根据canvasMode设置对应的画布属性
    pageSchema.canvas = {
      mode: canvasMode,
      ...canvasConfigs[canvasMode],
      ...innerDefaultSchema.canvas,
    };

    // 记录默认组件id
    pageManager.setDefaultComponentIds(innerDefaultSchema.schemas);
  });

  // 设计模式
  pageManager.setDesignMode();

  /**
   * 复制并立即粘贴节点（复制当前节点）
   */
  function handleDuplicate() {
    return duplicate(state.selectedNode?.id);
  }

  /**
   * 删除元素
   */
  function handleDelete() {
    // 如果未选中节点或选中的是根节点则不执行删除
    if (
      !state.selectedNode?.id ||
      state.selectedNode.id === pageSchema.schemas[0].id
    ) {
      return;
    }

    const data = findSchemaInfoById(pageSchema.schemas, state.selectedNode.id);
    if (!data) return false;

    let { index, list } = data;
    list.splice(index, 1);

    if (index === list.length) {
      index--;
    }

    setSelectedNode(list[index]);
    revoke.push('删除组件');
  }

  /**
   * 选中节点
   * @param schema 要选中的组件
   */
  function setSelectedNode(
    schema: ComponentSchema | null = state.selectedNode,
  ) {
    // 通过ID查找该组件在页面结构中是否存在
    const selectedSchema = findSchemaById(pageSchema.schemas, schema?.id ?? '');
    const finalSchema = selectedSchema || pageSchema.schemas[0];

    // 获取从根节点到当前节点的路径匹配数组
    state.matched = getMatchedById(pageSchema.schemas, finalSchema.id ?? '');
    // 更新选中节点状态
    state.selectedNode = finalSchema;
  }

  /**
   * 设置悬停节点
   * @param schema 悬停的组件模式
   */
  function setHoverNode(schema: ComponentSchema | null = null) {
    if (!schema || state.disabledHover) {
      state.hoverNode = null;
      return false;
    }

    if (schema?.id === state.hoverNode?.id) {
      return false;
    }

    state.hoverNode = schema;
  }

  /**
   * 重置页面数据为默认数据
   */
  function reset() {
    // 判断数据是否已修改，如果未修改，则取消重置操作
    if (
      deepEqual(pageSchema.schemas, innerDefaultSchema.schemas) &&
      pageSchema.script === innerDefaultSchema.script
    )
      return;

    // 调用 deepCompareAndModify 函数比较并修改
    deepCompareAndModify(pageSchema.schemas, innerDefaultSchema.schemas);
    // 更新 script
    pageSchema.script = innerDefaultSchema.script;
    // 选中根节点
    setSelectedNode(pageSchema.schemas[0]);
    revoke.push('重置操作');

    emit('reset', pageSchema);
  }

  /**
   * 初始化页面数据
   */
  function init() {
    // 初始化默认节点
    pageSchema.schemas = deepClone(innerDefaultSchema.schemas);
    // 选中根节点
    setSelectedNode(pageSchema.schemas[0]);
    revoke.push('初始化');
  }

  init();

  return {
    handleDelete,
    handleDuplicate,
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

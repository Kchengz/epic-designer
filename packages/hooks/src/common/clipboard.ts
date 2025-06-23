import type { ComponentSchema } from '@epic-designer/types';

import { ref } from 'vue';

import {
  deepClone,
  findSchemaInfoById,
  generateNewSchema,
} from '@epic-designer/utils';

/**
 * 提供组件复制粘贴功能的Hook
 * @param pageSchema 页面Schema数据
 * @param setSelectedNode 设置选中节点的函数
 * @param revokePush 撤销栈推送函数
 */
export function useClipboard(
  pageSchema: any,
  setSelectedNode: (schema: ComponentSchema | null) => void,
  revokePush: (message: string) => void,
) {
  // 剪贴板节点
  const clipboardNode = ref<ComponentSchema | null>(null);

  /**
   * 复制选中节点到剪贴板
   * @param selectedNode 当前选中的节点
   */
  function copy(selectedNode: ComponentSchema | null): boolean {
    if (!selectedNode?.id) return false;
    clipboardNode.value = deepClone(selectedNode);
    return true;
  }

  /**
   * 粘贴剪贴板中的节点
   * @param selectedNodeId 当前选中节点ID
   */
  function paste(selectedNodeId: null | string | undefined): boolean {
    if (!clipboardNode.value) return false;

    const data = findSchemaInfoById(
      pageSchema.schemas,
      selectedNodeId ?? 'root',
    );
    if (!data) return false;

    const { index, list } = data;
    const node = generateNewSchema(clipboardNode.value);
    list.splice(index + 1, 0, node);
    setSelectedNode(node);

    revokePush('粘贴组件');
    return true;
  }

  /**
   * 复制并立即粘贴节点（复制当前节点）
   * @param selectedNodeId 当前选中节点ID
   */
  function duplicate(selectedNodeId: null | string | undefined): boolean {
    const data = findSchemaInfoById(
      pageSchema.schemas,
      selectedNodeId ?? 'root',
    );
    if (!data) return false;

    const { index, schema, list } = data;
    const node = generateNewSchema(schema);
    list.splice(index + 1, 0, node);
    setSelectedNode(node);

    revokePush('复制组件');
    return true;
  }

  return {
    clipboardNode,
    copy,
    duplicate,
    paste,
  };
}

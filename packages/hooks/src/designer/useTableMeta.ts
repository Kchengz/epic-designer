import type { PluginManager } from '@epic-designer/manager';

import { computed } from 'vue';

import { ComponentSchema, TableMeta } from '@epic-designer/types';

import { useDesignerContext } from './useDesignerContext';

export function useTableMeta(pluginManager: PluginManager) {
  const { props, state } = useDesignerContext();
  const tableMeta = computed<TableMeta | undefined>(() => {
    let tableMeta = props.tableJson?.find(
      (item) => item.tableType === 'parent',
    );

    // 倒序遍历 designer.state.matched，找到第一个 isSubTable = true 数据
    const subTableNode = [...state.matched]
      .slice(0, -1) // 移除最后一个节点
      .reverse()
      .find((node: ComponentSchema) => {
        const config = pluginManager.component.getConfigByType(node.type);
        return config.isSubTable;
      });

    // 根据是否存在子表单节点来查找对应的数据表
    tableMeta = subTableNode
      ? props.tableJson?.find((item) => item?.tableName === subTableNode.field)
      : props.tableJson?.find((item) => item.tableType === 'parent');

    return tableMeta;
  });
  return tableMeta;
}

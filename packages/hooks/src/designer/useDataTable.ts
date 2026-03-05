import { computed } from 'vue';

import { ComponentSchema, TableJson } from '@epic-designer/types';

import { useDesignerContext } from './useDesignerContext';

export function useDataTable() {
  const { props, state } = useDesignerContext();
  const dataTable = computed<TableJson | undefined>(() => {
    let dataTable = props.tableJson?.find(
      (item) => item.tableType === 'parent',
    );

    // 倒序遍历 designer.state.matched，找到第一个 type = subform 数据
    const subTableNode = [...state.matched]
      .slice(0, -1) // 移除最后一个节点
      .reverse()
      .find((node: ComponentSchema) => node.isSubTable);

    // 根据是否存在子表单节点来查找对应的数据表
    dataTable = subTableNode
      ? props.tableJson?.find((item) => item?.tableName === subTableNode.field)
      : props.tableJson?.find((item) => item.tableType === 'parent');

    return dataTable;
  });
  return dataTable;
}

export default {
  component: () => import("./KTable.vue"),
  schema: {
    id: "组件ID",
    label: "数据表",
    type: "table",
    icon: "icon-xiala",
    children: [],
    componentProps: {
      tableName: "",
      filter: '', // 初始过滤 - 表的字段过滤
      link_filter: '', // 初始过滤 - 关联表的过滤
      selection: true,
      columns: [
        { prop: 'createdAt', label: '创建时间' },
        { prop: 'createdBy', label: '创建人' },
        { prop: 'updatedAt', label: '更新时间' },
        { prop: 'updatedBy', label: '更新人' },
      ]
    }
  },
  atteditSchemas: [
    {
      label: "组件ID",
      type: "input",
      attrIndex: "id",
    },
    {
      label: "标题",
      type: "input",
      attrIndex: "label",
    },
    {
      label: "数据表",
      type: "input",
      attrIndex: "tableName",
    },
    {
      label: "过滤条件",
      type: "input",
      attrIndex: "componentProps.filter",
    },
    {
      label: "关联过滤",
      type: "input",
      attrIndex: "componentProps.link_filter",
    },
    {
      label: "显示复选框",
      type: "input",
      attrIndex: "componentProps.selection",
      componentProps: {
        selection: true
      }
    },

    {
      label: "表头",
      type: "columns",
      attrIndex: "componentProps.columns",
    },

    {
      label: "表格按钮",
      type: "buttons",
      attrIndex: "componentProps.tableButtons",
      componentProps: {
        tableButtons: []
      }
    },

    {
      label: "行按钮",
      type: "buttons",
      attrIndex: "componentProps.rowButtons",
      componentProps: {
        rowButtons: true
      }
    },
    {
      label: "明细按钮",
      type: "action",
      attrIndex: "componentProps.eventActions",
      componentProps: {
        rowButtons: []
      }
    },
  ],
  bindModel: "modelValue",
};

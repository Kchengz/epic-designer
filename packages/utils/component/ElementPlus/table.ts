import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: () => import("./src/KTable.vue"),
  defaultSchema: {
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
  config: {
    attribute: [
      {
        label: "组件ID",
        type: "input",
        field: "id",
      },
      {
        label: "标题",
        type: "input",
        field: "label",
      },
      {
        label: "数据表",
        type: "input",
        field: "tableName",
      },
      {
        label: "过滤条件",
        type: "input",
        field: "componentProps.filter",
      },
      {
        label: "关联过滤",
        type: "input",
        field: "componentProps.link_filter",
      },
      {
        label: "显示复选框",
        type: "input",
        field: "componentProps.selection",
        componentProps: {
          selection: true
        }
      },

      {
        label: "表头",
        type: "columns",
        field: "componentProps.columns",
      },

      {
        label: "表格按钮",
        type: "buttons",
        field: "componentProps.tableButtons",
        componentProps: {
          tableButtons: []
        }
      },

      {
        label: "行按钮",
        type: "buttons",
        field: "componentProps.rowButtons",
        componentProps: {
          rowButtons: true
        }
      },
      {
        label: "明细按钮",
        type: "action",
        field: "componentProps.eventActions",
        componentProps: {
          rowButtons: []
        }
      },
    ],
  }
} as ComponentConfigModel;

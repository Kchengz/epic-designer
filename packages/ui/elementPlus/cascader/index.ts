import { type ComponentConfigModel } from "@epic-designer/utils/pluginManager";
export default {
  component: async () => (await import("element-plus")).ElCascader,
  defaultSchema: {
    label: "级联选择器",
    type: "cascader",
    icon: "icon-number",
    field: "cascader",
    input: true,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1",
        },
        {
          label: "选项2",
          value: "选项2",
        },
      ],
      placeholder: "请选择",
      showAllLevels: true,
      separator: '/',
      size: 'default',
      props: {
        expandTrigger: 'click'
      }
    },
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "cascader",
        field: "componentProps.defaultValue",
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "default",
              value: "default",
            },
            {
              label: "small",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
      },
      {
        label: "可多选",
        type: "switch",
        field: "componentProps.props.multiple",
        onChange: ({ value, values }) => {
          if (value) {
            values.componentProps.defaultValue = [];
          } else {
            values.componentProps.defaultValue = null;
          }
        },
      },
      {
        label: "折叠Tag",
        type: "switch",
        field: "componentProps.collapseTags",
        show: ({values})=>values.componentProps.props.multiple
      },
      {
        label: "显示被折叠标签",
        type: "switch",
        field: "componentProps.collapseTagsTooltip",
        show: ({values})=>values.componentProps.props.multiple&&values.componentProps.collapseTags
      },
      {
        label: "展示完整路径",
        type: "switch",
        field: "componentProps.showAllLevels",
      },
      {
        label: "次级菜单展开方式",
        type: "select",
        field: "componentProps.props.expandTrigger",
        componentProps: {
          options:  [
            {
              label: 'click',
              value: 'click'
            },
            {
              label: 'hover',
              value: 'hover'
            }
          ]
        }
      },
      {
        label: "可搜索",
        type: "switch",
        field: "componentProps.filterable",
      },
      {
        label: "分割符",
        type: "input",
        field: "componentProps.separator",
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        componentProps: {
          tree: true,
        },
        describe: "配置选项",
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
      },
    ],
    event: [
      {
        type: "change",
        describe: "选中节点变化时",
      },
      {
        type: "close",
        describe: "面板的关闭事件",
      },
    ],
    action: [
      {
        type: "getCheckedNodes",
        describe: "获取当前选中节点",
      },
    ],
  },
} as ComponentConfigModel;

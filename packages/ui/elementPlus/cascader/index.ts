import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("element-plus")).ElCascader,
  groupName: "表单",
  icon: "icon--epic--full-coverage-outline",
  sort: 900,
  defaultSchema: {
  label: "级联选择器",
    type: "cascader",
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
      props: {
        expandTrigger: "click",
      },
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
        label: "标题",
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
        componentProps: {
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "大号",
              value: "large",
            },
            {
              label: "中等",
              value: "default",
            },
            {
              label: "小型",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
      },
      {
        label: "分割符",
        type: "input",
        componentProps: {
          placeholder: "请输入",
        },
        field: "componentProps.separator",
      },
      {
        label: "次级菜单展开方式",
        type: "select",
        field: "componentProps.props.expandTrigger",
        componentProps: {
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "click",
              value: "click",
            },
            {
              label: "hover",
              value: "hover",
            },
          ],
        },
      },
      {
        label: "可搜索",
        type: "switch",
        field: "componentProps.filterable",
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
        show: ({ values }) => values.componentProps.props.multiple,
      },
      {
        label: "显示被折叠标签",
        type: "switch",
        field: "componentProps.collapseTagsTooltip",
        show: ({ values }) =>
          values.componentProps.props.multiple &&
          values.componentProps.collapseTags,
      },
      {
        label: "不显示路径",
        type: "switch",
        componentProps: {
          activeValue: false,
          inactiveValue: true,
        },
        field: "componentProps.showAllLevels",
      },
      {
        label: "父级可选",
        type: "switch",
        field: "componentProps.props.checkStrictly",
        describe: "父子节点不互相关联",
      },
      {
        label: "只获取选中节点",
        type: "switch",
        field: "componentProps.props.emitPath",
        componentProps: {
          activeValue: false,
          inactiveValue: true,
        },
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable",
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
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
        componentProps: {
          ruleType: "array",
        },
      },
    ],
    event: [
      {
        type: "change",
        describe: "选中节点变化时",
      },
      {
        type: "blur",
        describe: "	当失去焦点时触发",
      },
      {
        type: "focus",
        describe: "当获得焦点时触发",
      },
    ],
    action: [
      {
        type: "getCheckedNodes",
        describe: "获取当前选中节点",
      },
      {
        type: "togglePopperVisible",
        describe: "切换 popper 可见状态",
      },
    ],
  },
} as ComponentConfigModel;

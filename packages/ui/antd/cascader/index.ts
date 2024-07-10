import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("ant-design-vue")).Cascader,
  groupName: "表单",
  icon: "epic-icon-guanlian",
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
          allowClear: true,
          options: [
            {
              label: "大号",
              value: "large",
            },
            {
              label: "中等",
              value: "middle",
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
        label: "弹出框位置",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft",
            },
            {
              label: "bottomRight",
              value: "bottomRight",
            },
            {
              label: "topLeft",
              value: "topLeft",
            },
            {
              label: "topRight",
              value: "topRight",
            },
          ],
        },
        field: "componentProps.placement",
      },
      {
        label: "可搜索",
        type: "switch",
        field: "componentProps.showSearch",
      },
      {
        label: "无边框",
        type: "switch",
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: "componentProps.bordered",
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple",
      },
      {
        label: "标签最大长度",
        type: "number",
        field: "componentProps.maxTagTextLength",
        componentProps: {
          placeholder: "请输入",
        },
        show: ({ values }) => values.componentProps.multiple,
      },
      {
        label: "标签显示数量",
        type: "number",
        field: "componentProps.maxTagCount",
        componentProps: {
          placeholder: "请输入",
        },
        show: ({ values }) => values.componentProps.multiple,
      },

      {
        label: "回填方式",
        type: "select",
        componentProps: {
          options: [
            {
              label: "SHOW_PARENT",
              value: "SHOW_PARENT",
            },
            {
              label: "SHOW_CHILD",
              value: "SHOW_CHILD",
            },
          ],
          placeholder: "请选择",
        },
        field: "componentProps.showCheckedStrategy",
        show: ({ values }) => values.componentProps.multiple,
      },

      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear",
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
        describe: "值变化时",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

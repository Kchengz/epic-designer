import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("element-plus")).ElInput,
  icon: "epic-icon-edit",
  groupName: "表单",
  defaultSchema: {
    label: "文本域",
    type: "textarea",
    field: "textarea",
    input: true,
    componentProps: {
      placeholder: "请输入",
      type: "textarea",
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
        type: "textarea",
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
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxlength",
        componentProps: {
          placeholder: "请输入",
          min: 0
        },
      },
      {
        label: "统计字数",
        type: "switch",
        field: "componentProps.showWordLimit",
        show: ({ values }) => {
          return values.componentProps.maxlength;
        },
      },
      {
        label: "最小行数",
        type: "number",
        field: "componentProps.autosize.minRows",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "最大行数",
        type: "number",
        field: "componentProps.autosize.maxRows",
        componentProps: {
          placeholder: "请输入",
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
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
      },
    ],
    event: [
      {
        type: "input",
        describe: "输入值",
      },
      {
        type: "change",
        describe: "值修改",
      },
      {
        type: "focus",
        describe: "获取焦点",
      },
      {
        type: "blur",
        describe: "失去焦点",
      },
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点",
      },
      {
        type: "blur",
        describe: "使 input 失去焦点",
      },
      {
        type: "clear",
        describe: "清除 input 值",
      },
      {
        type: "select",
        describe: "选中 input 中的文字",
      },
    ],
  },
} as ComponentConfigModel;

import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("ant-design-vue")).Textarea,
  defaultSchema: {
    label: "文本域",
    type: "textarea",
    field: "textarea",
    icon: "epic-icon-edit",
    input: true,
    componentProps: {
      placeholder: "请输入",
    },
  },
  groupName: "表单",
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
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
      },
      {
        label: "最小行数",
        type: "number",
        field: "componentProps.autoSize.minRows",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "最大行数",
        type: "number",
        field: "componentProps.autoSize.maxRows",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered",
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "middle",
              value: "middle",
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
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxLength",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "统计字数",
        type: "switch",
        field: "componentProps.showCount",
      },
      {
        label: "可清除",
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
        type: "pressEnter",
        describe: "按下回车的回调",
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
        type: "select",
        describe: "选中 input 中的文字",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

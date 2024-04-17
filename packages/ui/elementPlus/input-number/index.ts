import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("element-plus")).ElInputNumber,
  defaultSchema: {
    label: "数字输入框",
    type: "number",
    icon: "epic-icon-number",
    field: "number",
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
        label: "文字",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "number",
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
          placeholder: "请选择",
          clearable: true,
        },
        field: "componentProps.size",
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "控制按钮位置",
        type: "select",
        defaultValue: "",
        componentProps: {
          options: [
            {
              label: "default",
              value: "",
            },
            {
              label: "right",
              value: "right",
            },
          ],
          placeholder: "请选择",
          clearable: true,
        },
        field: "componentProps.controlsPosition",
      },
      {
        label: "精度",
        type: "number",
        field: "componentProps.precision",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "输入控制为步长的倍数",
        type: "switch",
        field: "componentProps.stepStrictly",
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
        componentProps: {
          ruleType: "number",
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
} as ComponentConfigModel;

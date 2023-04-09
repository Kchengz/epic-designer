import { ComponentConfigModel } from "../../pluginManager";
export default {
  component: async () => (await import("element-plus")).ElColorPicker,
  defaultSchema: {
    label: "颜色选择器",
    type: "color-picker",
    icon: "icon-number",
    field: "color-picker",
    isInput: true,
    componentProps: {
      style: { width: "100%" },
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
        type: "color-picker",
        field: "componentProps.defaultValue",
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
    ],
    event: [
      {
        type: "change",
        describe: "值变化时",
      },
    ],
    action: [
    ],
  },
} as ComponentConfigModel;

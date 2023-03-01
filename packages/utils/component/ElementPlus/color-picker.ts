export default {
  component: async () => (await import("element-plus")).ElColorPicker,
  schema: {
    label: "颜色选择器",
    type: "color-picker",
    icon: "icon-number",
    field: "color-picker",
    isInput: true,
    componentProps: {
      style: { width: "100%" },
    },
  },
  atteditSchemas: [
    {
      label: "字段名",
      type: "input",
      attrIndex: "field",
    },
    {
      label: "文字",
      type: "input",
      attrIndex: "label",
    },
    {
      label: "默认值",
      type: "color-picker",
      attrIndex: "componentProps.defaultValue",
    },
  ],
  bindModel: "modelValue",
};

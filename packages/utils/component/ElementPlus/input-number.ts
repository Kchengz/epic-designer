export default {
  component: async () => (await import("element-plus")).ElInputNumber,
  schema: {
    label: "数字输入框",
    type: "number",
    icon: "icon-number",
    field: "number",
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
      type: "number",
      attrIndex: "componentProps.defaultValue",
    },
  ],
  bindModel: "modelValue",
};

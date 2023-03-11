export default {
  component: async () => (await import("element-plus")).ElInputNumber,
  schema: {
    label: "数字输入框",
    type: "number",
    icon: "icon-number",
    field: "number",
    isInput: true,
    componentProps: {
      placeholder: '请输入'
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
    {
      label: "占位内容",
      type: "input",
      attrIndex: "componentProps.placeholder",
    },
    {
      label: '隐藏',
      type: "switch", 
      attrIndex: "componentProps.hidden",
    },
  ],
  bindModel: "modelValue",
};
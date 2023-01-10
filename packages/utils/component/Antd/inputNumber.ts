export default {
  component: () => import("ant-design-vue/lib/input-number"),
  schema: {
    label: "数字输入框",
    type: "number",
    icon: "icon-number",
    field: "number",
    isInput: true,
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
  ],
  bindModel: "value",
};

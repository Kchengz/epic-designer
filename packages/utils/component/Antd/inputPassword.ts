export default {
  component: () => import("ant-design-vue/lib/input/Password"),
  schema: {
    label: "密码输入框",
    type: "password",
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

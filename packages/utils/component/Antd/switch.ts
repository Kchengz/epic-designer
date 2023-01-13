export default {
  component: () => import("ant-design-vue/lib/switch"),
  schema: {
    label: "开关",
    type: "switch",
    icon: "icon-number",
    field: "switch",
    isInput: true,
    componentProps: {
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
      type: "switch",
      attrIndex: "componentProps.defaultValue",
    },
  ],
  bindModel: "checked",
};

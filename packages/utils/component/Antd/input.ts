export default {
  component: () => import("ant-design-vue/lib/input"),
  schema: {
    label: "文本框",
    type: "input",
    field: "input",
    icon: "icon-write",
    isInput: true,
  },
  atteditSchemas: [
    {
      label: "字段名",
      type: "input",
      attrIndex: "field",
    },
    {
      label: "标题",
      type: "input",
      attrIndex: "label",
    },
    {
      label: "默认值",
      type: "input",
      attrIndex: "componentProps.defaultValue",
    },
    {
      label: "输入类型",
      type: "select",
      defaultValue: "text",
      componentProps: {
        options: [
          {
            label: "text",
            value: "text",
          },
          {
            label: "number",
            value: "number",
          },
          {
            label: "password",
            value: "password",
          },
        ],
      },
      attrIndex: "componentProps.type",
    },
  ],
  bindModel: "value",
};

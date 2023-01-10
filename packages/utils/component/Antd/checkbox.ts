export default {
  component: () => import("ant-design-vue/lib/checkbox/Group"),
  schema: {
    label: "多选框",
    type: "checkbox",
    icon: "icon-duoxuan1",
    field: "checkbox",
    isInput: true,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1",
        },
        {
          label: "选项2",
          value: "选项2",
        },
      ],
    },
  },
  atteditSchemas: [
    {
      label: "字段名",
      type: "input",
      attrIndex: "field",
    },
    {
      label: "默认值",
      type: "checkbox",
      attrIndex: "componentProps.defaultValue",
    },
    {
      label: "文字",
      type: "input",
      attrIndex: "label",
    },
  ],
  bindModel: "value",
};

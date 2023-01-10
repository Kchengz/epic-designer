export default {
  component: () => import("ant-design-vue/lib/select"),
  schema: {
    label: "选择框",
    type: "select",
    icon: "icon-xiala",
    field: "select",
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
      label: "文字",
      type: "input",
      attrIndex: "label",
    },
    {
      label: "默认值",
      type: "select",
      attrIndex: "componentProps.defaultValue",
    },
  ],
  bindModel: "value",
};

export default {
  component: () => import("./KRadio"),
  schema: {
    label: "单选框",
    type: "radio",
    icon: "icon-danxuan-cuxiantiao",
    field: "radio",
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
      type: "radio",
      attrIndex: "componentProps.defaultValue",
    },
    {
      label: "文字",
      type: "input",
      attrIndex: "label",
    },
  ],
  bindModel: "modelValue",
};

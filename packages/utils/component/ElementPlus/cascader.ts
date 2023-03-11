export default {
  component: async () => (await import("element-plus")).ElCascader,
  schema: {
    label: "级联选择器",
    type: "cascader",
    icon: "icon-number",
    field: "cascader",
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
      placeholder: '请选择'
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
      type: "cascader",
      attrIndex: "componentProps.defaultValue",
    },
    {
      label: "占位内容",
      type: "input",
      attrIndex: "componentProps.placeholder",
    },
  ],
  bindModel: "modelValue",
};

export default {
  component: () => import("ant-design-vue/lib/time-picker"),
  schema: {
    label: "时间选择器",
    type: "time",
    icon: "icon-xiala",
    field: "time",
    isInput: true,
    componentProps:{
      valueFormat:'HH:mm:ss'
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
      type: "time",
      attrIndex: "componentProps.defaultValue",
    },
  ],
  bindModel: "value",
};

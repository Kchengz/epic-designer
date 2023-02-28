export default {
  component: () => import("./src/KDatePicker"),
  schema: {
    label: "日期选择器",
    type: "date",
    icon: "icon-xiala",
    field: "date",
    isInput: true,
    componentProps: {
      type: "date"
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
      type: "date",
      attrIndex: "componentProps.defaultValue",
    },
    {
      label: "显示类型",
      type: "select",
      attrIndex: "componentProps.type",
      componentProps: {
        options: [
          {
            label: '选择日期',
            value: 'date'
          },
          {
            label: '周',
            value: 'week'
          },
          {
            label: '月份',
            value: 'month'
          },
          {
            label: '年份',
            value: 'year'
          },
          {
            label: '多个日期',
            value: 'dates'
          },
        ]
      },
    },


  ],
  bindModel: "modelValue",
};

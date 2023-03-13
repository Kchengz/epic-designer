import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: () => import("./src/KDatePicker"),
  defaultSchema: {
    label: "日期选择器",
    type: "date",
    icon: "icon-xiala",
    field: "date",
    isInput: true,
    componentProps: {
      valueFormat: "YYYY-MM-DD",
      type: "daterange"
    },
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "date",
        field: "componentProps.defaultValue",
      },
      {
        label: "格式",
        type: "input",
        field: "componentProps.valueFormat",
      },
      {
        label: "显示类型",
        type: "select",
        field: "componentProps.type",
        componentProps: {
          options: [
            {
              label: '日期',
              value: 'date'
            },
            {
              label: '月份',
              value: 'month'
            },
            {
              label: '日期范围',
              value: 'daterange'
            },
          ]
        },
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

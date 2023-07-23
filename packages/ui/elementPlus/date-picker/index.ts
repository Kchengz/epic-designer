import { type ComponentConfigModel } from "@epic-designer/utils/pluginManager";
export default {
  component: async () => (await import("element-plus")).ElDatePicker,
  defaultSchema: {
    label: "日期选择器",
    type: "date",
    icon: "icon-xiala",
    field: "date",
    input: true,
    componentProps: {
      type: "date",
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD",
      placeholder: "请选择",
      startPlaceholder: "请选择",
      endPlaceholder: "请选择",
      size: 'default'
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
        label: "显示类型",
        type: "select",
        field: "componentProps.type",
        componentProps: {
          options: [
            {
              label: "日期",
              value: "date",
            },
            {
              label: "周",
              value: "week",
            },
            {
              label: "月份",
              value: "month",
            },
            {
              label: "年份",
              value: "year",
            },
            {
              label: "时间",
              value: "datetime",
            },
            {
              label: "时间范围",
              value: "datetimerange",
            },
            {
              label: "日期范围",
              value: "daterange",
            },
            {
              label: "月份范围",
              value: "monthrange",
            },
            {
              label: "多个日期",
              value: "dates",
            },
          ],
        },
      },
      {
        label: "开始占位符",
        type: "input",
        field: "componentProps.startPlaceholder",
        show({ values }) {
          return ["datetimerange", "daterange", "monthrange"].includes(
            values.componentProps.type
          );
        },
      },
      {
        label: "结束占位符",
        type: "input",
        field: "componentProps.endPlaceholder",
        show({ values }) {
          return ["datetimerange", "daterange", "monthrange"].includes(
            values.componentProps.type
          );
        },
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
        show({ values }) {
          return !["datetimerange", "daterange", "monthrange"].includes(
            values.componentProps.type
          );
        },
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "default",
              value: "default",
            },
            {
              label: "small",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
      },
      {
        label: "可输入",
        type: "switch",
        field: "componentProps.editable",
      },
      {
        label: "显示格式",
        type: "input",
        field: "componentProps.format",
      },
      {
        label: "value格式",
        type: "input",
        field: "componentProps.valueFormat",
      },
      {
        label: "分割符",
        type: "input",
        field: "componentProps.rangeSeparator",
        show({ values }) {
          return ["datetimerange", "daterange", "monthrange"].includes(
            values.componentProps.type
          );
        },
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
      },
    ],
    event: [
      {
        type: "change",
        describe: "值变化时",
      },
    ],
  },
} as ComponentConfigModel;

import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("naive-ui/lib/date-picker")).NDatePicker,
  groupName: "表单",
  icon: "epic-icon-calendar",
  sort: 910,
  defaultSchema: {
    label: "日期选择器",
    type: "date",
    field: "date",
    input: true,
    componentProps: {
      type: "date",
      placeholder: "请选择",
      format: "yyyy-MM-dd",
      valueFormat: "yyyy-MM-dd",
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
        label: "标题",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "date",
        field: "componentProps.defaultValue",
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "大号",
              value: "large",
            },
            {
              label: "中等",
              value: "medium",
            },
            {
              label: "小型",
              value: "small",
            },
          ],
        },
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
      },
      {
        label: "日期类型",
        type: "select",
        field: "componentProps.type",
        componentProps: {
          options: [
            {
              label: "日期",
              value: "date",
            },
            {
              label: "日期时间",
              value: "datetime",
            },
            {
              label: "日期范围",
              value: "daterange",
            },
            {
              label: "时间范围",
              value: "datetimerange",
            },
            {
              label: "月份",
              value: "month",
            },
            {
              label: "月份范围",
              value: "monthrange",
            },
            {
              label: "年份",
              value: "year",
            },

            {
              label: "季度",
              value: "quarter",
            },
            {
              label: "周",
              value: "week",
            },
          ],
        },
        onChange({ values, value }) {
          values.componentProps.defaultValue = null;
          console.log(value);
          if (["date", "daterange", "dates"].includes(value)) {
            values.componentProps.format = "yyyy-MM-dd";
            values.componentProps.valueFormat = "yyyy-MM-dd";
          } else if (["week"].includes(value)) {
            values.componentProps.format = null;
            values.componentProps.valueFormat = "yyyy-MM-dd";
          } else if (["quarter"].includes(value)) {
            values.componentProps.format = null;
            values.componentProps.valueFormat = "yyyy-MM-dd";
          } else if (["month", "monthrange"].includes(value)) {
            values.componentProps.format = "yyyy-MM";
            values.componentProps.valueFormat = "yyyy-MM";
          } else if (["datetime", "datetimerange"].includes(value)) {
            values.componentProps.format = "yyyy-MM-dd HH:mm:ss";
            values.componentProps.valueFormat = "yyyy-MM-dd HH:mm:ss";
          } else if (["year"].includes(value)) {
            values.componentProps.format = "yyyy";
            values.componentProps.valueFormat = "yyyy";
          }
        },
      },
      {
        label: "显示格式",
        type: "input",
        field: "componentProps.format",
      },
      {
        label: "数据格式",
        type: "input",
        field: "componentProps.valueFormat",
      },
      {
        label: "分割符",
        type: "input",
        field: "componentProps.separator",
        componentProps: {
          placeholder: "请输入",
          clearable: true,
        },
        show: ({ values }) =>
          ["daterange", "datetimerange", "monthrange"].includes(
            values.componentProps.type
          ),
      },
      {
        label: "start框占位符",
        type: "input",
        field: "componentProps.startPlaceholder",
        componentProps: {
          placeholder: "请输入",
          clearable: true,
        },
        show: ({ values }) =>
          ["daterange", "datetimerange", "monthrange"].includes(
            values.componentProps.type
          ),
      },
      {
        label: "end框占位符",
        type: "input",
        field: "componentProps.endPlaceholder",
        componentProps: {
          placeholder: "请输入",
          clearable: true,
        },
        show: ({ values }) =>
          ["daterange", "datetimerange", "monthrange"].includes(
            values.componentProps.type
          ),
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable",
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
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
  bindModel: "formatted-value",
} as ComponentConfigModel;

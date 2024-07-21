import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("element-plus")).ElDatePicker,
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
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD",
      placeholder: "请选择",
      startPlaceholder: "请选择",
      endPlaceholder: "请选择",
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
        onChange({ values, value }) {
          values.componentProps.defaultValue = null;
          if (["date", "daterange", "dates"].includes(value)) {
            values.componentProps.format = "YYYY-MM-DD";
            values.componentProps.valueFormat = "YYYY-MM-DD";
          } else if (["week"].includes(value)) {
            values.componentProps.format = "ww [周]";
            values.componentProps.valueFormat = "YYYY-MM-DD";
          } else if (["month", "monthrange"].includes(value)) {
            values.componentProps.format = "YYYY-MM";
            values.componentProps.valueFormat = "YYYY-MM";
          } else if (["datetime", "datetimerange"].includes(value)) {
            values.componentProps.format = "YYYY-MM-DD HH:mm:ss";
            values.componentProps.valueFormat = "YYYY-MM-DD HH:mm:ss";
          } else if (["year"].includes(value)) {
            values.componentProps.format = "YYYY";
            values.componentProps.valueFormat = "YYYY";
          }
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
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "大号",
              value: "large",
            },
            {
              label: "中等",
              value: "default",
            },
            {
              label: "小型",
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
        label: "数据格式",
        type: "input",
        field: "componentProps.valueFormat",
      },
      {
        label: "分割符",
        type: "input",
        field: "componentProps.rangeSeparator",
        componentProps: {
          placeholder: "请输入",
        },
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
        label: "只读",
        type: "switch",
        field: "componentProps.readonly",
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
} as ComponentConfigModel;

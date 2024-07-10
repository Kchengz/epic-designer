import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: () => import("./datePicker"),
  groupName: "表单",
  icon: "epic-icon-calendar",
  defaultSchema: {
    label: "日期选择器",
    type: "date",
    field: "date",
    input: true,
    componentProps: {
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD",
      type: "date",
      placeholder: "请选择",
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
        componentProps: {
          placeholder: "请输入",
        },
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
              label: "季度",
              value: "quarter",
            },
            {
              label: "年份",
              value: "year",
            },
            {
              label: "日期范围",
              value: "daterange",
            },
            {
              label: "周范围",
              value: "weekrange",
            },
            {
              label: "月份范围",
              value: "monthrange",
            },
            {
              label: "季度范围",
              value: "quarterrange",
            },
            {
              label: "年份范围",
              value: "yearrange",
            },
          ],
        },
        changeSync: true,
        onChange({ values, value }) {
          values.componentProps.defaultValue = null;
          if (
            [
              "daterange",
              "weekrange",
              "monthrange",
              "yearrange",
              "quarterrange",
            ].includes(value)
          ) {
            values.componentProps.placeholder = ["请输入", "请输入"];
          } else {
            values.componentProps.placeholder = "请输入";
          }

          if (["date", "daterange"].includes(value)) {
            values.componentProps.format = "YYYY-MM-DD";
            values.componentProps.valueFormat = "YYYY-MM-DD";
          } else if (["week", "weekrange"].includes(value)) {
            values.componentProps.format = "ww [周]";
            values.componentProps.valueFormat = "YYYY-MM-DD";
          } else if (["month", "monthrange"].includes(value)) {
            values.componentProps.format = "YYYY-MM";
            values.componentProps.valueFormat = "YYYY-MM";
          } else if (["quarter", "quarterrange"].includes(value)) {
            values.componentProps.format = "YYYY-Q季度";
            values.componentProps.valueFormat = "YYYY-Q季度";
          } else if (["year", '"yearrange"'].includes(value)) {
            values.componentProps.format = "YYYY";
            values.componentProps.valueFormat = "YYYY";
          }
        },
      },
      {
        label: "增加时间选择",
        type: "switch",
        field: "componentProps.showTime",
        onChange: ({ value, values }) => {
          if (value) {
            values.componentProps.valueFormat = "YYYY-MM-DD HH:mm:ss";
            values.componentProps.format = "YYYY-MM-DD HH:mm:ss";
          } else {
            values.componentProps.valueFormat = "YYYY-MM-DD";
            values.componentProps.format = "YYYY-MM-DD";
          }
        },
        show({ values }) {
          return ["date", "daterange"].includes(values.componentProps.type);
        },
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
        componentProps: {
          placeholder: "请输入",
        },
        show: ({ values }) =>
          ![
            "daterange",
            "weekrange",
            "monthrange",
            "yearrange",
            "quarterrange",
          ].includes(values.componentProps.type),
      },
      {
        label: "开始占位符",
        type: "input",
        componentProps: {
          placeholder: "请输入",
        },
        field: "componentProps.placeholder.0",
        show: ({ values }) =>
          [
            "daterange",
            "weekrange",
            "monthrange",
            "yearrange",
            "quarterrange",
          ].includes(values.componentProps.type),
      },

      {
        label: "结束占位符",
        type: "input",
        componentProps: {
          placeholder: "请输入",
        },
        field: "componentProps.placeholder.1",
        show: ({ values }) =>
          [
            "daterange",
            "weekrange",
            "monthrange",
            "yearrange",
            "quarterrange",
          ].includes(values.componentProps.type),
      },
      {
        label: "显示格式",
        type: "input",
        componentProps: {
          placeholder: "请输入",
        },
        field: "componentProps.format",
      },
      {
        label: "数据格式",
        type: "input",
        componentProps: {
          placeholder: "请输入",
        },
        field: "componentProps.valueFormat",
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "大号",
              value: "large",
            },
            {
              label: "中等",
              value: "middle",
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
        label: "弹出框位置",
        type: "select",
        componentProps: {
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft",
            },
            {
              label: "bottomRight",
              value: "bottomRight",
            },
            {
              label: "topLeft",
              value: "topLeft",
            },
            {
              label: "topRight",
              value: "topRight",
            },
          ],
          placeholder: "请选择",
        },
        field: "componentProps.placement",
      },
      {
        label: "无边框",
        type: "switch",
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: "componentProps.bordered",
      },
      {
        label: "禁止键盘输入",
        type: "switch",
        field: "componentProps.inputReadOnly",
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear",
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
      {
        type: "ok",
        describe: "点击确定按钮时",
      },
    ],
  },
  bindModel: "modelValue",
} as ComponentConfigModel;

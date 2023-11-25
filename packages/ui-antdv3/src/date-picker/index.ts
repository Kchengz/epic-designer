import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: () => import("./datePicker"),
  defaultSchema: {
    label: "日期选择器",
    type: "date",
    icon: "epic-icon-calendar",
    field: "date",
    input: true,
    componentProps: {
      valueFormat: "YYYY-MM-DD",
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
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "middle",
              value: "middle",
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
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
        componentProps: {
          placeholder: "请输入",
        },
        show: ({ values }) => values.componentProps.type !== "daterange",
      },
      {
        label: "开始占位符",
        type: "input",
        field: "componentProps.placeholder.0",
        show: ({ values }) => values.componentProps.type === "daterange",
      },
      {
        label: "结束占位符",
        type: "input",
        field: "componentProps.placeholder.1",
        show: ({ values }) => values.componentProps.type === "daterange",
      },
      {
        label: "格式",
        type: "input",
        field: "componentProps.valueFormat",
        onChange: (e) => {
          e.values.componentProps.format = e.value;
        },
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
              label: "月份",
              value: "month",
            },
            {
              label: "日期范围",
              value: "daterange",
            },
          ],
          placeholder: "请选择",
        },
        onChange: ({ value, values }) => {
          if (value === "daterange") {
            values.componentProps.placeholder = ["开始日期", "结束日期"];
          } else {
            values.componentProps.placeholder = "请输入";
          }
        },
      },
      {
        label: "边框",
        type: "radio",
        componentProps: {
          options: [
            {
              label: "有",
              value: undefined,
            },
            {
              label: "无",
              value: false,
            },
          ],
          placeholder: "请选择",
        },
        field: "componentProps.bordered",
      },
      {
        label: "增加时间选择",
        type: "switch",
        field: "componentProps.showTime",
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
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("ant-design-vue")).TimePicker,
  groupName: "表单",
  icon: "epic-icon-time",
  defaultSchema: {
    label: "时间选择器",
    type: "time",
    field: "time",
    input: true,
    componentProps: {
      valueFormat: "HH:mm:ss",
      format: "HH:mm:ss",
      placeholder: "请输入",
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
        type: "time",
        field: "componentProps.defaultValue",
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
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
        label: "小时选项间隔",
        type: "number",
        field: "componentProps.hourStep",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "分钟选项间隔",
        type: "number",
        field: "componentProps.minuteStep",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "秒选项间隔",
        type: "number",
        field: "componentProps.secondStep",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "弹出框位置",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
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
        },
        field: "componentProps.placement",
      },
      {
        label: "12小时制",
        type: "switch",
        field: "componentProps.use12Hours",
        changeSync: true,
        onChange({ values, value }) {
          values.componentProps.defaultValue = null;
          if (value) {
            values.componentProps.format = "h:mm:ss a";
            values.componentProps.valueFormat = "h:mm:ss a";
          } else {
            values.componentProps.format = "HH:mm:ss";
            values.componentProps.valueFormat = "HH:mm:ss";
          }
        },
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
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

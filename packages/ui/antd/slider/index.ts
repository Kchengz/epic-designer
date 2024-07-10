import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("ant-design-vue")).Slider,
  groupName: "表单",
  icon: "epic-icon-menu",
  defaultSchema: {
    label: "滑块",
    type: "slider",
    field: "slider",
    input: true,
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
        type: "slider",
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
        label: "范围选择",
        type: "switch",
        field: "componentProps.range",
        changeSync: true,
        onChange: ({ value, values }) => {
          if (value) {
            values.componentProps.defaultValue = [0, 100];
          } else {
            values.componentProps.defaultValue = 0;
          }
        },
      },
      {
        label: "倒转轨道",
        type: "switch",
        field: "componentProps.reverse",
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "垂直模式",
        type: "switch",
        field: "componentProps.vertical",
      },
      {
        label: "显示刻度",
        type: "switch",
        field: "componentProps.dots",
      },
      // {
      //   label: "持续显示提示",
      //   type: "switch",
      //   field: "componentProps.tooltipOpen",
      // },
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
        componentProps: {
          ruleType: "number",
        },
      },
    ],
    event: [
      {
        type: "afterChange",
        describe: "与mouseup触发时机一致",
      },
      {
        type: "change",
        describe: "拖拽结束改变值时",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

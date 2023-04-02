import { ComponentConfigModel } from "../../pluginManager";
export default {
  component: () => import("ant-design-vue/lib/input"),
  defaultSchema: {
    label: "颜色选择器",
    type: "color-picker",
    field: "color-picker",
    icon: "icon-write",
    isInput: true,
    componentProps: {
      type: "color",
      style: {
        width: "80px",
      },
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
        type: "input",
        field: "componentProps.defaultValue",
      },
      {
        label: "显示",
        type: "switch",
        field: "show",
        componentProps: {},
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
    ],
    event: [
      {
        type: "input",
        describe: "输入值",
      },
      {
        type: "change",
        describe: "值修改",
      },
      {
        type: "focus",
        describe: "获取焦点",
      },
      {
        type: "blur",
        describe: "失去焦点",
      },
    ],
    action: [
      {
        type: "select",
        describe: "选中文字",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

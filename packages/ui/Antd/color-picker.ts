import { ComponentConfigModel } from "../../utils/pluginManager";
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
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
    ],
    event: [
      {
        type: "change",
        describe: "值变化时",
      },
    ],
    action: [],
  },
  bindModel: "value",
} as ComponentConfigModel;

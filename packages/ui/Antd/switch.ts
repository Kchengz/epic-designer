import { ComponentConfigModel } from "../../utils/pluginManager";
export default {
  component: () => import("ant-design-vue/lib/switch"),
  defaultSchema: {
    label: "开关",
    type: "switch",
    icon: "icon-number",
    field: "switch",
    isInput: true,
    componentProps: {
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
      type: "switch",
      field: "componentProps.defaultValue",
    },
  ],
},
  bindModel: "checked",
} as ComponentConfigModel;

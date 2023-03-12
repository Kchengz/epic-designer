import { ComponentConfigModel } from '../../pluginManager'
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
      attrIndex: "field",
    },
    {
      label: "文字",
      type: "input",
      attrIndex: "label",
    },
    {
      label: "默认值",
      type: "switch",
      attrIndex: "componentProps.defaultValue",
    },
  ],
},
  bindModel: "checked",
} as ComponentConfigModel;

import { ComponentConfigModel } from "../../utils/pluginManager";
export default {
  component: () => import("ant-design-vue/lib/time-picker"),
  defaultSchema: {
    label: "时间选择器",
    type: "time",
    icon: "icon-xiala",
    field: "time",
    input: true,
    componentProps: {
      valueFormat: "HH:mm:ss",
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
        type: "time",
        field: "componentProps.defaultValue",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

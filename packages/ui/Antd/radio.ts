import { ComponentConfigModel } from "../../utils/pluginManager";
export default {
  component: () => import("ant-design-vue/lib/radio/Group"),
  defaultSchema: {
    label: "单选框",
    type: "radio",
    icon: "icon-danxuan-cuxiantiao",
    field: "radio",
    isInput: true,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1",
        },
        {
          label: "选项2",
          value: "选项2",
        },
      ],
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
        label: "默认值",
        type: "radio",
        field: "componentProps.defaultValue",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

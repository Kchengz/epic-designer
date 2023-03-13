import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: async () =>
    (await import("ant-design-vue/lib/input")).InputPassword,
  defaultSchema: {
    label: "密码输入框",
    type: "password",
    icon: "icon-number",
    field: "password",
    isInput: true,
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
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

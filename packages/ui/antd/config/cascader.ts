import { ComponentConfigModel } from "../../../utils/pluginManager";
export default {
  component: () => import("ant-design-vue/lib/cascader"),
  defaultSchema: {
    label: "级联选择器",
    type: "cascader",
    field: "cascader",
    icon: "icon-write",
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
        type: "input",
        field: "componentProps.defaultValue",
      },
      {
        label: "输入类型",
        type: "select",
        defaultValue: "text",
        componentProps: {
          options: [
            {
              label: "text",
              value: "text",
            },
            {
              label: "number",
              value: "number",
            },
            {
              label: "password",
              value: "password",
            },
          ],
        },
        field: "componentProps.type",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

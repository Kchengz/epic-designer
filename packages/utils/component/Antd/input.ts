import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: () => import("ant-design-vue/lib/input"),
  defaultSchema: {
    label: "文本框",
    type: "input",
    field: "input",
    icon: "icon-write",
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
      {
        label: "显示",
        type: "switch",
        field: "show",
        componentProps: {
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: async () => (await import("element-plus")).ElCascader,
  defaultSchema: {
    label: "级联选择器",
    type: "cascader",
    icon: "icon-number",
    field: "cascader",
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
      placeholder: '请选择'
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
        type: "cascader",
        field: "componentProps.defaultValue",
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
      },
    ],
  }
} as ComponentConfigModel;

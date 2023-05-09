import { ComponentConfigModel } from "../../utils/pluginManager";
export default {
  component: () => import("ant-design-vue/lib/select"),
  defaultSchema: {
    label: "选择框",
    type: "select",
    icon: "icon-xiala",
    field: "select",
    input: true,
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
        label: "文字",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "select",
        field: "componentProps.defaultValue",
      },
    ],
    event: [
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
        type: "focus",
        describe: "使 input 获取焦点",
      },
      {
        type: "blur",
        describe: "使 input 失去焦点",
      },
      {
        type: "select",
        describe: "选中 input 中的文字",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

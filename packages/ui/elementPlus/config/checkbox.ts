import { ComponentConfigModel } from "../../../utils/pluginManager";
export default {
  component: () => import("../src/KCheckbox"),
  defaultSchema: {
    label: "复选框",
    type: "checkbox",
    icon: "icon-duoxuan1",
    field: "checkbox",
    input: true,
    componentProps: {
      defaultValue: [],
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
        type: "checkbox",
        field: "componentProps.defaultValue",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
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
      {
        label: "表单校验",
        type: "k-rule-editor",
        layout: 'vertical',
        field: "rules",
        describe: "校验规则需要配合表单使用",
      },
    ],
    event: [
      {
        type: "change",
        describe: "值变化时",
      },
    ],
  },
} as ComponentConfigModel;

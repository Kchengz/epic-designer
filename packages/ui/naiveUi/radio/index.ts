import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: () => import("./radio"),
  groupName: "表单",
  icon: "epic-icon-danxuan-cuxiantiao",
  defaultSchema: {
    label: "单选框",
    type: "radio",
    field: "radio",
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
        label: "默认值",
        type: "radio",
        field: "componentProps.defaultValue",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "small",
              value: "small",
            },
            {
              label: "medium",
              value: "medium",
            },
            {
              label: "large",
              value: "large",
            },
          ],
        },
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "配置选项",
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
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

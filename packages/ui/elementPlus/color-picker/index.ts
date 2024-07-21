import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("element-plus")).ElColorPicker,
  groupName: "表单",
  icon: "epic-icon-yanse",
  sort: 950,
  defaultSchema: {
    label: "颜色选择器",
    type: "color-picker",
    field: "color-picker",
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
        type: "color-picker",
        field: "componentProps.defaultValue",
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "大号",
              value: "large",
            },
            {
              label: "中等",
              value: "default",
            },
            {
              label: "小型",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
      },
      {
        label: "格式",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "hsl",
              value: "hsl",
            },
            {
              label: "hsv",
              value: "hsv",
            },
            {
              label: "hex",
              value: "hex",
            },
            {
              label: "rgb",
              value: "rgb",
            },
          ],
        },
        field: "componentProps.colorFormat",
      },
      {
        label: "透明度选择",
        type: "switch",
        field: "componentProps.showAlpha",
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
    action: [],
  },
} as ComponentConfigModel;

import { type ComponentConfigModel } from "@epic-designer/utils";

export default {
  component: () => import("./form.vue"),
  groupName: "表单",
  icon: "epic-icon-daibanshixiang",
  sort: 600,
  defaultSchema: {
    label: "表单",
    type: "form",
    componentProps: {
      name: "default",
      labelWidth: "100px",
      "label-position": "left"
    },
    children: [],
  },
  config: {
    attribute: [
      {
        label: "Name",
        type: "input",
        field: "componentProps.name",
      },
      {
        label: "标签位置",
        type: "radio",
        field: "componentProps.label-position",
        componentProps: {
          clearable: true,
          radioButton: true,
          options: [
            {
              label: "左边",
              value: "left",
            },
            {
              label: "右边",
              value: "right",
            },
            {
              label: "顶部",
              value: "top",
            },
          ]
        },
      },
      {
        label: "标签宽度",
        type: "EInputSize",
        field: "componentProps.labelWidth",
      },
      {
        label: "标签后缀",
        type: "input",
        field: "componentProps.labelSuffix",
        componentProps: {
          placeholder: "请输入",
        },
      },

      {
        label: "表单尺寸",
        type: "select",
        field: "componentProps.size",
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
      },
      {
        label: "星号位置",
        type: "select",
        field: "componentProps.require-asterisk-position",
        componentProps: {
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "左边",
              value: "left",
            },
            {
              label: "右边",
              value: "right",
            },
          ],
        },
      },
      {
        label: "行内展示校验信息",
        type: "switch",
        field: "componentProps.inline-message",
      },
      {
        label: "校验反馈图标",
        type: "switch",
        field: "componentProps.status-icon",
      },
      {
        label: "滚动校验错误处",
        type: "switch",
        field: "componentProps.scroll-to-error",
      },
      {
        label: "行内模式",
        type: "switch",
        field: "componentProps.inline",
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
    ],
    action: [
      {
        type: "getData",
        describe: "获取表单数据",
      },
      {
        type: "setData",
        describe: "设置表单数据",
      },
      {
        type: "validate",
        describe: "校验表单",
      },
    ],
  },
} as ComponentConfigModel;

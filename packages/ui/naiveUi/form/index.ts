import { type ComponentConfigModel } from "@epic-designer/utils";

export default {
  component: () => import("./form.vue"),
  groupName: "表单",
  icon: "epic-icon-daibanshixiang",
  defaultSchema: {
    label: "表单",
    type: "form",
    componentProps: {
      name: "default",
      labelWidth: 100,
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
      hideRequiredMark: false,
      labelPlacement: "left",
      labelAlign: "right",
      requireMarkPlacement: "right",
    },
    children: [],
  },
  config: {
    attribute: [
      {
        label: "name",
        type: "input",
        field: "componentProps.name",
      },
      {
        label: "标签宽度",
        type: "EInputSize",
        field: "componentProps.labelWidth",
      },
      {
        label: "标签位置",
        type: "select",
        field: "componentProps.labelPlacement",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left",
            },
            {
              label: "top",
              value: "top",
            },
          ],
        },
      },
      {
        label: "标签对齐方式",
        type: "select",
        field: "componentProps.labelAlign",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left",
            },
            {
              label: "right",
              value: "right",
            },
          ],
        },
      },
      {
        label: "必填星号位置",
        type: "select",
        field: "componentProps.requireMarkPlacement",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left",
            },
            {
              label: "right",
              value: "right",
            },
          ],
        },
      },
      {
        label: "表单尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "medium",
              value: "medium",
            },
            {
              label: "small",
              value: "small",
            },
          ],
        },
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
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
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

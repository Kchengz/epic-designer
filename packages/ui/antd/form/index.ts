import { type ComponentConfigModel } from "@epic-designer/utils";

export default {
  component: () => import("./form.vue"),
  defaultSchema: {
    label: "表单",
    type: "form",
    icon: "epic-icon-daibanshixiang",
    componentProps: {
      layout: "horizontal",
      name: "default",
      labelWidth: 100,
      labelLayout: "fixed",
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
      hideRequiredMark: false,
      colon: true,
      labelAlign: "right",
      size: "middle",
    },
    children: [],
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "name",
        type: "input",
        field: "componentProps.name",
      },
      {
        label: "标签布局",
        type: "radio",
        field: "componentProps.labelLayout",
        componentProps: {
          options: [
            {
              label: "固定宽度",
              value: "fixed",
            },
            {
              label: "自适应宽度",
              value: "flex",
            },
          ],
        },
      },
      {
        label: "labelWidth",
        type: "input",
        field: "componentProps.labelWidth",
        show: ({ values }) => {
          return values.componentProps?.labelLayout === "fixed";
        },
      },
      {
        label: "labelCol",
        type: "input",
        field: "componentProps.labelCol.span",
        show: ({ values }) => {
          return values.componentProps?.labelLayout === "flex";
        },
      },
      {
        label: "wrapperCol",
        type: "input",
        field: "componentProps.wrapperCol.span",
        show: ({ values }) => {
          return values.componentProps?.labelLayout === "flex";
        },
      },
      {
        label: "显示冒号",
        type: "switch",
        field: "componentProps.colon",
      },
      {
        label: "对齐方式",
        type: "select",
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
        field: "componentProps.labelAlign",
      },
      {
        label: "标签文本换行",
        type: "switch",
        field: "componentProps.labelWrap",
      },
      {
        label: "表单布局",
        type: "select",
        componentProps: {
          options: [
            {
              label: "horizontal",
              value: "horizontal",
            },
            {
              label: "vertical",
              value: "vertical",
            },
            {
              label: "inline",
              value: "inline",
            },
          ],
        },
        field: "componentProps.layout",
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "middle",
              value: "middle",
            },
            {
              label: "small",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
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

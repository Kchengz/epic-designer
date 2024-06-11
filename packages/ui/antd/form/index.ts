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
      labelWidth: "100px",
      labelLayout: "fixed",
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
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
        label: "表单布局",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
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
        label: "标签宽度",
        type: "EInputSize",
        field: "componentProps.labelWidth",
        show: ({ values }) => {
          return values.componentProps?.labelLayout === "fixed" && values.componentProps?.layout !== "vertical";
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
        label: "对齐方式",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
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
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
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
        label: "隐藏冒号",
        type: "switch",
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: "componentProps.colon",
      },
      {
        label: "隐藏必须标志",
        type: "switch",
        field: "componentProps.hideRequiredMark",
      },

      {
        label: "标签文本换行",
        type: "switch",
        field: "componentProps.labelWrap",
      },
      {
        label: "滚动校验错误处",
        type: "switch",
        field: "componentProps.scrollToFirstError",
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

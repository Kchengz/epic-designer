import { type ComponentConfigModel } from "@epic-designer/utils";

export default {
  component: () => import("./form.vue"),
  groupName: "表单",
  icon: "icon--epic--list-alt-outline-rounded",
  sort: 600,
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
        label: "Name",
        type: "input",
        field: "componentProps.name",
      },
      {
        label: "表单布局",
        type: "radio",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "水平",
              value: "horizontal",
            },
            {
              label: "垂直",
              value: "vertical",
            },
            {
              label: "内联",
              value: "inline",
            },
          ],
          "option-type": "button"
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
          "option-type": "button"
        },
      },
      {
        label: "标签宽度",
        type: "EInputSize",
        field: "componentProps.labelWidth",
        show: ({ values }) => {
          return values.componentProps?.labelLayout === "fixed";
        },
      },
      {
        label: "标签占比",
        type: "input",
        field: "componentProps.labelCol.span",
        show: ({ values }) => {
          return values.componentProps?.labelLayout === "flex";
        },
        componentProps: {
          placeholder: "请输入",
        }
      },
      {
        label: "控件占比",
        type: "input",
        field: "componentProps.wrapperCol.span",
        show: ({ values }) => {
          return values.componentProps?.labelLayout === "flex";
        },
        componentProps: {
          placeholder: "请输入",
        }
      },
      {
        label: "标签对齐",
        type: "radio",
        componentProps: {
          options: [
            {
              label: "左",
              value: "left",
            },
            {
              label: "右",
              value: "right",
            },
          ],
          "option-type": "button"
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
              label: "大号",
              value: "large",
            },
            {
              label: "中等",
              value: "middle",
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

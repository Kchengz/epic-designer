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
      labelWidth: 100,
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
      hideRequiredMark: false
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
          placeholder: "请选择",
          clearable: true,  
          options: [
            {
              label: "左边",
              value: "left",
            },
            {
              label: "顶部",
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
        label: "必填星号位置",
        type: "select",
        field: "componentProps.requireMarkPlacement",
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
              value: "medium",
            },
            {
              label: "小型",
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

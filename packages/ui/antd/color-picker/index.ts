import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("ant-design-vue")).Input,
  groupName: "表单",
  icon: "epic-icon-yanse",
  sort: 950,
  defaultSchema: {
    label: "颜色选择器",
    type: "color-picker",
    field: "color-picker",
    input: true,
    componentProps: {
      type: "color",
      style: {
        width: "80px",
      },
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
        label: "标题",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue",
      },
      {
        label: "尺寸",
        type: "select",
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
        label: "无边框",
        type: "switch",
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: "componentProps.bordered",
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear",
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
        describe: "值修改时",
      },
      {
        type: "focus",
        describe: "获取焦点时",
      },
      {
        type: "blur",
        describe: "失去焦点时",
      },
    ],
    action: [],
  },
  bindModel: "value",
} as ComponentConfigModel;

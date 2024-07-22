import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("ant-design-vue")).Input,
  groupName: "表单",
  icon: "icon--epic--border-color-outline-rounded",
  sort: 700,
  defaultSchema: {
    label: "输入框",
    type: "input",
    field: "input",
    input: true,
    componentProps: {
      placeholder: "请输入",
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
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "输入类型",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "text",
              value: "text",
            },
            {
              label: "number",
              value: "number",
            },
            {
              label: "password",
              value: "password",
            },
          ],
        },
        field: "componentProps.type",
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
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxlength",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "展示字数",
        type: "switch",
        field: "componentProps.showCount",
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
        type: "input",
        describe: "输入值时",
      },
      {
        type: "change",
        describe: "值修改时",
      },
      {
        type: "pressEnter",
        describe: "按下回车时",
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
    action: [
      {
        type: "focus",
        describe: "使输入框获取焦点",
      },
      {
        type: "blur",
        describe: "使输入框失去焦点",
      },
      {
        type: "select",
        describe: "选中输入框中的文字",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

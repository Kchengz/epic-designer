
import { ElInput } from "element-plus"

export default {
  //component: () => import("ant-design-vue/lib/input"),
  component: ElInput,
  schema: {
    label: "文本框",
    type: "input",
    field: "input",
    icon: "icon-write",
    isInput: true,
    componentProps: {
      hidden: false, //{{ $.page_11_default.priority2 == "高" }}
      defaultValue: ''
    }
  },
  atteditSchemas: [
    {
      label: "字段名",
      type: "input",
      attrIndex: "field",
    },
    {
      label: "标题",
      type: "input",
      attrIndex: "label",
    },
    {
      label: '隐藏',
      type: "input",  // 现在是input，之后是checkbox + 动态绑定
      defaultValue: false,
      attrIndex: "componentProps.hidden",

    },
    {
      label: "默认值",
      type: "input",
      attrIndex: "componentProps.defaultValue",
    },
    {
      label: "输入类型",
      type: "select",
      defaultValue: "text",
      componentProps: {
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
      attrIndex: "componentProps.type",
    },
  ],
  bindModel: "modelValue",
};

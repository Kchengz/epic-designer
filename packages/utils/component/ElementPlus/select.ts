
import { ElSelect, ElOption } from "element-plus"

export default {
  component: () => import("./KSelect"),
  //component: ElSelect,
  schema: {
    label: "选择框",
    type: "select",
    icon: "icon-xiala",
    field: "select",
    isInput: true,
    componentProps: {
      Option: [
        {
          label: "选项1",
          value: "选项1",
        },
        {
          label: "选项2",
          value: "选项2",
        },
      ],
    },
  },
  atteditSchemas: [
    {
      label: "字段名",
      type: "input",
      attrIndex: "field",
    },
    {
      label: "文字",
      type: "input",
      attrIndex: "label",
    },
    {
      label: "默认值",
      type: "select",
      attrIndex: "componentProps.defaultValue",
    },
    {
      label: "隐藏",
      type: "input",
      attrIndex: "componentProps.hidden",
    },

  ],
  bindModel: "modelValue",
};

export default {
  component: () => import("./src/KButton"),
  //component: ElButton,
  schema: {
    label: "按钮",
    type: "button",
    field: "input",
    icon: "icon-write",
    isInput: false,
  },
  atteditSchemas: [
    {
      label: "标题",
      type: "input",
      attrIndex: "label",
    },
    {
      label: "类型",
      type: "select",
      componentProps: {
        placeholder: "请选择",
        clearable: true,
        options: [
          {
            label: "primary",
            value: "primary",
          },
          {
            label: "success",
            value: "success",
          },
          {
            label: "info",
            value: "info",
          },
          {
            label: "warning",
            value: "warning",
          },
          {
            label: "warning",
            value: "warning",
          },
        ],
      },
      attrIndex: "componentProps.type",
    },
    {
      label: "朴素按钮",
      type: "switch",
      attrIndex: "componentProps.plain",
    },
    {
      label: "圆角按钮",
      type: "switch",
      attrIndex: "componentProps.round",
    },
    {
      label: "圆形按钮",
      type: "switch",
      attrIndex: "componentProps.circle",
    },

    {
      label: "动作",
      type: "action",
      attrIndex: "componentProps.eventActions",
      componentProps: {
        eventActions: [
          {
            type: "onClick",
            actions: [],
          },
        ],
      },
    },
  ],
  bindModel: '',
};

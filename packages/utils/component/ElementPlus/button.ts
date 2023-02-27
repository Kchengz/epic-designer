
export default {
  component: () => import("./KButton"),
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
      type: "input",
      attrIndex: "componentProps.type",
    },

    {
      label: "动作",
      type: "action",
      attrIndex: "componentProps.eventActions",
      componentProps: {
        eventActions: [
          {
            type: 'onClick',
            actions: [],
          },
        ],
      },
    },
  ],
};

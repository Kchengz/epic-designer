export default {
  component: () => import("./src/KCard"),
  schema: {
    label: "卡片布局",
    type: "card",
    icon: "icon-xiala",
    children: []
  },
  atteditSchemas: [
    {
      label: "标题",
      type: "input",
      attrIndex: "label",
    },

  ],
  bindModel: "value",
};

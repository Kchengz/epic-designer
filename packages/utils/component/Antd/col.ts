export default {
  component: () => import("./KCol"),
  schema: {
    label: "栅格布局-列",
    type: "col",
    icon: "icon-xiala",
    children: []
  },
  atteditSchemas: [
    {
      label: "占位格数",
      type: "input",
      attrIndex: "span",
    },

  ],
  bindModel: "value",
};

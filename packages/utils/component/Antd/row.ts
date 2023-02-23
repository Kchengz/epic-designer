export default {
  component: () => import("./KRow"),
  schema: {
    label: "栅格布局",
    type: "row",
    icon: "icon-xiala",
    children: []
  },
  atteditSchemas: [
    {
      label: "垂直对齐方式",
      type: "input",
      attrIndex: "align",
    },
    {
      label: "水平排列方式",
      type: "input",
      attrIndex: "justify",
    },
    {
      label: "栅格间距",
      type: "input",
      attrIndex: "gutter",
    },
    {
      label: "自动换行",
      type: "switch",
      attrIndex: "wrap",
    },
    

  ],
  bindModel: "value",
};

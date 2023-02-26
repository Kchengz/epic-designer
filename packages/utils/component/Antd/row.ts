export default {
  component: () => import("./KRow"),
  schema: {
    label: "栅格布局",
    type: "row",
    icon: "icon-xiala",
    children: [
      {
        "type": "col",
        "children": [],
        "componentProps": {
          "span": 12
        },
        "id": "g062zikd2jk00"
      },
      {
        "type": "col",
        "children": [],
        "componentProps": {
          "span": 12
        },
        "id": "gy5z9jtfb3s00"
      }
    ]
  },
  atteditSchemas: [
    {
      label: "垂直对齐方式",
      type: "input",
      attrIndex: "componentProps.align",
    },
    {
      label: "水平排列方式",
      type: "input",
      attrIndex: "componentProps.justify",
    },
    {
      label: "栅格间距",
      type: "input",
      attrIndex: "componentProps.gutter",
    },
    {
      label: "列编辑",
      type: "k-col-editor",
      attrIndex: "children",
    },


  ],
  bindModel: "value",
};

export default {
  component: () => import("./src/KTabPane"),
  schema: {
    label: "标签内容",
    type: "tab-pane",
    icon: "icon-xiala",
    children: [],
    componentProps: {
      tab: '标签',
      key: '1'
    }
  },
  atteditSchemas: [
    {
      label: "垂直对齐方式",
      type: "input",
      attrIndex: "componentProps.tab",
    },



  ],
  bindModel: "value",
};

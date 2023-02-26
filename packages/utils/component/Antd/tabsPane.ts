export default {
  component: () => import("./KTabsPane"),
  schema: {
    label: "标签页内容",
    type: "tabsPane",
    icon: "icon-xiala",
    children: [],
    componentProps: {
      tab: '标签页'
    }
  },
  atteditSchemas: [
    {
      label: "选项卡名称",
      type: "input",
      attrIndex: "componentProps.tab",
    },
  


  ],
  bindModel: "value",
};

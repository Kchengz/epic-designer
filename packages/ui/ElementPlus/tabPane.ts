import { ComponentConfigModel } from "../../utils/pluginManager";
export default {
  component: () => import("./src/KTabPane"),
  defaultSchema: {
    label: "标签内容",
    type: "tab-pane",
    icon: "icon-xiala",
    children: [],
    componentProps: {
      tab: "标签",
    },
  },
  config: {
    attribute: [
      {
        label: "垂直对齐方式",
        type: "input",
        field: "componentProps.tab",
      },
    ],
  },
} as ComponentConfigModel;

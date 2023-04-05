import { ComponentConfigModel } from "../../pluginManager";
export default {
  component: () => import("./src/KTabs"),
  defaultSchema: {
    label: "标签页",
    type: "tabs",
    icon: "icon-xiala",
    field: "tabs",
    children: [
      {
        label: "标签1",
        type: "tab-pane",
        children: [],
        id: "1",
      },
      {
        label: "标签2",
        type: "tab-pane",
        children: [],
        id: "2",
      },
    ],
    componentProps: {
      defaultValue: "1",
    },
  },
  config: {
    attribute: [
      {
        label: "标签页配置",
        type: "k-tab-pane-editor",
        field: "children",
      },
    ],
  },
} as ComponentConfigModel;

import { ComponentConfigModel } from "../../utils/pluginManager";
export default {
  component: () => import("./src/KCollapseItem"),
  defaultSchema: {
    label: "折叠项",
    type: "collapse-item",
    icon: "icon-xiala",
    children: [],
  },
  config: {
    attribute: [],
  },
} as ComponentConfigModel;

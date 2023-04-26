import { ComponentConfigModel } from "../../pluginManager";

export default {
  component: () => import("./KPage/KPage.vue"),
  defaultSchema: {
    label: "页面",
    type: "page",
    componentProps: {
    },
    children: [],
  },
  config: {
    attribute: [
      {
        label: "页面名称",
        type: "input",
        field: "name",
      },
    ],
  }
} as ComponentConfigModel;

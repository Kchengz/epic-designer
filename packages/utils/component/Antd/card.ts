import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: () => import("./src/KCard"),
  defaultSchema: {
    label: "卡片布局",
    type: "card",
    icon: "icon-xiala",
    children: []
  },
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label",
      },
    ],
  },
} as ComponentConfigModel;

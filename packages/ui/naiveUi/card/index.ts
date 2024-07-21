import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: () => import("./card"),
  groupName: "布局",
  icon: "epic-icon-qiapian",
  sort: 900,
  defaultSchema: {
    label: "卡片布局",
    type: "card",
    children: [],
  },
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
    ],
  },
} as ComponentConfigModel;

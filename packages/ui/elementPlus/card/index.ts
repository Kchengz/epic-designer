import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: () => import("./card"),
  groupName: "布局",
  icon: "epic-icon-qiapian",
  sort: 700,
  defaultSchema: {
    label: "卡片布局",
    type: "card",
    children: [],
    componentProps: {
    },
  },
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label",
      },
      {
        label: "阴影时机",
        type: "select",
        componentProps: {
          options: [
            {
              label: "always",
              value: "always",
            },
            {
              label: "hover",
              value: "hover",
            },
            {
              label: "never",
              value: "never",
            },
          ],
          placeholder: "请选择",
          clearable: true,
        },
        field: "componentProps.shadow",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
    ],
  },
} as ComponentConfigModel;

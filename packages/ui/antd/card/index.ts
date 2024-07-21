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
  },
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label",
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "default",
              value: "default",
            },
            {
              label: "small",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
      },
      {
        label: "无边框",
        type: "switch",
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: "componentProps.bordered",
      },
      {
        label: "鼠标悬停阴影",
        type: "switch",
        field: "componentProps.hoverable",
      },
      {
        label: "加载状态",
        type: "switch",
        field: "componentProps.loading",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
    ],
  },
} as ComponentConfigModel;

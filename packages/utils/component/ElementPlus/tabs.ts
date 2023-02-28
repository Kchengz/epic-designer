export default {
  component: () => import("./src/KTabs"),
  schema: {
    label: "标签页",
    type: "tabs",
    icon: "icon-xiala",
    field: "tabs",
    children: [
      {
        type: "tab-pane",
        children: [],
        id: "sdfsdf",
        label: "标签1",
      },
      {
        label: "标签2",
        type: "tab-pane",
        children: [],
        id: "sdfsdf2",
      },
    ],
    componentProps: {
      defaultValue: '1',
    },
  },
  atteditSchemas: [
    {
      label: "标签页配置",
      type: "k-tab-pane-editor",
      attrIndex: "children",
    },

  ],
  bindModel: "modelValue",
};

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
        componentProps: {
          label: "标签1",
          name: '1',
        },
      },
      {
        type: "tab-pane",
        children: [],
        id: "sdfsdf2",
        componentProps: {
          label: "标签2",
          name: '2',
        },
      },
    ],
    componentProps: {
      defaultValue: '1',
    },
  },
  atteditSchemas: [
    {
      label: "垂直对齐方式",
      type: "input",
      attrIndex: "componentProps.align",
    },
    {
      label: "水平排列方式",
      type: "input",
      attrIndex: "componentProps.justify",
    },
    {
      label: "栅格间距",
      type: "input",
      attrIndex: "componentProps.gutter",
    },

  ],
  bindModel: "modelValue",
};

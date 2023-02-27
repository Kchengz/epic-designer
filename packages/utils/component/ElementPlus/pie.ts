
export default {
  component: () => import("./KPie.vue"),
  //component: ElButton,
  schema: {
    label: "饼图",
    type: "pie",
    icon: "icon-write",
    isInput: false,
  },
  atteditSchemas: [
    {
      label: "标题",
      type: "input",
      attrIndex: "label",
    },

  ],
};

import { ComponentAttr } from '../../pluginManager'


export default {
  component: () => import("./KPage/KPage.vue"),
  schema: {
    label: "页面",
    type: "page",
    componentProps: {
    },
    children: [],
  },
  atteditSchemas: [
    {
      label: "name",
      type: "input",
      attrIndex: "name",
    },
  ] as ComponentAttr[],
  bindModel: ''
};

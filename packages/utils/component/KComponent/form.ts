import { ComponentAttr } from '../../pluginManager'


export default {
  component: () => import("./KForm/src/KForm.vue"),
  schema: {
    label: "表单",
    type: "form",
    icon: "icon-qiapian",
    labelWidth: 100,
    name: 'default',
    componentProps: {
      layout: "horizontal",
      labelWidth: 100,
      labelLayout: "flex",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      },
      hideRequiredMark: false
    },
    children: [],
  },
  atteditSchemas: [
    {
      label: "标签布局",
      type: "radio",
      attrIndex: "componentProps.labelLayout",
      componentProps: {
        options: [
          {
            label: "固定宽度",
            value: "fixed",
          },
          {
            label: "自适应宽度",
            value: "flex",
          },
        ],
      },
    },
    {
      label: "name",
      type: "input",
      attrIndex: "name",
    },
    {
      label: "labelWidth",
      type: "input",
      attrIndex: "componentProps.labelWidth",
      show: (values) => {
        return values.componentProps.labelLayout === "fixed";
      },
    },
    {
      label: "labelCol",
      type: "input",
      attrIndex: "componentProps.labelCol.span",
      show: (values) => {
        return values.componentProps.labelLayout === "flex";
      },
    },
    {
      label: "wrapperCol",
      type: "input",
      attrIndex: "componentProps.wrapperCol.span",
      show: (values) => {
        return values.componentProps.labelLayout === "flex";
      },
    },
  ] as ComponentAttr[],
  bindModel: ''
};

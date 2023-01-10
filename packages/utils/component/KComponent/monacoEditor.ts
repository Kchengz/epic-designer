export default {
  component: () => import("../../../components/MonacoEditor/monacoEditor.vue"),
  schema: {
    label: "代码编辑器",
    type: "monacoEditor",
    field: "monacoEditor",
    icon: "icon-write",
    isInput: true,
  },
  atteditSchemas: [
    {
      label: "字段名",
      type: "input",
      attrIndex: "field",
    },
    {
      label: "标题",
      type: "input",
      attrIndex: "label",
    },
    {
      label: "默认值",
      type: "monacoEditor",
      attrIndex: "componentProps.defaultValue",
    },
  ],
  bindModel: "value",
};

import { ComponentConfigModel } from "../../pluginManager";
export default {
  component: () => import("./MonacoEditor/monacoEditor.vue"),
  defaultSchema: {
    label: "代码编辑器",
    type: "monacoEditor",
    field: "monacoEditor",
    icon: "icon-write",
    input: true,
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field",
      },
      {
        label: "标题",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "monacoEditor",
        field: "componentProps.defaultValue",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;

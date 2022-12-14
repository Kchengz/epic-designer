import '../../packages/init'

export function useComponent(pluginManager) {
  pluginManager.registerComponent(
    "Checkbox",
    () => import("ant-design-vue/lib/checkbox"),
    "value"
  );

  pluginManager.addComponent(
    () => import("ant-design-vue/lib/input"),
    {
      label: "文本框",
      type: "input",
      field: "input",
    },
    [
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
        label: "输入类型",
        type: "select",
        defaultValue: "text",
        componentProps: {
          options: [
            {
              label: "text",
              value: "text",
            },
            {
              label: "number",
              value: "number",
            },
            {
              label: "password",
              value: "password",
            },
          ],
        },
        attrIndex: "componentProps.type",
      },
    ]
  );

  pluginManager.addComponent(
    () => import("ant-design-vue/lib/input-number"),
    {
      label: "数字输入框",
      type: "select",
      field: "select",
    },
    [
      {
        label: "字段名",
        type: "input",
        attrIndex: "field",
      },
      {
        label: "文字",
        type: "input",
        attrIndex: "label",
      },
    ]
  );

  pluginManager.addComponent(
    () => import("ant-design-vue/lib/select"),
    {
      label: "选择框",
      type: "select",
      field: "select",
    },
    [
      {
        label: "字段名",
        type: "input",
        attrIndex: "field",
      },
      {
        label: "文字",
        type: "input",
        attrIndex: "label",
      },
    ]
  );
}

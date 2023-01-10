

export function useComponent(pluginManager) {


  pluginManager.addComponent(
    () => import("./test.vue"),
    {
      label: "测试",
      type: "test",
      field: "test",
      icon: "icon-qiapian",
      children: [],
    },
    [
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

}

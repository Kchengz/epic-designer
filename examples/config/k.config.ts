import { pluginManager, nodeSchema } from "../../packages/index";

import "../../packages/init";

pluginManager.registerComponent(
  "input",
  () => import("ant-design-vue/lib/input"),
  "value"
);
pluginManager.registerComponent(
  "select",
  () => import("ant-design-vue/lib/select"),
  "value"
);
pluginManager.registerComponent(
  "Checkbox",
  () => import("ant-design-vue/lib/checkbox"),
  "value"
);
pluginManager.registerComponent("Test", () => import("./test.vue"));


// const list = [{
//   label: '文本框',
//   type: 'input',
//   field: 'input',
// }, {
//   label: '选择框',
//   type: 'select',
//   field: 'select',
// }, {
//   label: '测试布局组件',
//   type: 'Test',
//   children: []
// },]
// nodeSchema.addSchemas(list)


pluginManager.addComponent(
  () => import("ant-design-vue/lib/input"),
  {
    label: '文本框',
    type: 'input',
    field: 'input',
  },
  [
    {
      label: '文字',
      type: 'input',
      attrIndex: 'label'
    },
    {
      label: '类型',
      type: 'input',
      defaultValue: '454',
      attrIndex: 'componentProps.type'
    },
  ]
);



// pluginManager.addComponent("Input", Input);
// pluginManager.addComponent("InputNumber", InputNumber);
// pluginManager.addComponent("Radio", Radio);
// pluginManager.addComponent("Checkbox", Checkbox);
// pluginManager.addComponent("Select", Select);
// pluginManager.addComponent("TimePicker", TimePicker);
// pluginManager.addComponent("DatePicker", DatePicker);
// pluginManager.addComponent("Cascader", Cascader);
// pluginManager.addComponent("Transfer", Transfer);

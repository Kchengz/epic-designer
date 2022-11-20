import { pluginManager } from "../../packages/index";

import "../../packages/init";

pluginManager.registerComponent(
  "Checkbox",
  () => import("ant-design-vue/lib/checkbox"),
  "value"
);
pluginManager.registerComponent("Test", () => import("./test.vue"));


pluginManager.addComponent(
  () => import("ant-design-vue/lib/input"),
  {
    label: '文本框',
    type: 'input',
    field: 'input',
  },
  [
    {
      label: '字段名',
      type: 'input',
      attrIndex: 'field'
    },
    {
      label: '标题',
      type: 'input',
      attrIndex: 'label'
    },
    {
      label: '输入类型',
      type: 'select',
      defaultValue: 'text',
      componentProps: {
        options: [
          {
            label: 'text',
            value: 'text'
          },
          {
            label: 'number',
            value: 'number'
          },
          {
            label: 'password',
            value: 'password'
          },
        ],
      },
      attrIndex: 'componentProps.type'
    },
  ]
);

pluginManager.addComponent(
  () => import("ant-design-vue/lib/input-number"),
  {
    label: '数字输入框',
    type: 'select',
    field: 'select',
  },
  [
    {
      label: '字段名',
      type: 'input',
      attrIndex: 'field'
    },
    {
      label: '文字',
      type: 'input',
      attrIndex: 'label'
    },

  ]
);

pluginManager.addComponent(
  () => import("ant-design-vue/lib/select"),
  {
    label: '选择框',
    type: 'select',
    field: 'select',
  },
  [
    {
      label: '字段名',
      type: 'input',
      attrIndex: 'field'
    },
    {
      label: '文字',
      type: 'input',
      attrIndex: 'label'
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

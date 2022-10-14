import { pluginManager } from "../../packages/index";

import "../../packages/init";

pluginManager.addComponent(
  "Input",
  () => import("ant-design-vue/lib/input"),
  "value"
);
pluginManager.addComponent(
  "Select",
  () => import("ant-design-vue/lib/select"),
  "value"
);
pluginManager.addComponent(
  "Checkbox",
  () => import("ant-design-vue/lib/checkbox"),
  "value"
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
pluginManager.addComponent("Test", () => import("./test.vue"));

import { pluginManager } from "../../packages/index";
import {
  Input,
  InputNumber,
  Radio,
  Checkbox,
  Select,
  TimePicker,
  DatePicker,
  Cascader,
  Transfer,
} from "ant-design-vue";

import "../../packages/init";
console.log(InputNumber)

pluginManager.addComponent("Input", async () => {
  return (await import("ant-design-vue"))["Input"]
});
pluginManager.addComponent("Input", Input);
// pluginManager.addComponent("InputNumber", InputNumber);
// pluginManager.addComponent("Radio", Radio);
// pluginManager.addComponent("Checkbox", Checkbox);
// pluginManager.addComponent("Select", Select);
// pluginManager.addComponent("TimePicker", TimePicker);
// pluginManager.addComponent("DatePicker", DatePicker);
// pluginManager.addComponent("Cascader", Cascader);
// pluginManager.addComponent("Transfer", Transfer);
pluginManager.addComponent("Test", () => import("./test.vue"));

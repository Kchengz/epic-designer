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

pluginManager.addComponent("Input", async () => {
  // console.log((await import("ant-design-vue"))["Input"]);
  // console.log(
  //   Promise.resolve((await import("ant-design-vue"))["Input"]).then((res) =>
  //     console.log(res)
  //   )
  // );
  import("./test.vue").then(res=>{
    console.log(res)
  })
  console.log(Input)
  return Input
});
// pluginManager.addComponent("InputNumber", InputNumber);
// pluginManager.addComponent("Radio", Radio);
// pluginManager.addComponent("Checkbox", Checkbox);
// pluginManager.addComponent("Select", Select);
// pluginManager.addComponent("TimePicker", TimePicker);
// pluginManager.addComponent("DatePicker", DatePicker);
// pluginManager.addComponent("Cascader", Cascader);
// pluginManager.addComponent("Transfer", Transfer);
pluginManager.addComponent("Test", () => import("./test.vue"));

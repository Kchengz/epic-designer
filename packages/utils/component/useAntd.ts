// 注册ant-design-vue ui
import { PluginManager } from "../pluginManager";
import { Form, FormItem, Modal } from "ant-design-vue";
import Input from "./Antd/input";
import InputNumber from "./Antd/inputNumber";
import InputPassword from "./Antd/inputPassword";
import Radio from "./Antd/radio";
import Checkbox from "./Antd/checkbox";
import Select from "./Antd/select";
import TimePicker from "./Antd/timePicker";
import DatePicker from "./Antd/datePicker";
import Cascader from "./Antd/cascader";
import Switch from "./Antd/switch";

export function useAntd(pluginManager: PluginManager) {
  pluginManager.registerComponent("Form", Form);
  pluginManager.registerComponent("FormItem", FormItem);
  pluginManager.registerComponent("Modal", Modal);
  const componentArray = [
    Input,
    InputNumber,
    InputPassword,
    Radio,
    Checkbox,
    Select,
    TimePicker,
    DatePicker,
    Cascader,
    Switch
  ];

  componentArray.forEach((item) => {
    pluginManager.addComponent(
      item.component,
      item.schema,
      item.atteditSchemas,
      item.bindModel
    );
  });
}

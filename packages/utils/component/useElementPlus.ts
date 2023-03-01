// 注册ant-design-vue ui
import { PluginManager } from "../pluginManager";
import { ElDialog, ElFormItem } from "element-plus";
import Input from "./ElementPlus/input";
import Number from "./ElementPlus/input-number";
import Form from "./ElementPlus/form";
import Button from "./ElementPlus/button";
import Card from "./ElementPlus/card";
import Row from "./ElementPlus/row";
import Col from "./ElementPlus/col";
import Select from "./ElementPlus/select";
import Tabs from "./ElementPlus/tabs";
import Radio from "./ElementPlus/radio";
import Checkbox from "./ElementPlus/checkbox";
import Slider from "./ElementPlus/slider";

import colorPicker from "./ElementPlus/color-picker";
import Switch from "./ElementPlus/switch";
import Cascader from "./ElementPlus/cascader";
import TabPane from "./ElementPlus/tabPane";
import DatePicker from "./ElementPlus/datePicker";

export function useElementPlus(pluginManager: PluginManager) {
  pluginManager.registerComponent("Modal", ElDialog);
  pluginManager.registerComponent("FormItem", ElFormItem);

  const componentArray = [
    Form,
    Input,
    Number,
    Radio,
    Checkbox,
    DatePicker,
    Select,
    Switch,
    colorPicker,
    Cascader,
    Slider,
    Button,
    Card,
    Row,
    Col,
    Tabs,
    TabPane,
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

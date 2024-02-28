// 注册element-plus ui
import { type PluginManager } from "@epic-designer/utils";
import Input from "./input";
import InputNumber from "./input-number";
import Form from "./form";
import FormItem from "./formItem";
import Button from "./button";
import Card from "./card";
import Row from "./row";
import Col from "./col";
import Select from "./select";
import Radio from "./radio";
import Checkbox from "./checkbox";
import Slider from "./slider";
import ColorPicker from "./color-picker";
import Switch from "./switch";
import Cascader from "./cascader";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";
import DatePicker from "./date-picker";
import UploadFile from "./upload-file";
import UploadImage from "./upload-image";
import Modal from "./modal";
import {
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElCollapse,
  ElCollapseItem,
  provideGlobalConfig,
} from "element-plus";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export function setupElementPlus(
  pluginManager: PluginManager,
): void {

  

  pluginManager.component("FormItem", ElFormItem);
  pluginManager.component("Tabs", ElTabs);
  pluginManager.component("TabPane", ElTabPane);
  pluginManager.component("Collapse", ElCollapse);
  pluginManager.component("CollapseItem", ElCollapseItem);

  const componentArray = [
    Form,
    FormItem,
    Input,
    InputNumber,
    Radio,
    Checkbox,
    DatePicker,
    Select,
    Switch,
    ColorPicker,
    Cascader,
    Slider,
    Button,
    Card,
    Row,
    Col,
    Collapse,
    CollapseItem,
    UploadFile,
    Modal,
    UploadImage,
  ];

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });

  // 设置分组显示
  pluginManager.setSchemaGroup([
    {
      title: "表单",
      list: [
        "form",
        "input",
        "number",
        "select",
        "cascader",
        "checkbox",
        "radio",
        "date",
        "slider",
        "switch",
        "color-picker",
        "upload-file",
        "upload-image",
        "button",
      ],
    },
    {
      title: "布局",
      list: ["card", "row"],
    },
  ]);
}

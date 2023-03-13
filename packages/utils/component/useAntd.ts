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
import UploadImage from "./Antd/uploadImage";
import UploadFile from "./Antd/uploadFile";
import Card from "./Antd/card";
import Row from "./Antd/row";
import Col from "./Antd/col";
import Tabs from "./Antd/tabs";
import TabPane from "./Antd/tabPane";
import KForm from "./Antd/form";

// 兼容性样式
import "./Antd/index.less";

export function useAntd(pluginManager: PluginManager) {
  pluginManager.component("Form", Form);
  pluginManager.component("FormItem", FormItem);
  pluginManager.component("Modal", Modal);
  const componentArray = [
    KForm,
    Input,
    InputNumber,
    InputPassword,
    Radio,
    Checkbox,
    Select,
    TimePicker,
    DatePicker,
    Cascader,
    Switch,
    UploadImage,
    UploadFile,
    Card,
    Row,
    Col,
    Tabs,
    TabPane,
  ];

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });

  // 设置分组显示
  pluginManager.setSchemaGroup([
    {
      title: "输入组件",
      list: [
        "input",
        "textarea",
        "number",
        "password",
        "select",
        "checkbox",
        "radio",
        "date",
        "time",
        "rate",
        "slider",
        "upload-file",
        "upload-image",
        "cascader",
        "treeSelect",
        "batch",
        "editor",
        "switch",
        "button",
        "text",
        "html",
        "form",
        "color-picker",
        "slider",
      ],
    },
    {
      title: "布局组件",
      list: [
        "card",
        "row",
        "tabs",
      ]
    }
  ])
}

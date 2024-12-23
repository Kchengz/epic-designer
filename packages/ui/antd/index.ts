// 注册ant-design-vue ui
import { pluginManager as pManager, type PluginManager } from "epic-designer";

import Input from "./input";
import Textarea from "./textarea";
import InputNumber from "./input-number";
import InputPassword from "./input-password";
import Radio from "./radio";
import Checkbox from "./checkbox";
import Select from "./select";
import Slider from "./slider";
import TimePicker from "./time-picker";
import DatePicker from "./date-picker";
import Cascader from "./cascader";
import Switch from "./switch";
import UploadImage from "./upload-image";
import UploadFile from "./upload-file";
import Card from "./card";
import Row from "./row";
import Col from "./col";
import Form from "./form";
import FormItem from "./form-item";
import Button from "./button";
import Modal from "./modal";
import colorPicker from "./color-picker";
import { version } from "ant-design-vue";

export function setupAntd(pluginManager: PluginManager = pManager): void {
  // 版本兼容处理 start
  const versionArray = version.split(".");
  // 获取版本号第一个数字
  const firstNumber = parseInt(versionArray[0]);

  // 创建一个 style 标签
  const style = document.createElement("style");

  // 大于v3版本
  if (firstNumber > 3) {
    // 定义 CSS 样式
    const css = `
.epic-modal-ant .epic-modal-main {
  padding: 4px 12px 12px;
}
.epic-modal-ant .ant-modal-title {
  padding: 16px 16px 0px;
}
.epic-modal-ant .ant-modal-content {
  padding: 0px;
}`;
    style.appendChild(document.createTextNode(css));
    // 将 style 标签插入到页面的 head 中
    document.head.appendChild(style);
    // 版本兼容处理 end
  } else {
    // v3版本
    Form.config.attribute = Form.config.attribute?.filter(
      (item) => item.label !== "禁用"
    );
  }

  // 加载组件
  pluginManager.component(
    "Collapse",
    async () => (await import("ant-design-vue")).Collapse
  );
  pluginManager.component(
    "CollapseItem",
    async () => (await import("ant-design-vue")).CollapsePanel
  );
  pluginManager.component(
    "Tabs",
    async () => (await import("ant-design-vue")).Tabs
  );
  pluginManager.component(
    "TabPane",
    async () => (await import("ant-design-vue")).TabPane
  );

  const componentArray = [
    Form,
    FormItem,
    Input,
    Textarea,
    InputNumber,
    InputPassword,
    Radio,
    Checkbox,
    Select,
    Slider,
    TimePicker,
    DatePicker,
    Cascader,
    Switch,
    UploadImage,
    UploadFile,
    colorPicker,
    Button,
    Card,
    Row,
    Col,
    Modal,
  ];

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
    pluginManager.addBaseComponentTypes(item.defaultSchema.type);
  });

  // ui初始化完成。
  pluginManager.setInitialized(true);
}


// 注册naive-ui
import { type PluginManager } from "../../utils/pluginManager";
import Input from "./input";
import InputNumber from "./input-number";
import Form from "./form";
import FormItem from "./form-item";
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
import Tabs from "./tabs";
import TabPane from "./tab-pane";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";
import DatePicker from "./date-picker";
import { NTabPane } from "naive-ui";
import UploadFile from "./upload-file";
import UploadImage from "./upload-image";
import Modal from "./modal";

export function setupNaiveUi(pluginManager: PluginManager): void {
  // 异步加载组件
  pluginManager.component(
    "FormItem",
    async () => (await import("naive-ui/lib/form")).NFormItem
  );
  // eslint-disable-next-line vue/multi-word-component-names
  pluginManager.component(
    "Tabs",
    async () => (await import("naive-ui/lib/tabs")).NTabs
  );

  pluginManager.component("TabPane", NTabPane);
  // eslint-disable-next-line vue/multi-word-component-names
  pluginManager.component(
    "Collapse",
    async () => (await import("naive-ui/lib/collapse")).NCollapse
  );
  pluginManager.component(
    "CollapseItem",
    async () => (await import("naive-ui/lib/collapse")).NCollapseItem
  );

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
    Tabs,
    TabPane,
    Collapse,
    CollapseItem,
    UploadFile,
    UploadImage,
    Modal
  ];

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });

  // 设置分组显示
  pluginManager.setSchemaGroup([
    {
      title: "输入",
      list: [
        "form",
        "input",
        "number",
        "select",
        "checkbox",
        "radio",
        "date",
        "slider",
        "upload-file",
        "upload-image",
        "cascader",
        "switch",
        "button",
        "color-picker",
      ],
    },
    {
      title: "布局",
      list: [
        "card",
        "row",
        // 'tabs'
      ],
    },
  ]);
}

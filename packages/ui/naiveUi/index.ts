// 注册naive-ui
import { pluginManager } from "epic-designer";
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
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";
import DatePicker from "./date-picker";
import { NTabPane } from "naive-ui";
import UploadFile from "./upload-file";
import UploadImage from "./upload-image";
import Modal from "./modal";

export function setupNaiveUi(): void {
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
    UploadFile,
    UploadImage,
    Button,
    Card,
    Row,
    Col,
    Collapse,
    CollapseItem,
    Modal,
  ];

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });

  // ui初始化完成。
  pluginManager.setInitialized(true);
}

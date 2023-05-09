// 注册naive-ui
import { PluginManager } from "../utils/pluginManager";
import Input from "./NaiveUi/input";
import InputNumber from "./NaiveUi/inputNumber";
import Form from "./NaiveUi/form";
import FormItem from "./NaiveUi/formItem";
import Button from "./NaiveUi/button";
import Card from "./NaiveUi/card";
import Row from "./NaiveUi/row";
import Col from "./NaiveUi/col";
import Select from "./NaiveUi/select";
import Radio from "./NaiveUi/radio";
import Checkbox from "./NaiveUi/checkbox";
import Slider from "./NaiveUi/slider";
import ColorPicker from "./NaiveUi/colorPicker";
import Switch from "./NaiveUi/switch";
import Cascader from "./NaiveUi/cascader";
import Tabs from "./NaiveUi/tabs";
import TabPane from "./NaiveUi/tabPane";
import Collapse from "./NaiveUi/collapse";
import CollapseItem from "./NaiveUi/collapseItem";
import DatePicker from "./NaiveUi/datePicker";

// 组件样式调整
import "./NaiveUi/src/index.less";
export function useNaiveUi(pluginManager: PluginManager) {
  // 异步加载组件
  // eslint-disable-next-line vue/multi-word-component-names
  pluginManager.component(
    "Modal",
    async () => (await import("naive-ui/lib/modal")).NModal
  );
  pluginManager.component(
    "FormItem",
    async () => (await import("naive-ui/lib/form")).NFormItem
  );
  // eslint-disable-next-line vue/multi-word-component-names
  pluginManager.component(
    "Tabs",
    async () => (await import("naive-ui/lib/tabs")).NTabs
  );
  pluginManager.component(
    "TabPane",
    async () => (await import("naive-ui/lib/tabs")).NTabPane
  );
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
  ];

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });

  // 设置分组显示
  pluginManager.setSchemaGroup([
    {
      title: "输入组件",
      list: [
        "form",
        "input",
        "number",
        "select",
        "checkbox",
        "radio",
        "date",
        "slider",
        "cascader",
        "switch",
        "button",
        "color-picker",
      ],
    },
    {
      title: "布局组件",
      list: [
        "card",
        "row",
        // "tabs"
      ],
    },
  ]);
}

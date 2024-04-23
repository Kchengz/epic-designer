// 注册ant-design-vue ui
import { pluginManager as pManager, type PluginManager } from "epic-designer";
import dayjs from "dayjs";

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

/**
 * 设置 Day.js 的日期语言环境
 * @param {string} locale - 日期语言环境，例如 'zh-cn', 'en', 'fr-fr' 等
 */
export function setDateLocale(locale = "zh-cn") {
  // 设置 Day.js 的日期语言环境
  dayjs.locale(locale);

  // 根据不同的 locale 参数导入对应的 Day.js 语言环境
  switch (locale.toLowerCase()) {
    case "az-az":
      import("dayjs/locale/az");
      break;
    case "bg-bg":
      import("dayjs/locale/bg");
      break;
    case "bn-bd":
      import("dayjs/locale/bn-bd");
      break;
    case "by-by":
      import("dayjs/locale/be");
      break;
    case "ca-es":
      import("dayjs/locale/ca");
      break;
    case "cs-cz":
      import("dayjs/locale/cs");
      break;
    case "da-dk":
      import("dayjs/locale/da");
      break;
    case "de-de":
      import("dayjs/locale/de");
      break;
    case "el-gr":
      import("dayjs/locale/el");
      break;
    case "en-gb":
      import("dayjs/locale/en-gb");
      break;
    case "en-us":
      import("dayjs/locale/en");
      break;
    case "es-es":
      import("dayjs/locale/es");
      break;
    case "et-ee":
      import("dayjs/locale/et");
      break;
    case "fa-ir":
      import("dayjs/locale/fa");
      break;
    case "fi-fi":
      import("dayjs/locale/fi");
      break;
      // case "fr-be":
      //   import(`dayjs/locale/fr-be`);
      break;
    case "fr-ca":
      import("dayjs/locale/fr-ca");
      break;
    case "fr-fr":
      import("dayjs/locale/fr");
      break;
    case "ga-ie":
      import("dayjs/locale/ga");
      break;
    case "gl-es":
      import("dayjs/locale/gl");
      break;
    case "he-il":
      import("dayjs/locale/he");
      break;
    case "hi-in":
      import("dayjs/locale/hi");
      break;
    case "hr-hr":
      import("dayjs/locale/hr");
      break;
    case "hu-hu":
      import("dayjs/locale/hu");
      break;
    case "hy-am":
      import("dayjs/locale/hy-am");
      break;
    case "id-id":
      import("dayjs/locale/id");
      break;
    case "is-is":
      import("dayjs/locale/is");
      break;
    case "it-it":
      import("dayjs/locale/it");
      break;
    case "ja-jp":
      import("dayjs/locale/ja");
      break;
    case "ka-ge":
      import("dayjs/locale/ka");
      break;
    case "kk-kz":
      import("dayjs/locale/kk");
      break;
    case "km-kh":
      import("dayjs/locale/km");
      break;
    case "kmr-iq":
      import("dayjs/locale/ku");
      break;
    case "kn-in":
      import("dayjs/locale/kn");
      break;
    case "ko-kr":
      import("dayjs/locale/ko");
      break;
    case "ku-iq":
      import("dayjs/locale/ku");
      break;
    case "lt-lt":
      import("dayjs/locale/lt");
      break;
    case "lv-lv":
      import("dayjs/locale/lv");
      break;
    case "mk-mk":
      import("dayjs/locale/mk");
      break;
    case "ml-in":
      import("dayjs/locale/ml");
      break;
    case "mn-mn":
      import("dayjs/locale/mn");
      break;
    case "ms-my":
      import("dayjs/locale/ms-my");
      break;
    case "nb-no":
      import("dayjs/locale/nb");
      break;
    case "ne-np":
      import("dayjs/locale/ne");
      break;
    case "nl-be":
      import("dayjs/locale/nl-be");
      break;
    case "nl-nl":
      import("dayjs/locale/nl");
      break;
    case "pl-pl":
      import("dayjs/locale/pl");
      break;
    case "pt-br":
      import("dayjs/locale/pt-br");
      break;
    case "pt-pt":
      import("dayjs/locale/pt");
      break;
    case "ro-ro":
      import("dayjs/locale/ro");
      break;
    case "ru-ru":
      import("dayjs/locale/ru");
      break;
    case "sk-sk":
      import("dayjs/locale/sk");
      break;
    case "sl-si":
      import("dayjs/locale/sl");
      break;
    case "sr-rs":
      import("dayjs/locale/sr");
      break;
    case "sv-se":
      import("dayjs/locale/sv");
      break;
    case "ta-in":
      import("dayjs/locale/ta");
      break;
    case "th-th":
      import("dayjs/locale/th");
      break;
    case "tr-tr":
      import("dayjs/locale/tr");
      break;
    case "uk-ua":
      import("dayjs/locale/uk");
      break;
    case "ur-pk":
      import("dayjs/locale/ur");
      break;
    case "vi-vn":
      import("dayjs/locale/vi");
      break;
    case "zh-cn":
      import("dayjs/locale/zh-cn");
      break;
    case "zh-hk":
      import("dayjs/locale/zh-hk");
      break;
    case "zh-tw":
      import("dayjs/locale/zh-tw");
      break;
    default:
      // Default action if locale is not found
      break;
  }
}

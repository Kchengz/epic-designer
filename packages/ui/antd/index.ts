import type { PluginManager } from '@epic-designer/utils';

// 注册ant-design-vue ui
import { pluginManager as pManager } from '@epic-designer/utils';
import { version } from 'ant-design-vue';

import Button from './button';
import Card from './card';
import Cascader from './cascader';
import Checkbox from './checkbox';
import Col from './col';
import colorPicker from './color-picker';
import DatePicker from './date-picker';
import Form from './form';
import FormItem from './form-item';
import Input from './input';
import InputNumber from './input-number';
import InputPassword from './input-password';
import Modal from './modal';
import Radio from './radio';
import Row from './row';
import Select from './select';
import Slider from './slider';
import Switch from './switch';
import Textarea from './textarea';
import TimePicker from './time-picker';
import UploadFile from './upload-file';
import UploadImage from './upload-image';

export function setupAntd(pluginManager: PluginManager = pManager): void {
  // 版本兼容处理 start
  const versionArray = version.split('.');
  // 获取版本号第一个数字
  const firstNumber = Number.parseInt(versionArray[0]);

  // 创建一个 style 标签
  const style = document.createElement('style');

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
    style.append(document.createTextNode(css));
    // 将 style 标签插入到页面的 head 中
    document.head.append(style);
    // 版本兼容处理 end
  } else {
    // v3版本
    Form.config.attribute = Form.config.attribute?.filter(
      (item) => item.label !== '禁用',
    );
  }

  // 加载组件
  pluginManager.component(
    'Collapse',
    async () => (await import('ant-design-vue')).Collapse,
  );
  pluginManager.component(
    'CollapseItem',
    async () => (await import('ant-design-vue')).CollapsePanel,
  );
  pluginManager.component(
    'Tabs',
    async () => (await import('ant-design-vue')).Tabs,
  );
  pluginManager.component(
    'TabPane',
    async () => (await import('ant-design-vue')).TabPane,
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

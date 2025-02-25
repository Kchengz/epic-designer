import type { PluginManager } from 'epic-designer';

import {
  ElCollapse,
  ElCollapseItem,
  ElFormItem,
  ElTabPane,
  ElTabs,
} from 'element-plus';
// 注册element-plus ui
import { pluginManager as pManager } from 'epic-designer';

import Button from './button';
import Card from './card';
import Cascader from './cascader';
import Checkbox from './checkbox';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import ColorPicker from './color-picker';
import DatePicker from './date-picker';
import Form from './form';
import FormItem from './formItem';
import Input from './input';
import InputNumber from './input-number';
import Modal from './modal';
import Radio from './radio';
import Row from './row';
import Select from './select';
import Slider from './slider';
import Switch from './switch';
import Textarea from './textarea';
import UploadFile from './upload-file';
import UploadImage from './upload-image';

export function setupElementPlus(
  pluginManager: PluginManager = pManager,
): void {
  pluginManager.component('FormItem', ElFormItem);
  pluginManager.component('Tabs', ElTabs);
  pluginManager.component('TabPane', ElTabPane);
  pluginManager.component('Collapse', ElCollapse);
  pluginManager.component('CollapseItem', ElCollapseItem);

  const componentArray = [
    Form,
    FormItem,
    Input,
    Textarea,
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
    pluginManager.addBaseComponentTypes(item.defaultSchema.type);
  });

  // ui初始化完成。
  pluginManager.setInitialized(true);
}

/**
 * 设置element GlobalConfig
 */
export function provideGlobalConfig(args: any) {
  import('element-plus').then(({ provideGlobalConfig }) => {
    provideGlobalConfig(args);
  });
}

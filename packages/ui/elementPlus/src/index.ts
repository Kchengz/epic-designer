import type { PluginManager } from '@epic-designer/manager';

import { watchEffect } from 'vue';

// 注册element-plus ui
import { pluginManager as pManager } from '@epic-designer/manager';
import {
  ElCollapse,
  ElCollapseItem,
  ElFormItem,
  ElMessage,
  ElTabPane,
  ElTabs,
} from 'element-plus';

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
  pluginManager.component.add('FormItem', ElFormItem);
  pluginManager.component.add('Tabs', ElTabs);
  pluginManager.component.add('TabPane', ElTabPane);
  pluginManager.component.add('Collapse', ElCollapse);
  pluginManager.component.add('CollapseItem', ElCollapseItem);

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

  // 更新默认上传地址
  watchEffect(() => {
    UploadImage.defaultSchema.componentProps.action =
      pluginManager.global.uploadImage;
    UploadFile.defaultSchema.componentProps.action =
      pluginManager.global.uploadFile;
  });

  componentArray.forEach((item) => {
    pluginManager.component.register(item);
    pluginManager.component.addBaseComponentType(item.defaultSchema.type);
  });

  // 注册全局提示函数
  pluginManager.global.$message = {
    error: ElMessage.error,
    info: ElMessage.info,
    success: ElMessage.success,
    warning: ElMessage.warning,
  };

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

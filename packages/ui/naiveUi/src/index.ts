import type { PluginManager } from '@epic-designer/manager';

import { watchEffect } from 'vue';

// 注册naive-ui
import { pluginManager as pManager } from '@epic-designer/manager';
import { createDiscreteApi, NTabPane } from 'naive-ui';

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
import FormItem from './form-item';
import Input from './input';
import InputNumber from './input-number';
import Modal from './modal';
import Radio from './radio';
import Row from './row';
import Select from './select';
import Slider from './slider';
import Switch from './switch';
import UploadFile from './upload-file';
import UploadImage from './upload-image';

// 引入样式
import './index.less';

export function setupNaiveUi(pluginManager: PluginManager = pManager): void {
  // 异步加载组件
  pluginManager.component.add(
    'FormItem',
    async () => (await import('naive-ui')).NFormItem,
  );

  pluginManager.component.add(
    'Tabs',
    async () => (await import('naive-ui')).NTabs,
  );

  pluginManager.component.add('TabPane', NTabPane);

  pluginManager.component.add(
    'Collapse',
    async () => (await import('naive-ui')).NCollapse,
  );
  pluginManager.component.add(
    'CollapseItem',
    async () => (await import('naive-ui')).NCollapseItem,
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
  const { message } = createDiscreteApi(['message']);
  pluginManager.global.$message = {
    error: message.error,
    info: message.info,
    success: message.success,
    warning: message.warning,
  };

  // ui初始化完成。
  pluginManager.setInitialized(true);
}

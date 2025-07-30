import type { PluginManager } from '@epic-designer/manager';

// 注册naive-ui
import { pluginManager as pManager } from '@epic-designer/manager';
import { NTabPane } from 'naive-ui';

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

export function setupNaiveUi(pluginManager: PluginManager = pManager): void {
  // 异步加载组件
  pluginManager.component(
    'FormItem',
    async () => (await import('naive-ui')).NFormItem,
  );

  pluginManager.component('Tabs', async () => (await import('naive-ui')).NTabs);

  pluginManager.component('TabPane', NTabPane);

  pluginManager.component(
    'Collapse',
    async () => (await import('naive-ui')).NCollapse,
  );
  pluginManager.component(
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

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
    pluginManager.addBaseComponentTypes(item.defaultSchema.type);
  });

  // ui初始化完成。
  pluginManager.setInitialized(true);
}

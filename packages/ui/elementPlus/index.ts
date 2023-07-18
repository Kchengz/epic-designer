// 注册element-plus ui
import { type PluginManager } from '../../utils/pluginManager'
import Input from './input'
import InputNumber from './input-number'
import Form from './form'
import FormItem from './formItem'
import Button from './button'
import Card from './card'
import Row from './row'
import Col from './col'
import Select from './select'
import Radio from './radio'
import Checkbox from './checkbox'
import Slider from './slider'
import ColorPicker from './color-picker'
import Switch from './switch'
import Cascader from './cascader'
import Tabs from './tabs'
import TabPane from './tab-pane'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import DatePicker from './date-picker'
import UploadFile from './upload-file'
import UploadImage from './upload-image'
import Modal from './modal'
import {
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElCollapse,
  ElCollapseItem
} from 'element-plus'

export function setupElementPlus (pluginManager: PluginManager): void {
  // 异步加载组件

  pluginManager.component('FormItem', ElFormItem)
  pluginManager.component('Tabs', ElTabs)
  pluginManager.component('TabPane', ElTabPane)
  pluginManager.component('Collapse', ElCollapse)
  pluginManager.component('CollapseItem', ElCollapseItem)

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
    Modal,
    UploadImage
  ]

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item)
  })

  // 设置分组显示
  pluginManager.setSchemaGroup([
    {
      title: '输入',
      list: [
        'form',
        'input',
        // "textarea",
        'number',
        // "password",
        'select',
        'checkbox',
        'radio',
        'date',
        // "time",
        // "rate",
        'slider',
        'upload-file',
        'upload-image',
        'cascader',
        // "treeSelect",
        'switch',
        'button',
        'color-picker'
      ]
    },
    {
      title: '布局',
      list: ['card', 'row', 'tabs']
    }
  ])
}

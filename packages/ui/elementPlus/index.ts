// 注册element-plus ui
import { type PluginManager } from '../../utils/pluginManager'
import Input from './config/input'
import InputNumber from './config/input-number'
import Form from './config/form'
import FormItem from './config/formItem'
import Button from './config/button'
import Card from './config/card'
import Row from './config/row'
import Col from './config/col'
import Select from './config/select'
import Radio from './config/radio'
import Checkbox from './config/checkbox'
import Slider from './config/slider'
import ColorPicker from './config/color-picker'
import Switch from './config/switch'
import Cascader from './config/cascader'
import Tabs from './config/tabs'
import TabPane from './config/tabPane'
import Collapse from './config/collapse'
import CollapseItem from './config/collapse-item'
import DatePicker from './config/datePicker'

import {
  ElDialog,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElCollapse,
  ElCollapseItem
} from 'element-plus'

// 组件样式调整
import './src/index.less'
export function setupElementPlus (pluginManager: PluginManager): void {
  // 异步加载组件

  pluginManager.component('Modal', ElDialog)
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
    CollapseItem
  ]

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item)
  })

  // 设置分组显示
  pluginManager.setSchemaGroup([
    {
      title: '输入组件',
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
        // "upload-file",
        // "upload-image",
        'cascader',
        // "treeSelect",
        'switch',
        'button',
        'color-picker'
      ]
    },
    {
      title: '布局组件',
      list: ['card', 'row', 'tabs']
    }
  ])
}

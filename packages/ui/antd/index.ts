// 注册ant-design-vue ui
import { type PluginManager } from '../../utils/pluginManager'
import Input from './config/input'
import InputNumber from './config/inputNumber'
import InputPassword from './config/inputPassword'
import Radio from './config/radio'
import Checkbox from './config/checkbox'
import Select from './config/select'
import TimePicker from './config/timePicker'
import DatePicker from './config/datePicker'
import Cascader from './config/cascader'
import Switch from './config/switch'
import UploadImage from './config/uploadImage'
import UploadFile from './config/uploadFile'
import Card from './config/card'
import Row from './config/row'
import Col from './config/col'
import Tabs from './config/tabs'
import TabPane from './config/tabPane'
import Form from './config/form'
import FormItem from './config/formItem'
import Button from './config/button'
import colorPicker from './config/color-picker'

// 兼容性样式
import './src/index.less'

export function setupAntd (pluginManager: PluginManager): void {
  // 异步加载组件
  pluginManager.component('Modal', async () => await import('ant-design-vue/lib/modal'))
  pluginManager.component(
    'Collapse',
    async () => await import('ant-design-vue/lib/collapse')
  )
  pluginManager.component(
    'CollapseItem',
    async () => await import('ant-design-vue/lib/collapse/CollapsePanel')
  )
  pluginManager.component('Tabs', async () => await import('ant-design-vue/lib/tabs'))
  pluginManager.component(
    'TabPane',
    async () => (await import('ant-design-vue/lib/tabs')).TabPane
  )

  const componentArray = [
    Form,
    FormItem,
    Input,
    InputNumber,
    InputPassword,
    Radio,
    Checkbox,
    Select,
    TimePicker,
    DatePicker,
    Cascader,
    Switch,
    UploadImage,
    UploadFile,
    Card,
    Row,
    Col,
    Tabs,
    TabPane,
    Button,
    colorPicker
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
        'number',
        'password',
        'select',
        'checkbox',
        'radio',
        'date',
        'time',
        'upload-file',
        'upload-image',
        'cascader',
        'switch',
        'button',
        'color-picker'
      ]
    },
    {
      title: '布局组件',
      list: [
        'card',
        'row'
        // "tabs"
      ]
    }
  ])
}

// 注册naive-ui
import { type PluginManager } from '../../utils/pluginManager'
import Input from './config/input'
import InputNumber from './config/inputNumber'
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
import ColorPicker from './config/colorPicker'
import Switch from './config/switch'
import Cascader from './config/cascader'
import Tabs from './config/tabs'
import TabPane from './config/tabPane'
import Collapse from './config/collapse'
import CollapseItem from './config/collapseItem'
import DatePicker from './config/datePicker'
import { NTabPane } from 'naive-ui'
import UploadFile from './config/uploadFile'
import UploadImage from './config/uploadImage'
// 组件样式调整
import './src/index.less'
export function setupNaiveUi (pluginManager: PluginManager): void {
  // 异步加载组件
  // eslint-disable-next-line vue/multi-word-component-names
  pluginManager.component(
    'Modal',
    async () => (await import('naive-ui/lib/modal')).NModal
  )
  pluginManager.component(
    'FormItem',
    async () => (await import('naive-ui/lib/form')).NFormItem
  )
  // eslint-disable-next-line vue/multi-word-component-names
  pluginManager.component('Tabs', async () => (await import('naive-ui/lib/tabs')).NTabs)

  pluginManager.component('TabPane', NTabPane)
  // eslint-disable-next-line vue/multi-word-component-names
  pluginManager.component(
    'Collapse',
    async () => (await import('naive-ui/lib/collapse')).NCollapse
  )
  pluginManager.component(
    'CollapseItem',
    async () => (await import('naive-ui/lib/collapse')).NCollapseItem
  )

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
    UploadImage
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
        'select',
        'checkbox',
        'radio',
        'date',
        'slider',
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
        // 'tabs'
      ]
    }
  ])
}

import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('ant-design-vue/lib/time-picker'),
  defaultSchema: {
    label: '时间选择器',
    type: 'time',
    icon: 'icon-xiala',
    field: 'time',
    input: true,
    componentProps: {
      valueFormat: 'HH:mm:ss',
      size: 'middle',
      placement: 'bottomLeft',
      placeholder: '请输入'
    }
  },
  config: {
    attribute: [
      {
        label: '字段名',
        type: 'input',
        field: 'field'
      },
      {
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'time',
        field: 'componentProps.defaultValue'
      },
      {
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder'
      },
      {
        label: '尺寸',
        type: 'select',
        defaultValue: 'default',
        componentProps: {
          options: [
            {
              label: 'large',
              value: 'large'
            },
            {
              label: 'middle',
              value: 'middle'
            },
            {
              label: 'small',
              value: 'small'
            }
          ]
        },
        field: 'componentProps.size'
      },
      {
        label: '有边框',
        type: 'switch',
        field: 'componentProps.bordered'
      },
      {
        label: '小时选项间隔',
        type: 'number',
        field: 'componentProps.hourStep',
        componentProps: {
          placeholder:'请输入'
        }
      },
      {
        label: '分钟选项间隔',
        type: 'number',
        field: 'componentProps.minuteStep',
        componentProps: {
          placeholder:'请输入'
        }
      },
      {
        label: '秒选项间隔',
        type: 'number',
        field: 'componentProps.secondStep',
        componentProps: {
          placeholder:'请输入'
        }
      },
      {
        label: '弹出框位置',
        type: 'select',
        componentProps: {
          options: [
            {
              label: 'bottomLeft',
              value: 'bottomLeft'
            },
            {
              label: 'bottomRight',
              value: 'bottomRight'
            },
            {
              label: 'topLeft',
              value: 'topLeft'
            },
            {
              label: 'topRight',
              value: 'topRight'
            }
          ]
        },
        field: 'componentProps.placement'
      },
      {
        label: '可清空',
        type: 'switch',
        field: 'componentProps.allowClear'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      },
      {
        label: '禁用',
        type: 'switch',
        field: 'componentProps.disabled'
      },
      {
        label: '表单校验',
        type: 'ERuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel

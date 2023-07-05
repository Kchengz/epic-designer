import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'

export default {
  component: () => import('./form.vue'),
  defaultSchema: {
    label: '表单',
    type: 'form',
    icon: 'icon-qiapian',
    name: 'default',
    componentProps: {
      labelWidth: 100,
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      },
      hideRequiredMark: false
    },
    children: []
  },
  config: {
    attribute: [
      {
        label: 'name',
        type: 'input',
        field: 'name'
      },
      {
        label: '标签长度',
        type: 'input',
        field: 'componentProps.labelWidth'
      },
      {
        label: '标签位置',
        type: 'select',
        field: 'componentProps.labelPosition',
        componentProps: {
          options: [
            {
              label: 'left',
              value: 'left'
            },
            {
              label: 'right',
              value: 'right'
            },
            {
              label: 'top',
              value: 'top'
            }
          ]
        }
      },
      {
        label: '表单尺寸',
        type: 'select',
        field: 'componentProps.size',
        componentProps: {
          options: [
            {
              label: 'large',
              value: 'large'
            },
            {
              label: 'default',
              value: 'default'
            },
            {
              label: 'small',
              value: 'small'
            }
          ]
        }
      },
      {
        label: 'scrollToError',
        type: 'switch',
        field: 'componentProps.scrollToError'
      },
      {
        label: '行内模式',
        type: 'switch',
        field: 'componentProps.inline'
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
      }
    ]
  }
} as ComponentConfigModel

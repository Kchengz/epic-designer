import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'

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
      hideRequiredMark: false,
      labelPlacement:'left',
      labelAlign: 'right',
      requireMarkPlacement: 'right',
      size: 'medium'
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
        field: 'componentProps.labelPlacement',
        componentProps: {
          options: [
            {
              label: 'left',
              value: 'left'
            },
            {
              label: 'top',
              value: 'top'
            }
          ]
        }
      },
      {
        label: '标签文本对齐方式',
        type: 'select',
        field: 'componentProps.labelAlign',
        componentProps: {
          options: [
            {
              label: 'left',
              value: 'left'
            },
            {
              label: 'right',
              value: 'right'
            }
          ]
        }
      },
      {
        label: '必填星号的位置',
        type: 'select',
        field: 'componentProps.requireMarkPlacement',
        componentProps: {
          options: [
            {
              label: 'left',
              value: 'left'
            },
            {
              label: 'right',
              value: 'right'
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
              label: 'medium',
              value: 'medium'
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

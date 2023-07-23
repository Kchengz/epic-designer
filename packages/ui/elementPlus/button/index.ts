import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('./button'),
  // component: ElButton,
  defaultSchema: {
    label: '按钮',
    type: 'button',
    field: 'input',
    icon: 'icon-write',
    input: false
  },
  config: {
    attribute: [
      {
        label: '标题',
        type: 'input',
        field: 'label'
      },
      {
        label: '类型',
        type: 'select',
        componentProps: {
          placeholder: '请选择',
          clearable: true,
          options: [
            {
              label: 'primary',
              value: 'primary'
            },
            {
              label: 'success',
              value: 'success'
            },
            {
              label: 'info',
              value: 'info'
            },
            {
              label: 'warning',
              value: 'warning'
            },
            {
              label: 'danger',
              value: 'danger'
            }
          ]
        },
        field: 'componentProps.type'
      },
      {
        label: '朴素按钮',
        type: 'switch',
        field: 'componentProps.plain'
      },
      {
        label: '圆角按钮',
        type: 'switch',
        field: 'componentProps.round'
      },
      {
        label: '圆形按钮',
        type: 'switch',
        field: 'componentProps.circle'
      },
      {
        label: '文字按钮',
        type: 'switch',
        field: 'componentProps.text'
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
    ],
    event: [
      {
        type: 'click',
        describe: '点击按钮时'
      }
    ]
  }
} as ComponentConfigModel

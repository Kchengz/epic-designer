import { type ComponentConfigModel } from '../../../utils/pluginManager'
export default {
  component: async () => await import('../src/KButton'),
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
              label: 'warning',
              value: 'warning'
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

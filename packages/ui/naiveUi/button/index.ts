import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('./button'),
  defaultSchema: {
    label: '按钮',
    type: 'button',
    field: 'input',
    icon: 'icon-write',
    input: false,
    componentProps: {
      bordered: true,
      type: 'default',
      size: 'medium'
    }
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
          options: [
            {
              label: 'default',
              value: 'default'
            },
            {
              label: 'tertiary',
              value: 'tertiary'
            },
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
              label: 'error',
              value: 'error'
            }
          ]
        },
        field: 'componentProps.type'
      },
      {
        label: '尺寸',
        type: 'select',
        defaultValue: 'default',
        componentProps: {
          "placeholder": "请选择",
          options: [
            {
              label: 'tiny',
              value: 'tiny'
            },
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
        },
        field: 'componentProps.size'
      },
      {
        label: '是否块级',
        type: 'switch',
        field: 'componentProps.block'
      },
      {
        label: '显示边框',
        type: 'switch',
        field: 'componentProps.bordered'
      },
      {
        label: '虚线框',
        type: 'switch',
        field: 'componentProps.dashed'
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
        label: '按钮颜色',
        type: 'color-picker',
        field: 'componentProps.color'
      },
      {
        label: '是否透明',
        type: 'switch',
        field: 'componentProps.ghost'
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

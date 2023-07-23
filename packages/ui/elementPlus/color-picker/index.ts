import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => (await import('element-plus')).ElColorPicker,
  defaultSchema: {
    label: '颜色选择器',
    type: 'color-picker',
    icon: 'icon-number',
    field: 'color-picker',
    input: true,
    componentProps: {
      style: { width: '100%' },
      size: 'default',
      colorFormat: 'hex'
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
        type: 'color-picker',
        field: 'componentProps.defaultValue'
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
              label: 'default',
              value: 'default'
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
        label: '透明度选择',
        type: 'switch',
        field: 'componentProps.showAlpha'
      },
      {
        label: '格式',
        type: 'select',
        componentProps: {
          options: [
            {
              label: 'hsl',
              value: 'hsl'
            },
            {
              label: 'hsv',
              value: 'hsv'
            },
            {
              label: 'hex',
              value: 'hex'
            },
            {
              label: 'rgb',
              value: 'rgb'
            }
          ]
        },
        field: 'componentProps.colorFormat'
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
    ],
    event: [
      {
        type: 'change',
        describe: '值变化时'
      }
    ],
    action: [
    ]
  }
} as ComponentConfigModel

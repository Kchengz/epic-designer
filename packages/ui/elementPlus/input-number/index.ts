import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'
export default {
  component: async () => (await import('element-plus')).ElInputNumber,
  defaultSchema: {
    label: '数字输入框',
    type: 'number',
    icon: 'icon-number',
    field: 'number',
    input: true,
    componentProps: {
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
        label: '最大值',
        type: 'number',
        field: 'componentProps.max'
      },
      {
        label: '最小值',
        type: 'number',
        field: 'componentProps.min'
      },
      {
        label: '步长',
        type: 'number',
        field: 'componentProps.step'
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
        label: '控制按钮位置',
        type: 'select',
        defaultValue: '',
        componentProps: {
          options: [
            {
              label: 'default',
              value: ''
            },
            {
              label: 'right',
              value: 'right'
            }
          ]
        },
        field: 'componentProps.controlsPosition'
      },
      {
        label: '精度',
        type: 'number',
        field: 'componentProps.precision'
      },
      {
        label: '输入控制为步长的倍数',
        type: 'switch',
        field: 'componentProps.stepStrictly'
      },
      {
        label: '默认值',
        type: 'number',
        field: 'componentProps.defaultValue'
      },
      {
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder'
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
        type: 'KRuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ]
  }
} as ComponentConfigModel

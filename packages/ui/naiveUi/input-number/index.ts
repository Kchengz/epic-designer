import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'
export default {
  component: async () => (await import('naive-ui/lib/input-number')).NInputNumber,
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
        label: '尺寸',
        type: 'select',
        field: 'componentProps.size',
        componentProps: {
          options: [
            {
              label: 'tiny',
              value: 'tiny'
            },
            {
              label: 'small',
              value: 'small'
            },
            {
              label: 'medium',
              value: 'medium'
            },
            {
              label: 'large',
              value: 'large'
            }
          ],
          clearable: true
        }
      },
      {
        label: '控制按钮位置',
        type: 'select',
        field: 'componentProps.buttonPlacement',
        componentProps: {
          options: [
            {
              label: 'both',
              value: 'both'
            },
            {
              label: 'right',
              value: 'right'
            }
          ]
        }
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
        label: '精度',
        type: 'input',
        field: 'componentProps.precision'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      },
      {
        label: '可清空',
        type: 'switch',
        field: 'componentProps.clearable'
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
  },
  bindModel: 'value'
} as ComponentConfigModel

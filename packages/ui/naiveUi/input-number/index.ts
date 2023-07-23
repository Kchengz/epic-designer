import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => (await import('naive-ui/lib/input-number')).NInputNumber,
  defaultSchema: {
    label: '数字输入框',
    type: 'number',
    icon: 'icon-number',
    field: 'number',
    input: true,
    componentProps: {
      placeholder: '请输入',
      size: 'medium',
      buttonPlacement: 'right'
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
          ]
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
        field: 'componentProps.max',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '最小值',
        type: 'number',
        field: 'componentProps.min',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '步长',
        type: 'number',
        field: 'componentProps.step',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '精度',
        type: 'number',
        field: 'componentProps.precision',
        componentProps: {
          placeholder: '请输入'
        }
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
        type: 'ERuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel

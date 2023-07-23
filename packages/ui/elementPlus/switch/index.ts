import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => (await import('element-plus')).ElSwitch,
  defaultSchema: {
    label: '开关',
    type: 'switch',
    icon: 'icon-number',
    field: 'switch',
    input: true,
    componentProps: {
      size: 'default'
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
        type: 'switch',
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
        label: '宽度',
        type: 'number',
        field: 'componentProps.width',
        componentProps: {
          min: 50,
          placeholder: '请输入'
        }
      },
      {
        label: '激活时文本',
        type: 'input',
        field: 'componentProps.activeText',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '未激活时文本',
        type: 'input',
        field: 'componentProps.inactiveText',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '文本点内显示',
        type: 'switch',
        field: 'componentProps.inlinePrompt'
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
        describe: '状态发生变化时'
      }
    ]
  }
} as ComponentConfigModel

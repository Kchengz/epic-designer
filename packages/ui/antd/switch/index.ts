import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('ant-design-vue/lib/switch'),
  defaultSchema: {
    label: '开关',
    type: 'switch',
    icon: 'icon-number',
    field: 'switch',
    input: true,
    componentProps: {
      size:'default'
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
        label: '选中时内容',
        type: 'input',
        field: 'componentProps.checkedChildren',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '非选中时内容',
        type: 'input',
        field: 'componentProps.unCheckedChildren',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '尺寸',
        type: 'select',
        componentProps: {
          options: [
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
    ]
  },
  bindModel: 'checked'
} as ComponentConfigModel

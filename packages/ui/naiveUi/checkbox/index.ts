import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('./checkbox'),
  defaultSchema: {
    label: '复选框',
    type: 'checkbox',
    icon: 'icon-duoxuan1',
    field: 'checkbox',
    input: true,
    componentProps: {
      defaultValue: [],
      options: [
        {
          label: '选项1',
          value: '选项1'
        },
        {
          label: '选项2',
          value: '选项2'
        }
      ],
      size: 'medium'
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
        label: '默认值',
        type: 'checkbox',
        field: 'componentProps.defaultValue'
      },
      {
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: '最大勾选数',
        type: 'number',
        field: 'componentProps.max',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '最小勾选数',
        type: 'number',
        field: 'componentProps.min',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '尺寸',
        type: 'select',
        field: 'componentProps.size',
        componentProps: {
          options:[
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
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "配置选项",
      }
    ],
    event: [
      {
        type: 'change',
        describe: '值变化时'
      }
    ]
  }
} as ComponentConfigModel

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
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      },
      {
        label: '最大选中数',
        type: 'number',
        field: 'componentProps.max',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '最小选中数',
        type: 'number',
        field: 'componentProps.min',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: "按钮模式",
        type: "switch",
        field: "componentProps.radioButton"
      },
      {
        label: '选项文本颜色',
        type: 'color-picker',
        layout: 'horizontal',
        field: 'componentProps.textColor',
        show: ({values})=> {
          return values.componentProps.radioButton
        },
        describe: '按钮模式下生效'
      },
      {
        label: '选项按钮颜色',
        type: 'color-picker',
        layout: 'horizontal',
        field: 'componentProps.fill',
        show: ({values})=> {
          return values.componentProps.radioButton
        },
        describe: '按钮模式下生效'
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
        label: '选项管理',
        type: 'EOptionsEditor',
        layout: 'vertical',
        field: 'componentProps.options',
        describe: '校验规则需要配合表单使用'
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

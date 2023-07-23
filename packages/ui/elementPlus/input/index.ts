import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => (await import('element-plus')).ElInput,
  defaultSchema: {
    label: '输入框',
    type: 'input',
    field: 'input',
    icon: 'icon-write',
    input: true,
    componentProps: {
      defaultValue: '',
      placeholder: '请输入',
      size: 'default',
      type: 'text'
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
        label: '标题',
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
        label: '最大输入长度',
        type: 'number',
        field: 'componentProps.maxlength',
        componentProps: {
          placeholder:'请输入'
        }
      },
      {
        label: '统计字数',
        type: 'switch',
        field: 'componentProps.showWordLimit'
      },
      {
        label: '默认值',
        type: 'input',
        field: 'componentProps.defaultValue'
      },
      {
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder'
      },
      {
        label: '输入类型',
        type: 'select',
        defaultValue: 'text',
        componentProps: {
          options: [
            {
              label: 'text',
              value: 'text'
            },
            {
              label: 'number',
              value: 'number'
            },
            {
              label: 'password',
              value: 'password'
            }
          ]
        },
        field: 'componentProps.type'
      },
      {
        label: '显示密码',
        type: 'switch',
        field: 'componentProps.showPassword',
        show: ({values})=>{
          return values.componentProps.type === 'password'
        }
      },
      {
        label: '可清空',
        type: 'switch',
        field: 'componentProps.clearable'
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
        type: 'input',
        describe: '输入值'
      },
      {
        type: 'change',
        describe: '值修改'
      },
      {
        type: 'focus',
        describe: '获取焦点'
      },
      {
        type: 'blur',
        describe: '失去焦点'
      }
    ],
    action: [
      {
        type: 'focus',
        describe: '使 input 获取焦点'
      },
      {
        type: 'blur',
        describe: '使 input 失去焦点'
      },
      {
        type: 'clear',
        describe: '清除 input 值'
      },
      {
        type: 'select',
        describe: '选中 input 中的文字'
      }
    ]
  }
} as ComponentConfigModel

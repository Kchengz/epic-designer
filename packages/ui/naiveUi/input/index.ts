import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => (await import('naive-ui/lib/input')).NInput,
  defaultSchema: {
    label: '输入框',
    type: 'input',
    field: 'input',
    icon: 'icon-write',
    input: true,
    componentProps: {
      defaultValue: '',
      placeholder: '请输入',
      type: 'text',
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
        label: '标题',
        type: 'input',
        field: 'label'
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
              label: 'textarea',
              value: 'textarea'
            },
            {
              label: 'password',
              value: 'password'
            }
          ]
        },
        field: 'componentProps.type',
        onChange: ({value, values})=> {
          if (value != 'text')
            values.componentProps.pair = false
        }
      },
      {
        label: '最大输入长度',
        type: 'number',
        field: 'componentProps.maxlength',
        componentProps: {
          placeholder: '请输入',
        }
      },
      {
        label: '显示密码的时机',
        type: 'select',
        field: 'componentProps.showPasswordOn',
        componentProps: {
          options: [
            {
              label: 'click',
              value: 'click'
            },
            {
              label: 'mousedown',
              value: 'mousedown'
            }
          ],
          clearable: true
        },
        show: ({values})=>values.componentProps.type==='password'
      },
      {
        label: '行数',
        type: 'number',
        field: 'componentProps.rows',
        show: ({values}) => values.componentProps.type === 'textarea',
      },
      {
        label: '是否输入成对值',
        type: 'switch',
        field: 'componentProps.pair',
        show: ({values})=>values.componentProps.type==='text'
      },
      {
        label: '分割符',
        type: 'input',
        field: 'componentProps.separator',
        show: ({values})=>values.componentProps.type==='text'&&values.componentProps.pair,
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '是否圆角',
        type: 'switch',
        field: 'componentProps.round'
      },
      {
        label: '是否统计字数',
        type: 'switch',
        field: 'componentProps.showCount'
      },
      {
        label: '自适应内容高度',
        type: 'switch',
        field: 'componentProps.autosize',
        show: ({values}) => values.componentProps.type === 'textarea',
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
  },
  bindModel: 'value'
} as ComponentConfigModel

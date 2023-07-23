import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('ant-design-vue/lib/input-number'),
  defaultSchema: {
    label: '数字输入框',
    type: 'number',
    icon: 'icon-number',
    field: 'number',
    input: true,
    componentProps: {
      style: { width: '100%' },
      size: 'middle',
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
        type: 'input',
        field: 'componentProps.defaultValue',
        componentProps: {
          placeholder: '请输入',
          size: 'middle'
        }
      },
      {
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder'
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
              label: 'middle',
              value: 'middle'
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
        label: '键盘快捷行为',
        type: 'switch',
        field: 'componentProps.keyboard'
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
        label: '精度',
        type: 'number',
        field: 'componentProps.precision',
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
        label: '字符模式',
        type: 'switch',
        field: 'componentProps.stringMode'
      },
      {
        label: '有边框',
        type: 'switch',
        field: 'componentProps.bordered'
      },
      {
        label: '可清空',
        type: 'switch',
        field: 'componentProps.allowClear'
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
        type: 'pressEnter',
        describe: '按下回车的回调'
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
        type: 'select',
        describe: '选中 input 中的文字'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel

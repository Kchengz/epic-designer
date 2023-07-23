import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => (await import('naive-ui/lib/date-picker')).NDatePicker,
  defaultSchema: {
    label: '日期选择器',
    type: 'date',
    icon: 'icon-xiala',
    field: 'date',
    input: true,
    componentProps: {
      type: 'date',
      placeholder: '请选择',
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
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'date',
        field: 'componentProps.defaultValue'
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
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder'
      },
      {
        label: '格式',
        type: 'input',
        field: 'componentProps.format',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '显示类型',
        type: 'select',
        field: 'componentProps.type',
        componentProps: {
          options: [
            {
              label: '选择日期',
              value: 'date'
            },
            {
              label: '日期时间',
              value: 'datetime'
            },
            {
              label: '日期范围',
              value: 'daterange'
            },
            {
              label: '日期时间范围',
              value: 'datetimerange'
            },
            {
              label: '月份',
              value: 'month'
            },
            {
              label: '月份范围',
              value: 'monthrange'
            },
            {
              label: '年份',
              value: 'year'
            },
            {
              label: '季度',
              value: 'quarter'
            }
          ]
        }
      },
      {
        label: '分割符',
        type: 'input',
        field: 'componentProps.separator',
        componentProps: {
          placeholder: '请输入',
          clearable: true
        },
        show: ({values})=>['daterange','datetimerange','monthrange'].includes(values.componentProps.type)
      },
      {
        label: 'start框占位符',
        type: 'input',
        field: 'componentProps.startPlaceholder',
        componentProps: {
          placeholder: '请输入',
          clearable: true
        },
        show: ({values})=>['daterange','datetimerange','monthrange'].includes(values.componentProps.type)
      },
      {
        label: 'end框占位符',
        type: 'input',
        field: 'componentProps.endPlaceholder',
        componentProps: {
          placeholder: '请输入',
          clearable: true
        },
        show: ({values})=>['daterange','datetimerange','monthrange'].includes(values.componentProps.type)
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
        type: 'change',
        describe: '值变化时'
      }
    ]
  },
  bindModel: 'formatted-value'
} as ComponentConfigModel

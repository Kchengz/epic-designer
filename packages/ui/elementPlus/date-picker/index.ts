import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'
export default {
  component: async () => await import('./datePicker'),
  defaultSchema: {
    label: '日期选择器',
    type: 'date',
    icon: 'icon-xiala',
    field: 'date',
    input: true,
    componentProps: {
      type: 'date',
      placeholder: '请选择'
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
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder'
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
              label: '周',
              value: 'week'
            },
            {
              label: '月份',
              value: 'month'
            },
            {
              label: '年份',
              value: 'year'
            },
            {
              label: '多个日期',
              value: 'dates'
            }
          ]
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
        type: 'KRuleEditor',
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
  }
} as ComponentConfigModel

import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('./datePicker'),
  defaultSchema: {
    label: '日期选择器',
    type: 'date',
    icon: 'icon-xiala',
    field: 'date',
    input: true,
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
      type: 'date',
      size: 'middle',
      placement: 'bottomLeft',
      bordered: true,
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
        label: '有边框',
        type: 'switch',
        field: 'componentProps.bordered'
      },
      {
        label: '弹出框位置',
        type: 'select',
        componentProps: {
          options: [
            {
              label: 'bottomLeft',
              value: 'bottomLeft'
            },
            {
              label: 'bottomRight',
              value: 'bottomRight'
            },
            {
              label: 'topLeft',
              value: 'topLeft'
            },
            {
              label: 'topRight',
              value: 'topRight'
            }
          ]
        },
        field: 'componentProps.placement'
      },
      {
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder',
        show: ({values})=>values.componentProps.type !== 'daterange'
      },
      {
        label: '开始时间占位符',
        type: 'input',
        field: 'componentProps.placeholder.0',
        show: ({values})=>values.componentProps.type === 'daterange'
      },
      {
        label: '开始时间占位符',
        type: 'input',
        field: 'componentProps.placeholder.1',
        show: ({values})=>values.componentProps.type === 'daterange'
      },
      {
        label: '格式',
        type: 'input',
        field: 'componentProps.valueFormat'
      },
      {
        label: '显示类型',
        type: 'select',
        field: 'componentProps.type',
        componentProps: {
          options: [
            {
              label: '日期',
              value: 'date'
            },
            {
              label: '月份',
              value: 'month'
            },
            {
              label: '日期范围',
              value: 'daterange'
            }
          ]
        },
        onChange: ({value, values})=> {
          if (value === 'daterange') {
            values.componentProps.placeholder = ['开始日期', '结束日期'];
          } else {
            values.componentProps.placeholder = '请输入';
          }
        }
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
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel

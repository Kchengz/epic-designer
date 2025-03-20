import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'formatted-value',
  component: async () => (await import('naive-ui/lib/date-picker')).NDatePicker,
  config: {
    attribute: [
      {
        field: 'field',
        label: '字段名',
        type: 'input',
      },
      {
        field: 'label',
        label: '标题',
        type: 'input',
      },
      {
        field: 'componentProps.defaultValue',
        label: '默认值',
        type: 'date',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'medium',
            },
            {
              label: '小型',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        field: 'componentProps.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        componentProps: {
          options: [
            {
              label: '日期',
              value: 'date',
            },
            {
              label: '日期时间',
              value: 'datetime',
            },
            {
              label: '日期范围',
              value: 'daterange',
            },
            {
              label: '时间范围',
              value: 'datetimerange',
            },
            {
              label: '月份',
              value: 'month',
            },
            {
              label: '月份范围',
              value: 'monthrange',
            },
            {
              label: '年份',
              value: 'year',
            },

            {
              label: '季度',
              value: 'quarter',
            },
            {
              label: '周',
              value: 'week',
            },
          ],
        },
        field: 'componentProps.type',
        label: '日期类型',
        onChange({ value, values }) {
          values.componentProps.defaultValue = null;
          if (['date', 'daterange', 'dates'].includes(value)) {
            values.componentProps.format = 'yyyy-MM-dd';
            values.componentProps.valueFormat = 'yyyy-MM-dd';
          } else if (['week'].includes(value)) {
            values.componentProps.format = null;
            values.componentProps.valueFormat = 'yyyy-MM-dd';
          } else if (['quarter'].includes(value)) {
            values.componentProps.format = null;
            values.componentProps.valueFormat = 'yyyy-MM-dd';
          } else if (['month', 'monthrange'].includes(value)) {
            values.componentProps.format = 'yyyy-MM';
            values.componentProps.valueFormat = 'yyyy-MM';
          } else if (['datetime', 'datetimerange'].includes(value)) {
            values.componentProps.format = 'yyyy-MM-dd HH:mm:ss';
            values.componentProps.valueFormat = 'yyyy-MM-dd HH:mm:ss';
          } else if (['year'].includes(value)) {
            values.componentProps.format = 'yyyy';
            values.componentProps.valueFormat = 'yyyy';
          }
        },
        type: 'select',
      },
      {
        field: 'componentProps.format',
        label: '显示格式',
        type: 'input',
      },
      {
        field: 'componentProps.valueFormat',
        label: '数据格式',
        type: 'input',
      },
      {
        componentProps: {
          clearable: true,
          placeholder: '请输入',
        },
        field: 'componentProps.separator',
        label: '分割符',
        show: ({ values }) =>
          ['daterange', 'datetimerange', 'monthrange'].includes(
            values.componentProps.type,
          ),
        type: 'input',
      },
      {
        componentProps: {
          clearable: true,
          placeholder: '请输入',
        },
        field: 'componentProps.startPlaceholder',
        label: 'start框占位符',
        show: ({ values }) =>
          ['daterange', 'datetimerange', 'monthrange'].includes(
            values.componentProps.type,
          ),
        type: 'input',
      },
      {
        componentProps: {
          clearable: true,
          placeholder: '请输入',
        },
        field: 'componentProps.endPlaceholder',
        label: 'end框占位符',
        show: ({ values }) =>
          ['daterange', 'datetimerange', 'monthrange'].includes(
            values.componentProps.type,
          ),
        type: 'input',
      },
      {
        field: 'componentProps.clearable',
        label: '可清空',
        type: 'switch',
      },
      {
        field: 'componentProps.disabled',
        label: '禁用',
        type: 'switch',
      },
      {
        field: 'componentProps.hidden',
        label: '隐藏',
        type: 'switch',
      },
      {
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        description: '值变化时',
        type: 'change',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
      format: 'yyyy-MM-dd',
      placeholder: '请选择',
      type: 'date',
      valueFormat: 'yyyy-MM-dd',
    },
    field: 'date',
    input: true,
    label: '日期选择器',
    type: 'date',
  },
  groupName: '表单',
  icon: 'icon--epic--calendar-month-outline-rounded',
  sort: 910,
} as ComponentConfigModel;

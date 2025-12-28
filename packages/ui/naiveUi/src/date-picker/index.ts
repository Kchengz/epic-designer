import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'formatted-value',
  component: async () => (await import('naive-ui')).NDatePicker,
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
        field: 'props.defaultValue',
        label: '默认值',
        type: 'date',
      },
      {
        props: {
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
        field: 'props.size',
        label: '尺寸',
        type: 'select',
      },
      {
        field: 'props.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        props: {
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
        field: 'props.type',
        label: '日期类型',
        onChange({ value, values }) {
          values.props.defaultValue = null;
          if (['date', 'daterange', 'dates'].includes(value)) {
            values.props.format = 'yyyy-MM-dd';
            values.props.valueFormat = 'yyyy-MM-dd';
          } else if (['week'].includes(value)) {
            values.props.format = null;
            values.props.valueFormat = 'yyyy-MM-dd';
          } else if (['quarter'].includes(value)) {
            values.props.format = null;
            values.props.valueFormat = 'yyyy-MM-dd';
          } else if (['month', 'monthrange'].includes(value)) {
            values.props.format = 'yyyy-MM';
            values.props.valueFormat = 'yyyy-MM';
          } else if (['datetime', 'datetimerange'].includes(value)) {
            values.props.format = 'yyyy-MM-dd HH:mm:ss';
            values.props.valueFormat = 'yyyy-MM-dd HH:mm:ss';
          } else if (['year'].includes(value)) {
            values.props.format = 'yyyy';
            values.props.valueFormat = 'yyyy';
          }
        },
        type: 'select',
      },
      {
        field: 'props.format',
        label: '显示格式',
        type: 'input',
      },
      {
        field: 'props.valueFormat',
        label: '数据格式',
        type: 'input',
      },
      {
        props: {
          clearable: true,
          placeholder: '请输入',
        },
        field: 'props.separator',
        label: '分割符',
        show: ({ values }) =>
          ['daterange', 'datetimerange', 'monthrange'].includes(
            values.props.type,
          ),
        type: 'input',
      },
      {
        props: {
          clearable: true,
          placeholder: '请输入',
        },
        field: 'props.startPlaceholder',
        label: 'start框占位符',
        show: ({ values }) =>
          ['daterange', 'datetimerange', 'monthrange'].includes(
            values.props.type,
          ),
        type: 'input',
      },
      {
        props: {
          clearable: true,
          placeholder: '请输入',
        },
        field: 'props.endPlaceholder',
        label: 'end框占位符',
        show: ({ values }) =>
          ['daterange', 'datetimerange', 'monthrange'].includes(
            values.props.type,
          ),
        type: 'input',
      },
      {
        field: 'props.clearable',
        label: '可清空',
        type: 'switch',
      },
      {
        field: 'props.disabled',
        label: '禁用',
        type: 'switch',
      },
      {
        field: 'props.hidden',
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
    props: {
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

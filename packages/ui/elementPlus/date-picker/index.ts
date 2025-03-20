import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: async () => (await import('element-plus')).ElDatePicker,
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
          options: [
            {
              label: '日期',
              value: 'date',
            },
            {
              label: '周',
              value: 'week',
            },
            {
              label: '月份',
              value: 'month',
            },
            {
              label: '年份',
              value: 'year',
            },
            {
              label: '时间',
              value: 'datetime',
            },
            {
              label: '时间范围',
              value: 'datetimerange',
            },
            {
              label: '日期范围',
              value: 'daterange',
            },
            {
              label: '月份范围',
              value: 'monthrange',
            },
            {
              label: '多个日期',
              value: 'dates',
            },
          ],
        },
        field: 'componentProps.type',
        label: '日期类型',
        onChange({ value, values }) {
          values.componentProps.defaultValue = null;
          if (['date', 'daterange', 'dates'].includes(value)) {
            values.componentProps.format = 'YYYY-MM-DD';
            values.componentProps.valueFormat = 'YYYY-MM-DD';
          } else if (['week'].includes(value)) {
            values.componentProps.format = 'ww [周]';
            values.componentProps.valueFormat = 'YYYY-MM-DD';
          } else if (['month', 'monthrange'].includes(value)) {
            values.componentProps.format = 'YYYY-MM';
            values.componentProps.valueFormat = 'YYYY-MM';
          } else if (['datetime', 'datetimerange'].includes(value)) {
            values.componentProps.format = 'YYYY-MM-DD HH:mm:ss';
            values.componentProps.valueFormat = 'YYYY-MM-DD HH:mm:ss';
          } else if (['year'].includes(value)) {
            values.componentProps.format = 'YYYY';
            values.componentProps.valueFormat = 'YYYY';
          }
        },
        type: 'select',
      },
      {
        field: 'componentProps.startPlaceholder',
        label: '开始占位符',
        show({ values }) {
          return ['daterange', 'datetimerange', 'monthrange'].includes(
            values.componentProps.type,
          );
        },
        type: 'input',
      },
      {
        field: 'componentProps.endPlaceholder',
        label: '结束占位符',
        show({ values }) {
          return ['daterange', 'datetimerange', 'monthrange'].includes(
            values.componentProps.type,
          );
        },
        type: 'input',
      },
      {
        field: 'componentProps.placeholder',
        label: '占位内容',
        show({ values }) {
          return !['daterange', 'datetimerange', 'monthrange'].includes(
            values.componentProps.type,
          );
        },
        type: 'input',
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
              value: 'default',
            },
            {
              label: '小型',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        defaultValue: 'default',
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        field: 'componentProps.editable',
        label: '可输入',
        type: 'switch',
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
          placeholder: '请输入',
        },
        field: 'componentProps.rangeSeparator',
        label: '分割符',
        show({ values }) {
          return ['daterange', 'datetimerange', 'monthrange'].includes(
            values.componentProps.type,
          );
        },
        type: 'input',
      },
      {
        field: 'componentProps.clearable',
        label: '可清空',
        type: 'switch',
      },
      {
        field: 'componentProps.readonly',
        label: '只读',
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
      endPlaceholder: '请选择',
      format: 'YYYY-MM-DD',
      placeholder: '请选择',
      startPlaceholder: '请选择',
      type: 'date',
      valueFormat: 'YYYY-MM-DD',
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

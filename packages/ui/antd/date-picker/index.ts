import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  bindModel: 'modelValue',
  component: () => import('./datePicker'),
  config: {
    attribute: [
      {
        field: 'field',
        label: '字段名',
        type: 'input',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
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
        changeSync: true,
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
              label: '季度',
              value: 'quarter',
            },
            {
              label: '年份',
              value: 'year',
            },
            {
              label: '日期范围',
              value: 'daterange',
            },
            {
              label: '周范围',
              value: 'weekrange',
            },
            {
              label: '月份范围',
              value: 'monthrange',
            },
            {
              label: '季度范围',
              value: 'quarterrange',
            },
            {
              label: '年份范围',
              value: 'yearrange',
            },
          ],
        },
        field: 'componentProps.type',
        label: '日期类型',
        onChange({ value, values }) {
          values.componentProps.defaultValue = null;
          values.componentProps.placeholder = [
            'daterange',
            'monthrange',
            'quarterrange',
            'weekrange',
            'yearrange',
          ].includes(value)
            ? ['请输入', '请输入']
            : '请输入';

          if (['date', 'daterange'].includes(value)) {
            values.componentProps.format = 'YYYY-MM-DD';
            values.componentProps.valueFormat = 'YYYY-MM-DD';
          } else if (['week', 'weekrange'].includes(value)) {
            values.componentProps.format = 'ww [周]';
            values.componentProps.valueFormat = 'YYYY-MM-DD';
          } else if (['month', 'monthrange'].includes(value)) {
            values.componentProps.format = 'YYYY-MM';
            values.componentProps.valueFormat = 'YYYY-MM';
          } else if (['quarter', 'quarterrange'].includes(value)) {
            values.componentProps.format = 'YYYY-Q季度';
            values.componentProps.valueFormat = 'YYYY-Q季度';
          } else if (['"yearrange"', 'year'].includes(value)) {
            values.componentProps.format = 'YYYY';
            values.componentProps.valueFormat = 'YYYY';
          }
        },
        type: 'select',
      },
      {
        field: 'componentProps.showTime',
        label: '增加时间选择',
        onChange: ({ value, values }) => {
          if (value) {
            values.componentProps.valueFormat = 'YYYY-MM-DD HH:mm:ss';
            values.componentProps.format = 'YYYY-MM-DD HH:mm:ss';
          } else {
            values.componentProps.valueFormat = 'YYYY-MM-DD';
            values.componentProps.format = 'YYYY-MM-DD';
          }
        },
        show({ values }) {
          return ['date', 'daterange'].includes(values.componentProps.type);
        },
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.placeholder',
        label: '占位内容',
        show: ({ values }) =>
          ![
            'daterange',
            'monthrange',
            'quarterrange',
            'weekrange',
            'yearrange',
          ].includes(values.componentProps.type),
        type: 'input',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.placeholder.0',
        label: '开始占位符',
        show: ({ values }) =>
          [
            'daterange',
            'monthrange',
            'quarterrange',
            'weekrange',
            'yearrange',
          ].includes(values.componentProps.type),
        type: 'input',
      },

      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.placeholder.1',
        label: '结束占位符',
        show: ({ values }) =>
          [
            'daterange',
            'monthrange',
            'quarterrange',
            'weekrange',
            'yearrange',
          ].includes(values.componentProps.type),
        type: 'input',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.format',
        label: '显示格式',
        type: 'input',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.valueFormat',
        label: '数据格式',
        type: 'input',
      },
      {
        componentProps: {
          allowClear: true,
          options: [
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'middle',
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
        componentProps: {
          allowClear: true,
          options: [
            {
              label: 'bottomLeft',
              value: 'bottomLeft',
            },
            {
              label: 'bottomRight',
              value: 'bottomRight',
            },
            {
              label: 'topLeft',
              value: 'topLeft',
            },
            {
              label: 'topRight',
              value: 'topRight',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.placement',
        label: '弹出框位置',
        type: 'select',
      },
      {
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: 'componentProps.bordered',
        label: '无边框',
        type: 'switch',
      },
      {
        field: 'componentProps.inputReadOnly',
        label: '禁止键盘输入',
        type: 'switch',
      },
      {
        field: 'componentProps.allowClear',
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
        describe: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        describe: '值变化时',
        type: 'change',
      },
      {
        describe: '点击确定按钮时',
        type: 'ok',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
      format: 'YYYY-MM-DD',
      placeholder: '请选择',
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

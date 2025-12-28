import type { ComponentConfigModel } from '@epic-designer/types';

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
        field: 'label',
        label: '标题',
        props: {
          placeholder: '请输入',
        },
        type: 'input',
      },
      {
        field: 'props.defaultValue',
        label: '默认值',
        type: 'date',
      },
      {
        changeSync: true,
        field: 'props.type',
        label: '日期类型',
        onChange({ value, values }) {
          values.props.defaultValue = null;
          values.props.placeholder = [
            'daterange',
            'monthrange',
            'quarterrange',
            'weekrange',
            'yearrange',
          ].includes(value)
            ? ['请输入', '请输入']
            : '请输入';

          if (['date', 'daterange'].includes(value)) {
            values.props.format = 'YYYY-MM-DD';
            values.props.valueFormat = 'YYYY-MM-DD';
          } else if (['week', 'weekrange'].includes(value)) {
            values.props.format = 'ww [周]';
            values.props.valueFormat = 'YYYY-MM-DD';
          } else if (['month', 'monthrange'].includes(value)) {
            values.props.format = 'YYYY-MM';
            values.props.valueFormat = 'YYYY-MM';
          } else if (['quarter', 'quarterrange'].includes(value)) {
            values.props.format = 'YYYY-Q季度';
            values.props.valueFormat = 'YYYY-Q季度';
          } else if (['"yearrange"', 'year'].includes(value)) {
            values.props.format = 'YYYY';
            values.props.valueFormat = 'YYYY';
          }
        },
        props: {
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
        type: 'select',
      },
      {
        field: 'props.showTime',
        label: '增加时间选择',
        onChange: ({ value, values }) => {
          if (value) {
            values.props.valueFormat = 'YYYY-MM-DD HH:mm:ss';
            values.props.format = 'YYYY-MM-DD HH:mm:ss';
          } else {
            values.props.valueFormat = 'YYYY-MM-DD';
            values.props.format = 'YYYY-MM-DD';
          }
        },
        show({ values }) {
          return ['date', 'daterange'].includes(values.props.type);
        },
        type: 'switch',
      },
      {
        field: 'props.placeholder',
        label: '占位内容',
        props: {
          placeholder: '请输入',
        },
        show: ({ values }) =>
          ![
            'daterange',
            'monthrange',
            'quarterrange',
            'weekrange',
            'yearrange',
          ].includes(values.props.type),
        type: 'input',
      },
      {
        field: 'props.placeholder.0',
        label: '开始占位符',
        props: {
          placeholder: '请输入',
        },
        show: ({ values }) =>
          [
            'daterange',
            'monthrange',
            'quarterrange',
            'weekrange',
            'yearrange',
          ].includes(values.props.type),
        type: 'input',
      },

      {
        field: 'props.placeholder.1',
        label: '结束占位符',
        props: {
          placeholder: '请输入',
        },
        show: ({ values }) =>
          [
            'daterange',
            'monthrange',
            'quarterrange',
            'weekrange',
            'yearrange',
          ].includes(values.props.type),
        type: 'input',
      },
      {
        field: 'props.format',
        label: '显示格式',
        props: {
          placeholder: '请输入',
        },
        type: 'input',
      },
      {
        field: 'props.valueFormat',
        label: '数据格式',
        props: {
          placeholder: '请输入',
        },
        type: 'input',
      },
      {
        field: 'props.size',
        label: '尺寸',
        props: {
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
        type: 'select',
      },

      {
        field: 'props.placement',
        label: '弹出框位置',
        props: {
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
        type: 'select',
      },
      {
        field: 'props.bordered',
        label: '无边框',
        props: {
          checkedValue: false,
          unCheckedValue: true,
        },
        type: 'switch',
      },
      {
        field: 'props.inputReadOnly',
        label: '禁止键盘输入',
        type: 'switch',
      },
      {
        field: 'props.allowClear',
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
      {
        description: '点击确定按钮时',
        type: 'ok',
      },
    ],
  },
  defaultSchema: {
    field: 'date',
    input: true,
    label: '日期选择器',
    props: {
      format: 'YYYY-MM-DD',
      placeholder: '请选择',
      type: 'date',
      valueFormat: 'YYYY-MM-DD',
    },
    type: 'date',
  },
  groupName: '表单',
  icon: 'icon--epic--calendar-month-outline-rounded',
  sort: 910,
} as ComponentConfigModel;

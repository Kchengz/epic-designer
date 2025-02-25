import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  bindModel: 'value',
  component: async () => (await import('ant-design-vue')).TimePicker,
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
        type: 'time',
      },
      {
        field: 'componentProps.placeholder',
        label: '占位内容',
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
          placeholder: '请输入',
        },
        field: 'componentProps.hourStep',
        label: '小时选项间隔',
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.minuteStep',
        label: '分钟选项间隔',
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.secondStep',
        label: '秒选项间隔',
        type: 'number',
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
        changeSync: true,
        field: 'componentProps.use12Hours',
        label: '12小时制',
        onChange({ value, values }) {
          values.componentProps.defaultValue = null;
          if (value) {
            values.componentProps.format = 'h:mm:ss a';
            values.componentProps.valueFormat = 'h:mm:ss a';
          } else {
            values.componentProps.format = 'HH:mm:ss';
            values.componentProps.valueFormat = 'HH:mm:ss';
          }
        },
        type: 'switch',
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
    ],
  },
  defaultSchema: {
    componentProps: {
      format: 'HH:mm:ss',
      placeholder: '请输入',
      valueFormat: 'HH:mm:ss',
    },
    field: 'time',
    input: true,
    label: '时间选择器',
    type: 'time',
  },
  groupName: '表单',
  icon: 'icon--epic--time-line',
  sort: 920,
} as ComponentConfigModel;

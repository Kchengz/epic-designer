import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui/lib/switch')).NSwitch,
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
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.checkedValue',
        label: 'ON状态值',
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
        },
        type: 'input',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.uncheckedValue',
        label: 'OFF状态值',
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
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
        field: 'componentProps.round',
        label: '圆型按钮',
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
        componentProps: {
          ruleType: 'boolean',
        },
        describe: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        describe: '状态发生变化时',
        type: 'change',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
      defaultValue: false,
      round: true,
    },
    field: 'switch',
    input: true,
    label: '开关',
    type: 'switch',
  },
  groupName: '表单',
  icon: 'icon--epic--toggle-off-outline',
  sort: 930,
} as ComponentConfigModel;

function setDefaultValue(e) {
  const defaultValue = e.values.componentProps?.uncheckedValue || false;
  // 如果uncheckedValue === ''，则在下一个事件循环中删除 uncheckedValue 属性
  if (e.values.componentProps.uncheckedValue === '') {
    delete e.values.componentProps.uncheckedValue;
  }

  // 如果checkedValue === ''，则在下一个事件循环中删除 checkedValue 属性
  if (e.values.componentProps.checkedValue === '') {
    delete e.values.componentProps.checkedValue;
  }

  // 检查是否已经有了 componentProps 对象，如果有，将默认值赋给 defaultValue 属性
  if (e.values.componentProps) {
    e.values.componentProps.defaultValue = defaultValue;
  } else {
    // 如果没有 componentProps 对象，则创建一个新对象并添加 defaultValue 属性
    e.values.componentProps = {
      defaultValue,
    };
  }
}

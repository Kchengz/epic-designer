import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  component: async () => (await import('element-plus')).ElSwitch,
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
        field: 'componentProps.activeValue',
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
        field: 'componentProps.inactiveValue',
        label: 'OFF状态值',
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
        },
        type: 'input',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.activeText',
        label: 'ON状态描述',
        type: 'input',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.inactiveText',
        label: 'OFF状态描述',
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
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          min: 50,
          placeholder: '请输入',
        },
        field: 'componentProps.width',
        label: '宽度',
        type: 'number',
      },
      {
        field: 'componentProps.inlinePrompt',
        label: '文本点内显示',
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
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        description: '状态发生变化时',
        type: 'change',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
      defaultValue: false,
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

// 设置默认值
function setDefaultValue(e) {
  const defaultValue = e.values.componentProps?.inactiveValue || false;
  // 如果inactiveValue === ''，则在下一个事件循环中删除 inactiveValue 属性
  if (e.values.componentProps.unCheckedValue === '') {
    delete e.values.componentProps.unCheckedValue;
  }

  // 如果activeValue === ''，则在下一个事件循环中删除 activeValue 属性
  if (e.values.componentProps.activeValue === '') {
    delete e.values.componentProps.activeValue;
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

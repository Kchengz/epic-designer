import type { ComponentConfigModel } from '@epic-designer/types';

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
        field: 'props.defaultValue',
        label: '默认值',
        type: 'switch',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.activeValue',
        label: 'ON状态值',
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
        },
        type: 'input',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.inactiveValue',
        label: 'OFF状态值',
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
        },
        type: 'input',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.activeText',
        label: 'ON状态描述',
        type: 'input',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.inactiveText',
        label: 'OFF状态描述',
        type: 'input',
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
              value: 'default',
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
        props: {
          min: 50,
          placeholder: '请输入',
        },
        field: 'props.width',
        label: '宽度',
        type: 'number',
      },
      {
        field: 'props.inlinePrompt',
        label: '文本点内显示',
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
        props: {
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
    props: {
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
  const defaultValue = e.values.props?.inactiveValue || false;
  // 如果inactiveValue === ''，则在下一个事件循环中删除 inactiveValue 属性
  if (e.values.props.unCheckedValue === '') {
    delete e.values.props.unCheckedValue;
  }

  // 如果activeValue === ''，则在下一个事件循环中删除 activeValue 属性
  if (e.values.props.activeValue === '') {
    delete e.values.props.activeValue;
  }

  // 检查是否已经有了 props 对象，如果有，将默认值赋给 defaultValue 属性
  if (e.values.props) {
    e.values.props.defaultValue = defaultValue;
  } else {
    // 如果没有 props 对象，则创建一个新对象并添加 defaultValue 属性
    e.values.props = {
      defaultValue,
    };
  }
}

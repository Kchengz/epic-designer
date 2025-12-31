import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'checked',
  component: async () => (await import('ant-design-vue')).Switch,
  config: {
    attribute: [
      {
        field: 'field',
        label: '数据字段',
        type: 'EpField',
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
        field: 'props.checkedValue',
        label: 'ON状态值',
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
        },
        props: {
          placeholder: '请输入',
        },
        type: 'input',
      },
      {
        field: 'props.unCheckedValue',
        label: 'OFF状态值',
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
        },
        props: {
          placeholder: '请输入',
        },
        type: 'input',
      },
      {
        field: 'props.checkedChildren',
        label: 'ON状态描述',
        props: {
          placeholder: '请输入',
        },
        type: 'input',
      },
      {
        field: 'props.unCheckedChildren',
        label: 'OFF状态描述',
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
              label: 'default',
              value: 'default',
            },
            {
              label: 'small',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
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
        props: {
          ruleType: 'boolean',
        },
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
    field: 'switch',
    input: true,
    label: '开关',
    props: {
      defaultValue: false,
    },
    type: 'switch',
  },
  groupName: '表单',
  icon: 'icon--epic--toggle-off-outline',
  sort: 930,
} as ComponentConfigModel;

function setDefaultValue(e) {
  const defaultValue = e.values.props?.unCheckedValue || false;
  // 如果unCheckedValue === ''，则在下一个事件循环中删除 unCheckedValue 属性
  if (e.values.props.unCheckedValue === '') {
    delete e.values.props.unCheckedValue;
  }

  // 如果checkedValue === ''，则在下一个事件循环中删除 checkedValue 属性
  if (e.values.props.checkedValue === '') {
    delete e.values.props.checkedValue;
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

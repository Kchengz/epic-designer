import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: async () => (await import('element-plus')).ElColorPicker,
  config: {
    action: [],
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
        type: 'color-picker',
      },
      {
        field: 'props.size',
        label: '尺寸',
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
        type: 'select',
      },
      {
        field: 'props.colorFormat',
        label: '格式',
        props: {
          clearable: true,
          options: [
            {
              label: 'hsl',
              value: 'hsl',
            },
            {
              label: 'hsv',
              value: 'hsv',
            },
            {
              label: 'hex',
              value: 'hex',
            },
            {
              label: 'rgb',
              value: 'rgb',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
      },
      {
        field: 'props.showAlpha',
        label: '透明度选择',
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
    field: 'color-picker',
    input: true,
    label: '颜色选择器',
    type: 'color-picker',
  },
  groupName: '表单',
  icon: 'icon--epic--palette-outline',
  sort: 950,
} as ComponentConfigModel;

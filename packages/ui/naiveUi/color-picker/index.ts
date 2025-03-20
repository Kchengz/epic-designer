import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () =>
    (await import('naive-ui/lib/color-picker')).NColorPicker,
  config: {
    action: [],
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
        type: 'color-picker',
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
        defaultValue: 'default',
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: 'top-start',
              value: 'top-start',
            },
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'top-end',
              value: 'top-end',
            },
            {
              label: 'right-start',
              value: 'right-start',
            },
            {
              label: 'right',
              value: 'right',
            },
            {
              label: 'right-end',
              value: 'right-end',
            },
            {
              label: 'bottom-start',
              value: 'bottom-start',
            },
            {
              label: 'bottom',
              value: 'bottom',
            },
            {
              label: 'bottom-end',
              value: 'bottom-end',
            },
            {
              label: 'left-start',
              value: 'left-start',
            },
            {
              label: 'left',
              value: 'left',
            },
            {
              label: 'left-end',
              value: 'left-end',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.placement',
        label: '菜单弹出的位置',
        type: 'select',
      },
      {
        componentProps: {
          max: 1,
          options: [
            {
              label: 'rgb',
              value: 'rgb',
            },
            {
              label: 'hex',
              value: 'hex',
            },
            {
              label: 'hsl',
              value: 'hsl',
            },
            {
              label: 'hsv',
              value: 'hsv',
            },
          ],
        },
        field: 'componentProps.modes',
        label: '格式',
        type: 'checkbox',
      },
      {
        field: 'componentProps.showPreview',
        label: '展示预览块',
        type: 'switch',
      },
      {
        field: 'componentProps.showAlpha',
        label: '可调节透明度',
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
      modes: ['hex'],
      showAlpha: true,
      type: 'color',
    },
    field: 'color-picker',
    input: true,
    label: '颜色选择器',
    type: 'color-picker',
  },
  groupName: '表单',
  icon: 'icon--epic--palette-outline',
  sort: 950,
} as ComponentConfigModel;

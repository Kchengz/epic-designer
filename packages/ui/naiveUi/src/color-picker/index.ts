import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui')).NColorPicker,
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
        defaultValue: 'default',
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
              value: 'medium',
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
        label: '菜单弹出的位置',
        props: {
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
        type: 'select',
      },
      {
        field: 'props.modes',
        label: '格式',
        props: {
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
        type: 'checkbox',
      },
      {
        field: 'props.showPreview',
        label: '展示预览块',
        type: 'switch',
      },
      {
        field: 'props.showAlpha',
        label: '可调节透明度',
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
    props: {
      modes: ['hex'],
      showAlpha: true,
      type: 'color',
    },
    type: 'color-picker',
  },
  groupName: '表单',
  icon: 'icon--epic--palette-outline',
  sort: 950,
} as ComponentConfigModel;

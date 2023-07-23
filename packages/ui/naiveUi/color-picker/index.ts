import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => (await import('naive-ui/lib/color-picker')).NColorPicker,
  defaultSchema: {
    label: '颜色选择器',
    type: 'color-picker',
    field: 'color-picker',
    icon: 'icon-write',
    input: true,
    componentProps: {
      type: 'color',
      modes: ['hex'],
      showAlpha: true,
      size: 'medium',
      placement: 'bottom-start'
    }
  },
  config: {
    attribute: [
      {
        label: '字段名',
        type: 'input',
        field: 'field'
      },
      {
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'color-picker',
        field: 'componentProps.defaultValue'
      },
      {
        label: '尺寸',
        type: 'select',
        defaultValue: 'default',
        componentProps: {
          "placeholder": "请选择",
          options: [
            {
              label: 'large',
              value: 'large'
            },
            {
              label: 'medium',
              value: 'medium'
            },
            {
              label: 'small',
              value: 'small'
            }
          ]
        },
        field: 'componentProps.size'
      },
      {
        label: '菜单弹出的位置',
        type: 'select',
        field: 'componentProps.placement',
        componentProps: {
          options: [
            {
              label: 'top-start',
              value: 'top-start'
            },
            {
              label: 'top',
              value: 'top'
            },
            {
              label: 'top-end',
              value: 'top-end'
            },
            {
              label: 'right-start',
              value: 'right-start'
            },
            {
              label: 'right',
              value: 'right'
            },
            {
              label: 'right-end',
              value: 'right-end'
            },
            {
              label: 'bottom-start',
              value: 'bottom-start'
            },
            {
              label: 'bottom',
              value: 'bottom'
            },
            {
              label: 'bottom-end',
              value: 'bottom-end'
            },
            {
              label: 'left-start',
              value: 'left-start'
            },
            {
              label: 'left',
              value: 'left'
            },
            {
              label: 'left-end',
              value: 'left-end'
            }
          ]
        }
      },
      {
        label: '格式',
        type: 'checkbox',
        field: 'componentProps.modes',
        componentProps: {
          options: [
            {
              label: 'rgb',
              value: 'rgb'
            },
            {
              label: 'hex',
              value: 'hex'
            },
            {
              label: 'hsl',
              value: 'hsl'
            },
            {
              label: 'hsv',
              value: 'hsv'
            }
          ],
          max: 1,
        },
      },
      {
        label: '展示预览块',
        type: 'switch',
        field: 'componentProps.showPreview'
      },
      {
        label: '可调节透明度',
        type: 'switch',
        field: 'componentProps.showAlpha'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      },
      {
        label: '禁用',
        type: 'switch',
        field: 'componentProps.disabled'
      },
      {
        label: '表单校验',
        type: 'ERuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ],
    event: [
      {
        type: 'change',
        describe: '值变化时'
      }
    ],
    action: []
  },
  bindModel: 'value'
} as ComponentConfigModel

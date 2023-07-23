import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
import {nextTick} from 'vue'
export default {
  component: async () => (await import('naive-ui/lib/slider')).NSlider,
  defaultSchema: {
    label: '滑块',
    type: 'slider',
    icon: 'icon-number',
    field: 'slider',
    input: true,
    componentProps: {
      placement: 'top-start'
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
        type: 'slider',
        field: 'componentProps.defaultValue'
      },
      {
        label: '键盘可控',
        type: 'switch',
        field: 'componentProps.keyboard',
      },
      {
        label: '范围选择',
        type: 'switch',
        field: 'componentProps.range',
        changeSync: true,
        onChange: ({ value, values }) => {
          if (value) {
            values.componentProps.defaultValue = [0,100];
          } else {
            values.componentProps.defaultValue = 0;
          }
        },
      },
      {
        label: '倒转轨道',
        type: 'switch',
        field: 'componentProps.reverse',
      },
      {
        label: '步长',
        type: 'number',
        field: 'componentProps.step',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '一直显示提示',
        type: 'switch',
        field: 'componentProps.showTooltip'
      },
      {
        label: '垂直模式',
        type: 'switch',
        field: 'componentProps.vertical'
      },
      {
        label: '最大值',
        type: 'number',
        field: 'componentProps.max',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '最小值',
        type: 'number',
        field: 'componentProps.min',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '弹出位置',
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
          ],
          clearable: true,
          placeholder: '请输入'
        }
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
        type: 'input',
        describe: '拖拽实时触发'
      },
      {
        type: 'change',
        describe: '拖拽结束改变值时'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel

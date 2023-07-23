import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => (await import('element-plus')).ElSlider,
  defaultSchema: {
    label: '滑块',
    type: 'slider',
    icon: 'icon-number',
    field: 'slider',
    input: true,
    componentProps: {
      placement: 'top-start',
      showTooltip: true
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
              label: 'default',
              value: 'default'
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
        label: '默认值',
        type: 'slider',
        field: 'componentProps.defaultValue'
      },

      {
        label: '最小值',
        type: 'number',
        field: 'componentProps.min',
        componentProps: {
          placeholder: "请输入",
        },
        onChange: ({value, values, componentAttributes})=> {
          const componentIndex = componentAttributes.value.findIndex(item=>item.field ==='componentProps.max')
          const componentConfig = componentAttributes.value[componentIndex]
          componentConfig.componentProps={
            min: value
          }
          if((values.componentProps.max ?? 0) < value){
            values.componentProps.max = value
          }
        }
      },
      {
        label: '最大值',
        type: 'number',
        field: 'componentProps.max',
        componentProps: {
          placeholder: "请输入",
        },
        onChange: ({value, values, componentAttributes})=> {
          const componentIndex = componentAttributes.value.findIndex(item=>item.field ==='componentProps.min')
          const componentConfig = componentAttributes.value[componentIndex]
          componentConfig.componentProps={
            max: value
          }
          if((values.componentProps.min ?? 0) > value){
            values.componentProps.min = value
          }
        }
      },
      {
        label: '步长',
        type: 'number',
        field: 'componentProps.step',
        componentProps: {
          placeholder: "请输入",
        }
      },
      {
        label: '显示间断点',
        type: 'switch',
        field: 'componentProps.showStops',
      },
      {
        label: '提示信息',
        type: 'switch',
        field: 'componentProps.showTooltip',
      },
      {
        label: '开启选择范围',
        type: 'switch',
        field: 'componentProps.range',
      },
      {
        label: '垂直模式',
        type: 'switch',
        field: 'componentProps.vertical',
      },
      {
        label: '高度',
        type: 'EInputSize',
        field: 'componentProps.height',
        show: ({values})=> {
          return values.componentProps.vertical
        }
      },
      {
        label: '显示数字框',
        type: 'switch',
        field: 'componentProps.showInput',
        onChange: ({value, values})=> {
          value?values.componentProps.showInputControls = true:null
        }
      },
      {
        label: '控制按钮',
        type: 'switch',
        field: 'componentProps.showInputControls',
        show: ({values})=> values.componentProps.showInput
      },
      {
        label: '提示框位置',
        type: 'select',
        defaultValue: 'bottom-start',
        componentProps: {
          options: [
            {
              label: 'top',
              value: 'top'
            },
            {
              label: 'top-start',
              value: 'top-start'
            },
            {
              label: 'top-end',
              value: 'top-end'
            },
            {
              label: 'bottom',
              value: 'bottom'
            }
            ,
            {
              label: 'bottom-start',
              value: 'bottom-start'
            },
            {
              label: 'bottom-end',
              value: 'bottom-end'
            },
            {
              label: 'left',
              value: 'left'
            }
            ,
            {
              label: 'left-start',
              value: 'left-start'
            },
            {
              label: 'left-end',
              value: 'left-end'
            },
            {
              label: 'right',
              value: 'right'
            },
            {
              label: 'right-start',
              value: 'right-start'
            },
            {
              label: 'right-end',
              value: 'right-end'
            }
          ]
        },
        field: 'componentProps.placement'
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
  }
} as ComponentConfigModel

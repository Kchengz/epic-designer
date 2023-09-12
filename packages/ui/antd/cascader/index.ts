import { type ComponentConfigModel } from '@epic-designer/utils'
export default {
  component:  () => import('ant-design-vue/lib/cascader'),
  defaultSchema: {
    label: '级联选择器',
    type: 'cascader',
    field: 'cascader',
    icon: "icon-guanlian",
    input: true,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1",
        },
        {
          label: "选项2",
          value: "选项2",
        },
      ],
      placeholder: "请选择",
      placement: 'bottomLeft'
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
        label: '标题',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'input',
        field: 'componentProps.defaultValue'
      },
      {
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder'
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "middle",
              value: "middle",
            },
            {
              label: "small",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
      },
      {
        label: '多选',
        type: 'switch',
        field: 'componentProps.multiple'
      },
      {
        label: '可搜索',
        type: 'switch',
        field: 'componentProps.showSearch'
      },
      {
        label: '最大tag文本长度',
        type: 'number',
        field: 'componentProps.maxTagTextLength',
        componentProps: {
          placeholder: '请输入'
        },
        show: ({values})=>values.componentProps.multiple
      },
      {
        label: '最大tag显示数',
        type: 'number',
        field: 'componentProps.maxTagCount',
        componentProps: {
          placeholder: '请输入'
        },
        show: ({values})=>values.componentProps.multiple
      },
      {
        label: '弹出框位置',
        type: 'select',
        componentProps: {
          options: [
            {
              label: 'bottomLeft',
              value: 'bottomLeft'
            },
            {
              label: 'bottomRight',
              value: 'bottomRight'
            },
            {
              label: 'topLeft',
              value: 'topLeft'
            },
            {
              label: 'topRight',
              value: 'topRight'
            }
          ]
        },
        field: 'componentProps.placement'
      },
      {
        label: '可清空',
        type: 'switch',
        field: 'componentProps.allowClear'
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
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        componentProps: {
          tree: true
        }
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
        type: "change",
        describe: "值变化时",
      },
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel

import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'
export default {
  component:  () => import('ant-design-vue/lib/cascader'),
  defaultSchema: {
    label: '级联选择器',
    type: 'cascader',
    field: 'cascader',
    icon: 'icon-write',
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
        show: ({values})=>values.componentProps.multiple
      },
      {
        label: '最大tag显示数',
        type: 'number',
        field: 'componentProps.maxTagCount',
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
        label: '表单校验',
        type: 'KRuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      },
      {
        label: "选项管理",
        type: "KOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "校验规则需要配合表单使用",
        componentProps: {
          tree: true
        }
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel

import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('ant-design-vue/lib/select'),
  defaultSchema: {
    label: '选择框',
    type: 'select',
    icon: 'icon-xiala',
    field: 'select',
    input: true,
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '选项1'
        },
        {
          label: '选项2',
          value: '选项2'
        }
      ],
      listHeight:256,
      placeholder: '请选择',
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
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '默认值',
        type: 'select',
        field: 'componentProps.defaultValue'
      },
      {
        label: 'label包装到value中',
        type: 'switch',
        field: 'componentProps.labelInValue'
      },
      {
        label: '设置弹窗高度',
        type: 'number',
        field: 'componentProps.listHeight'
      },
      {
        label: '模式',
        type: 'select',
        componentProps: {
          options: [
            {
              label: 'multiple',
              value: 'multiple'
            },
            {
              label: 'tags',
              value: 'tags'
            },
          ],
          placeholder: '请选择',
          allowClear: true
        },
        field: 'componentProps.mode'
      },
      {
        label: '可搜索',
        type: 'switch',
        field: 'componentProps.showSearch'
      },
      {
        label: '选中选项后清空搜索框',
        type: 'switch',
        field: 'componentProps.autoClearSearchValue',
        show: ({values})=> values.componentProps.mode && values.componentProps.showSearch
      },
      {
        label: '最大tag文本长度',
        type: 'number',
        field: 'componentProps.maxTagTextLength',
        show: ({values})=>values.componentProps.mode
      },
      {
        label: '最大tag显示数',
        type: 'number',
        field: 'componentProps.maxTagCount',
        show: ({values})=>values.componentProps.mode
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
        type: 'ERuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "校验规则需要配合表单使用",
      }
    ],
    event: [
      {
        type: 'change',
        describe: '值修改'
      },
      {
        type: 'focus',
        describe: '获取焦点'
      },
      {
        type: 'blur',
        describe: '失去焦点'
      }
    ],
    action: [
      {
        type: 'focus',
        describe: '使 input 获取焦点'
      },
      {
        type: 'blur',
        describe: '使 input 失去焦点'
      },
      {
        type: 'select',
        describe: '选中 input 中的文字'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel

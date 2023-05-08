import { ComponentConfigModel } from "../../utils/pluginManager";
export default {
  component: async () => (await import('naive-ui/lib/switch')).NSwitch,
  defaultSchema: {
    label: '开关',
    type: 'switch',
    icon: 'icon-number',
    field: 'switch',
    isInput: true,
    componentProps: {}
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
        type: 'switch',
        field: 'componentProps.defaultValue'
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
        type: 'k-rule-editor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ],
    event: [
      {
        type: 'change',
        describe: '状态发生变化时'
      }
    ]
  },
  bindModel: "value",
} as ComponentConfigModel;

import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'
export default {
  component: () => import('./uploadImage'),
  defaultSchema: {
    label: '上传图片',
    type: 'upload-image',
    icon: 'icon-number',
    field: 'uploadImage',
    input: true,
    componentProps: {
      action: 'http://cdn.kcz66.com/upload-img.txt'
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
      }
    ]
  },
  bindModel: 'modelValue'
} as ComponentConfigModel

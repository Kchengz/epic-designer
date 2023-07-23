import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
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
        label: '请求地址',
        type: 'input',
        field: 'componentProps.action'
      },
      {
        label: '多选',
        type: 'switch',
        field: 'componentProps.multiple'
      },
      {
        label: '允许上传最大数量',
        type: 'number',
        field: 'componentProps.maxCount',
        componentProps: {
          min:0,
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
    ]
  },
  bindModel: 'modelValue'
} as ComponentConfigModel

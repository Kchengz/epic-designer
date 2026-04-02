import type { ComponentConfigModel } from '@epic-designer/types';

import CustomValidateInput from './CustomValidateInput.vue';

export const CUSTOM_VALIDATE_COMPONENT_TYPE = 'custom-validate-input';

const customValidateComponent: ComponentConfigModel = {
  component: CustomValidateInput,
  config: {
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
        type: 'input',
      },
      {
        field: 'props.placeholder',
        label: '提示词',
        type: 'input',
      },
      {
        field: 'props.readonly',
        label: '只读',
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
        description: '输入值时',
        type: 'input',
      },
      {
        description: '值修改时',
        type: 'change',
      },
      {
        description: '获取焦点时',
        type: 'focus',
      },
      {
        description: '失去焦点时',
        type: 'blur',
      },
    ],
  },
  defaultSchema: {
    field: 'customCheck',
    input: true,
    label: '自定义校验组件',
    props: {
      placeholder: '自定义校验组件',
    },
    type: CUSTOM_VALIDATE_COMPONENT_TYPE,
  },
  groupName: '表单',
  icon: 'icon--epic--shield-check-outline-rounded',
  sort: 130,
};

export default customValidateComponent;

import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'model-value',
  component: async () => await import('./index.vue'),
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
        type: 'monacoEditor',
      },
    ],
  },
  defaultSchema: {
    field: 'monacoEditor',
    icon: 'epic-icon-write',
    input: true,
    label: '代码编辑器',
    type: 'monacoEditor',
  },
} as ComponentConfigModel;

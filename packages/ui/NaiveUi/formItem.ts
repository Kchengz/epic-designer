import { ComponentConfigModel } from "../../utils/pluginManager";

export default {
  component: () => import('./src/KFormItem.vue'),
  defaultSchema: {
    label: '表单项',
    type: 'form-item',
    icon: 'icon-qiapian'
  },
  config: {}
} as ComponentConfigModel;

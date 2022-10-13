import { pluginManager } from './src/core/PluginManager';

import {
    Form,
    FormItem
  } from "ant-design-vue";

  
pluginManager.addComponent("Form", Form);
pluginManager.addComponent("FormItem", FormItem);
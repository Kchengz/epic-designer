import { pluginManager } from "./src/core/PluginManager";

import Form from "ant-design-vue/lib/form";
import FormItem from "ant-design-vue/lib/form/FormItem";

pluginManager.addComponent("Form", Form);
pluginManager.addComponent("FormItem", FormItem);

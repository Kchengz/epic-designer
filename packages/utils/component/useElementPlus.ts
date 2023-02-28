// 注册ant-design-vue ui
import { PluginManager } from "../pluginManager";
import { ElDialog,ElFormItem } from 'element-plus'
import Input from "./ElementPlus/input";
import Form from "./ElementPlus/form";



export function useElementPlus(pluginManager: PluginManager) {
  pluginManager.registerComponent("Modal", ElDialog);
  pluginManager.registerComponent("FormItem", ElFormItem);
  
  const componentArray = [
    Input,
    Form,
  ];

  componentArray.forEach((item) => {
    pluginManager.addComponent(
      item.component,
      item.schema,
      item.atteditSchemas,
      item.bindModel
    );
  });
}

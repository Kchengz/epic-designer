// 注册ant-design-vue ui
import { PluginManager } from "../pluginManager";
import Input from "./ElementPlus/input";


// 兼容性样式

export function useElementPlus(pluginManager: PluginManager) {
  const componentArray = [
    Input,
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

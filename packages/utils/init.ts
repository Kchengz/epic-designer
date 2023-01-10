import { PluginManager } from "./pluginManager";
export function init(pluginManager: PluginManager) {
      // 左侧菜单初始化
      pluginManager.registerActivitybar({
        id: "1",
        title: "组件",
        icon: "icon-mokuai_1",
        component: ()=>import('../components/KDesigner/src/modules/KComponentView/KComponentView.vue'),
      });
    
      pluginManager.registerActivitybar({
        id: "12",
        title: "源码",
        icon: "icon-daima1",
        component: ()=>import('../components/KDesigner/src/modules/KSoundCode/KSoundCode.vue'),
      });
    
      pluginManager.registerActivitybar({
        id: "1",
        title: "大纲",
        icon: "icon-juxingkaobei",
        component: ()=>import('../components/KDesigner/src/modules/KOutline/KOutline.vue'),
      });
}

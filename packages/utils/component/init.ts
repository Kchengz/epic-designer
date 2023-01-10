import { PluginManager } from "../pluginManager";
export function initComponent(pluginManager: PluginManager) {
      // 左侧菜单初始化
      pluginManager.registerActivitybar({
        title: "组件",
        icon: "icon-mokuai_1",
        component: ()=>import('../../components/KDesigner/src/modules/KComponentView/KComponentView.vue'),
      });
    
      pluginManager.registerActivitybar({
        title: "源码",
        icon: "icon-daima1",
        component: ()=>import('../../components/KDesigner/src/modules/KSoundCode/KSoundCode.vue'),
      });
    
      pluginManager.registerActivitybar({
        title: "大纲",
        icon: "icon-juxingkaobei",
        component: ()=>import('../../components/KDesigner/src/modules/KOutline/KOutline.vue'),
      });
}

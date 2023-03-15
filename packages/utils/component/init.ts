import { PluginManager } from "../pluginManager";
import MonacoEditor from "./KComponent/monacoEditor";
import Page from "./KComponent/page";
import KColEditor from "./KComponent/KColEditor/KColEditor.vue";
import KTabPaneEditor from "./KComponent/KTabPaneEditor/KTabPaneEditor.vue";
import KInputSize from "./KComponent/KInputSize/index.vue";

export function initComponent(pluginManager: PluginManager) {
  pluginManager.component("k-tab-pane-editor", KTabPaneEditor);
  pluginManager.component("k-input-size", KInputSize);
  pluginManager.component("k-col-editor", KColEditor);
  
  // 左侧菜单初始化
  pluginManager.registerActivitybar({
    title: "组件",
    icon: "icon-mokuai_1",
    component: () =>
      import(
        "../../components/KDesigner/src/modules/KComponentView/KComponentView.vue"
      ),
  });

  pluginManager.registerActivitybar({
    title: "源码",
    icon: "icon-daima1",
    component: () =>
      import(
        "../../components/KDesigner/src/modules/KSoundCode/KSoundCode.vue"
      ),
  });

  pluginManager.registerActivitybar({
    title: "大纲",
    icon: "icon-juxingkaobei",
    component: () =>
      import("../../components/KDesigner/src/modules/KOutline/KOutline.vue"),
  });

  pluginManager.registerRightSidebar({
    title: "属性",
    component: () =>
      import(
        "../../components/KDesigner/src/modules/KAttributeView/KAttributeView.vue"
      ),
  })

  pluginManager.registerRightSidebar({
    title: "样式",
    component: () =>
      import("../../components/KDesigner/src/modules/KAttributeView/KStyleView.vue"),
  })


  const componentArray = [MonacoEditor, Page];
  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });
}



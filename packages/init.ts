import { pluginManager } from "./utils/pluginManager";

import KComponentView from "./components/KDesigner/src/modules/KComponentView/KComponentView.vue";
import KSoundCode from "./components/KDesigner/src/modules/KSoundCode/KSoundCode.vue";

import Form from "ant-design-vue/lib/form";
import FormItem from "ant-design-vue/lib/form/FormItem";

pluginManager.registerComponent("Form", Form);
pluginManager.registerComponent("FormItem", FormItem);

// const list = ['组件', '节点树', '模板', '插件']
pluginManager.registerActivitybar({
  id: "1",
  title: "组件",
  icon: "./components",
  component: KComponentView,
});

pluginManager.registerActivitybar({
  id: "12",
  title: "源码",
  icon: "./components3",
  component: KSoundCode,
});

pluginManager.registerActivitybar({
  id: "1",
  title: "模板",
  icon: "./components3",
  component: KComponentView,
});

pluginManager.registerActivitybar({
  id: "1",
  title: "插件",
  icon: "./components3",
  component: KComponentView,
});

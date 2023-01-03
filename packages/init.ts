import { pluginManager } from "./utils/pluginManager";

import KComponentView from "./components/KDesigner/src/modules/KComponentView/KComponentView.vue";
import KSoundCode from "./components/KDesigner/src/modules/KSoundCode/KSoundCode.vue";
// import KForm from "./components/KForm/index";

import Form from "ant-design-vue/lib/form";
import FormItem from "ant-design-vue/lib/form/FormItem";

pluginManager.registerComponent("Form", Form);
pluginManager.registerComponent("FormItem", FormItem);
// pluginManager.registerComponent("form", KForm);

pluginManager.addComponent(
  () => import("./components/KForm/index"),
  {
    label: "测试2",
    type: "form",
    field: "test",
    children: [],
  },
  []
);

// const list = ['组件', '节点树', '模板', '插件']
pluginManager.registerActivitybar({
  id: "1",
  title: "组件",
  icon: "apply",
  component: KComponentView,
});

pluginManager.registerActivitybar({
  id: "12",
  title: "源码",
  icon: "setting",
  component: KSoundCode,
});

pluginManager.registerActivitybar({
  id: "1",
  title: "模板",
  icon: "chart",
  component: KComponentView,
});

// pluginManager.registerActivitybar({
//   id: "1",
//   title: "插件",
//   icon: "apply",
//   component: KComponentView,
// });

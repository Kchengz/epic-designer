// import { pluginManager } from "./utils/pluginManager";

import KComponentView from "./components/KDesigner/src/modules/KComponentView/KComponentView.vue";
import KSoundCode from "./components/KDesigner/src/modules/KSoundCode/KSoundCode.vue";
import KOutline from "./components/KDesigner/src/modules/KOutline/KOutline.vue";
// import { NodeItem } from "./types/kDesigner.d";
import { Form, FormItem, Modal } from "ant-design-vue";
export function init(pluginManager: any) {
  pluginManager.registerComponent("Form", Form);
  pluginManager.registerComponent("FormItem", FormItem);
  pluginManager.registerComponent("Modal", Modal);
  // pluginManager.registerComponent("Form", () => import("ant-design-vue/lib/form"));
  // pluginManager.registerComponent("FormItem", () => import("ant-design-vue/lib/form/FormItem"));
  // pluginManager.registerComponent("Modal", () => import("ant-design-vue/lib/modal"));

  // console.log(pluginManager.getComponent('Form'))
  // console.log(pluginManager.getComponent('form'))
  // pluginManager.addComponent(
  //   () => import("./components/KForm/index"),
  //   {
  //     label: "测试2",
  //     type: "form",
  //     field: "test",
  //     icon: "icon-qiapian",
  //     labelWidth: 100,
  //     children: [],
  //   },
  //   [
  //     {
  //       label: "标签布局",
  //       type: "radio",
  //       attrIndex: "componentProps.labelLayout",
  //       componentProps: {
  //         options: [
  //           {
  //             label: "固定宽度",
  //             value: "fixed",
  //           },
  //           {
  //             label: "自适应宽度",
  //             value: "flex",
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       label: "labelWidth",
  //       type: "input",
  //       attrIndex: "componentProps.labelWidth",
  //       show: (values:NodeItem) => {
  //         return values.componentProps.labelLayout === "fixed";
  //       },
  //     },
  //     {
  //       label: "labelCol",
  //       type: "input",
  //       attrIndex: "componentProps.labelCol.span",
  //       show: (values:NodeItem) => {
  //         return values.componentProps.labelLayout === "flex";
  //       },
  //     },
  //     {
  //       label: "wrapperCol",
  //       type: "input",
  //       attrIndex: "componentProps.wrapperCol.span",
  //       show: (values:NodeItem) => {
  //         return values.componentProps.labelLayout === "flex";
  //       },
  //     },
  //   ]
  // );

  // const list = ['组件', '节点树', '模板', '插件']
  pluginManager.registerActivitybar({
    id: "1",
    title: "组件",
    icon: "icon-mokuai_1",
    component: KComponentView,
  });

  pluginManager.registerActivitybar({
    id: "12",
    title: "源码",
    icon: "icon-daima1",
    component: KSoundCode,
  });

  pluginManager.registerActivitybar({
    id: "1",
    title: "大纲",
    icon: "icon-juxingkaobei",
    component: KOutline,
  });

  // pluginManager.registerActivitybar({
  //   id: "1",
  //   title: "插件",
  //   icon: "apply",
  //   component: KComponentView,
  // });
}

// import { init } from "../../packages/init";
import { PluginManager } from "../pluginManager";
import { Form, FormItem, Modal } from "ant-design-vue";
export function useComponent(pluginManager: PluginManager) {
  pluginManager.registerComponent("Form", Form);
  pluginManager.registerComponent("FormItem", FormItem);
  pluginManager.registerComponent("Modal", Modal);
  pluginManager.registerComponent(
    "Checkbox",
    () => import("ant-design-vue/lib/checkbox"),
    "value"
  );

  pluginManager.addComponent(
    () => import("ant-design-vue/lib/input"),
    {
      label: "文本框",
      type: "input",
      field: "input",
      icon: "icon-write",
      isInput: true,
    },
    [
      {
        label: "字段名",
        type: "input",
        attrIndex: "field",
      },
      {
        label: "标题",
        type: "input",
        attrIndex: "label",
      },
      {
        label: "默认值",
        type: "input",
        attrIndex: "componentProps.defaultValue",
      },
      {
        label: "输入类型",
        type: "select",
        defaultValue: "text",
        componentProps: {
          options: [
            {
              label: "text",
              value: "text",
            },
            {
              label: "number",
              value: "number",
            },
            {
              label: "password",
              value: "password",
            },
          ],
        },
        attrIndex: "componentProps.type",
      },
    ]
  );

  pluginManager.addComponent(
    () => import("ant-design-vue/lib/input-number"),
    {
      label: "数字输入框",
      type: "number",
      icon: "icon-number",
      field: "number",
      isInput: true,
    },
    [
      {
        label: "字段名",
        type: "input",
        attrIndex: "field",
      },
      {
        label: "文字",
        type: "input",
        attrIndex: "label",
      },
    ]
  );
  pluginManager.addComponent(
    () => import("ant-design-vue/lib/radio/Group"),
    {
      label: "单选框",
      type: "radio",
      icon: "icon-danxuan-cuxiantiao",
      field: "radio",
      isInput: true,
      componentProps: {
        options: [
          {
            label: "选项1",
            value: "选项1",
          },
          {
            label: "选项2",
            value: "选项2",
          },
        ],
      },
    },
    [
      {
        label: "字段名",
        type: "input",
        attrIndex: "field",
      },
      {
        label: "默认值",
        type: "radio",
        attrIndex: "componentProps.defaultValue",
      },
      {
        label: "文字",
        type: "input",
        attrIndex: "label",
      },
    ]
  );
  pluginManager.addComponent(
    () => import("ant-design-vue/lib/checkbox/Group"),
    {
      label: "多选框",
      type: "checkbox",
      icon: "icon-duoxuan1",
      field: "checkbox",
      isInput: true,
      componentProps: {
        options: [
          {
            label: "选项1",
            value: "选项1",
          },
          {
            label: "选项2",
            value: "选项2",
          },
        ],
      },
    },
    [
      {
        label: "字段名",
        type: "input",
        attrIndex: "field",
      },
      {
        label: "默认值",
        type: "checkbox",
        attrIndex: "componentProps.defaultValue",
      },
      {
        label: "文字",
        type: "input",
        attrIndex: "label",
      },
    ]
  );

  pluginManager.addComponent(
    () => import("ant-design-vue/lib/select"),
    {
      label: "选择框",
      type: "select",
      icon: "icon-xiala",
      field: "select",
      isInput: true,
      componentProps: {
        options: [
          {
            label: "选项1",
            value: "选项1",
          },
          {
            label: "选项2",
            value: "选项2",
          },
        ],
      },
    },
    [
      {
        label: "字段名",
        type: "input",
        attrIndex: "field",
      },
      {
        label: "文字",
        type: "input",
        attrIndex: "label",
      },
      {
        label: "默认值",
        type: "select",
        attrIndex: "componentProps.defaultValue",
      },
    ]
  );
}

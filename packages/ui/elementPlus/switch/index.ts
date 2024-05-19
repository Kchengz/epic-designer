import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("element-plus")).ElSwitch,
  groupName: "表单",
  icon: "epic-icon-kaiguan3",
  defaultSchema: {
    label: "开关",
    type: "switch",
    field: "switch",
    input: true,
    componentProps: {
      defaultValue: false,
    },
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "switch",
        field: "componentProps.defaultValue",
      },
      {
        label: "ON状态值",
        type: "input",
        field: "componentProps.activeValue",
        componentProps: {
          placeholder: "请输入",
        },
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
        },
      },
      {
        label: "OFF状态值",
        type: "input",
        field: "componentProps.inactiveValue",
        componentProps: {
          placeholder: "请输入",
        },
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
        },
      },
      {
        label: "ON状态描述",
        type: "input",
        field: "componentProps.activeText",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "OFF状态描述",
        type: "input",
        field: "componentProps.inactiveText",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "default",
              value: "default",
            },
            {
              label: "small",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
      },
      {
        label: "宽度",
        type: "number",
        field: "componentProps.width",
        componentProps: {
          min: 50,
          placeholder: "请输入",
        },
      },
      {
        label: "文本点内显示",
        type: "switch",
        field: "componentProps.inlinePrompt",
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
        componentProps: {
          ruleType: "boolean",
        },
      },
    ],
    event: [
      {
        type: "change",
        describe: "状态发生变化时",
      },
    ],
  },
} as ComponentConfigModel;

// 设置默认值
function setDefaultValue(e) {
  let defaultValue = e.values.componentProps?.inactiveValue || false;
  // 如果inactiveValue === ''，则在下一个事件循环中删除 inactiveValue 属性
  if (e.values.componentProps.unCheckedValue === "") {
    delete e.values.componentProps.unCheckedValue;
  }

  // 如果activeValue === ''，则在下一个事件循环中删除 activeValue 属性
  if (e.values.componentProps.activeValue === "") {
    delete e.values.componentProps.activeValue;
  }

  // 检查是否已经有了 componentProps 对象，如果有，将默认值赋给 defaultValue 属性
  if (e.values.componentProps) {
    e.values.componentProps.defaultValue = defaultValue;
  } else {
    // 如果没有 componentProps 对象，则创建一个新对象并添加 defaultValue 属性
    e.values.componentProps = {
      defaultValue,
    };
  }
}

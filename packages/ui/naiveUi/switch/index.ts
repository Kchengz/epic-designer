import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: async () => (await import("naive-ui/lib/switch")).NSwitch,
  groupName: "表单",
  icon: "icon--epic--toggle-off-outline",
  sort: 930,
  defaultSchema: {
    label: "开关",
    type: "switch",
    field: "switch",
    input: true,
    componentProps: {
      defaultValue: false,
      round: true,
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
        label: "标题",
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
        field: "componentProps.checkedValue",
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
        field: "componentProps.uncheckedValue",
        componentProps: {
          placeholder: "请输入",
        },
        onChange(e) {
          setTimeout(() => setDefaultValue(e));
        },
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "大号",
              value: "large",
            },
            {
              label: "中等",
              value: "medium",
            },
            {
              label: "小型",
              value: "small",
            },
          ],
        },
      },
      {
        label: "圆型按钮",
        type: "switch",
        field: "componentProps.round",
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
  bindModel: "value",
} as ComponentConfigModel;

function setDefaultValue(e) {
  const defaultValue = e.values.componentProps?.uncheckedValue || false;
  // 如果uncheckedValue === ''，则在下一个事件循环中删除 uncheckedValue 属性
  if (e.values.componentProps.uncheckedValue === "") {
    delete e.values.componentProps.uncheckedValue;
  }

  // 如果checkedValue === ''，则在下一个事件循环中删除 checkedValue 属性
  if (e.values.componentProps.checkedValue === "") {
    delete e.values.componentProps.checkedValue;
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

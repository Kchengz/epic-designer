import { type ComponentConfigModel } from "@epic-designer/utils/pluginManager";
export default {
  component: () => import("./select"),
  defaultSchema: {
    label: "选择框",
    type: "select",
    icon: "icon-xiala",
    field: "select",
    input: true,
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
      placeholder: "请选择",
      size: 'default',
      effect: 'light',
      placement: 'bottom-start'
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
        type: "select",
        field: "componentProps.defaultValue",
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
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
        label: "可多选",
        type: "switch",
        field: "componentProps.multiple",
        onChange: ({ value, values }) => {
          if (value) {
            values.componentProps.defaultValue = [];
          } else {
            values.componentProps.defaultValue = null;
          }
        },
      },
      {
        label: "多选隐藏",
        type: "switch",
        field: "componentProps.collapseTags",
        show: ({ values }) => {
          return values.componentProps.multiple;
        },
      },
      {
        label: "隐藏提示",
        type: "switch",
        field: "componentProps.collapseTagsTooltip",
        show: ({ values }) => {
          return values.componentProps.multiple && values.componentProps.collapseTags;
        },
      },
      {
        label: "保留搜索关键字",
        type: "switch",
        field: "componentProps.reserveKeyword",
        show: ({ values }) => {
          return values.componentProps.multiple;
        },
      },
      {
        label: "标签类型",
        type: "select",
        defaultValue: "info",
        componentProps: {
          options: [
            {
              label: "success",
              value: "success",
            },
            {
              label: "info",
              value: "info",
            },
            {
              label: "warning",
              value: "warning",
            },
            {
              label: "danger",
              value: "danger",
            },
          ],
        },
        show: ({ values }) => {
          return values.componentProps.multiple;
        },
        field: "componentProps.tagType",
      },
      {
        label: "多选限制",
        type: "number",
        field: "componentProps.multipleLimit",
        show: ({ values }) => {
          return values.componentProps.multiple;
        },
      },
      {
        label: "提示主题",
        type: "select",
        componentProps: {
          options: [
            {
              label: "light",
              value: "light",
            },
            {
              label: "dark",
              value: "dark",
            },
          ],
        },
        field: "componentProps.effect",
      },
      {
        label: "可筛选",
        type: "switch",
        field: "componentProps.filterable",
      },
      {
        label: "允许创建条目",
        type: "switch",
        field: "componentProps.allowCreate",
      },
      {
        label: "下拉框位置",
        type: "select",
        defaultValue: "bottom-start",
        componentProps: {
          options: [
            {
              label: "top",
              value: "top",
            },
            {
              label: "top-start",
              value: "top-start",
            },
            {
              label: "top-end",
              value: "top-end",
            },
            {
              label: "bottom",
              value: "bottom",
            },
            {
              label: "bottom-start",
              value: "bottom-start",
            },
            {
              label: "bottom-end",
              value: "bottom-end",
            },
            {
              label: "left",
              value: "left",
            },
            {
              label: "left-start",
              value: "left-start",
            },
            {
              label: "left-end",
              value: "left-end",
            },
            {
              label: "right",
              value: "right",
            },
            {
              label: "right-start",
              value: "right-start",
            },
            {
              label: "right-end",
              value: "right-end",
            },
          ],
        },
        field: "componentProps.placement",
      },
      {
        label: "下拉框宽度与输入框相同",
        type: "switch",
        field: "componentProps.fitInputWidth",
      },
      {
        label: "无数据时文本",
        type: "input",
        field: "componentProps.noDataText",
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "配置选项",
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
      },
    ],
  },
} as ComponentConfigModel;

import { pluginManager as a } from "epic-designer";
import { NTabPane as p } from "naive-ui";
const n = {
  component: async () => (await import("../../index-de83403a.js").then((e) => e.i)).NInput,
  defaultSchema: {
    label: "输入框",
    type: "input",
    field: "input",
    icon: "epic-icon-write",
    input: !0,
    componentProps: {
      defaultValue: "",
      placeholder: "请输入",
      type: "text",
      size: "medium"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "tiny",
              value: "tiny"
            },
            {
              label: "small",
              value: "small"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        }
      },
      {
        label: "输入类型",
        type: "select",
        defaultValue: "text",
        componentProps: {
          options: [
            {
              label: "text",
              value: "text"
            },
            {
              label: "textarea",
              value: "textarea"
            },
            {
              label: "password",
              value: "password"
            }
          ]
        },
        field: "componentProps.type",
        onChange: ({ value: e, values: t }) => {
          e != "text" && (t.componentProps.pair = !1);
        }
      },
      {
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxlength",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "显示密码的时机",
        type: "select",
        field: "componentProps.showPasswordOn",
        componentProps: {
          options: [
            {
              label: "click",
              value: "click"
            },
            {
              label: "mousedown",
              value: "mousedown"
            }
          ],
          clearable: !0
        },
        show: ({ values: e }) => e.componentProps.type === "password"
      },
      {
        label: "行数",
        type: "number",
        field: "componentProps.rows",
        show: ({ values: e }) => e.componentProps.type === "textarea"
      },
      {
        label: "是否输入成对值",
        type: "switch",
        field: "componentProps.pair",
        show: ({ values: e }) => e.componentProps.type === "text"
      },
      {
        label: "分割符",
        type: "input",
        field: "componentProps.separator",
        show: ({ values: e }) => e.componentProps.type === "text" && e.componentProps.pair,
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "是否圆角",
        type: "switch",
        field: "componentProps.round"
      },
      {
        label: "是否统计字数",
        type: "switch",
        field: "componentProps.showCount"
      },
      {
        label: "自适应内容高度",
        type: "switch",
        field: "componentProps.autosize",
        show: ({ values: e }) => e.componentProps.type === "textarea"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "clear",
        describe: "清除 input 值"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, i = {
  component: async () => (await import("../../index-90e5cc4b.js").then((e) => e.i)).NInputNumber,
  defaultSchema: {
    label: "数字输入框",
    type: "number",
    icon: "epic-icon-number",
    field: "number",
    input: !0,
    componentProps: {
      placeholder: "请输入",
      size: "medium",
      buttonPlacement: "right"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "number",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "tiny",
              value: "tiny"
            },
            {
              label: "small",
              value: "small"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        }
      },
      {
        label: "控制按钮位置",
        type: "select",
        field: "componentProps.buttonPlacement",
        componentProps: {
          options: [
            {
              label: "both",
              value: "both"
            },
            {
              label: "right",
              value: "right"
            }
          ]
        }
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "精度",
        type: "number",
        field: "componentProps.precision",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
        componentProps: {
          ruleType: "number"
        }
      }
    ]
  },
  bindModel: "value"
}, c = {
  component: () => import("../../form-fef26142.js"),
  defaultSchema: {
    label: "表单",
    type: "form",
    icon: "epic-icon-daibanshixiang",
    componentProps: {
      name: "default",
      labelWidth: 100,
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      },
      hideRequiredMark: !1,
      labelPlacement: "left",
      labelAlign: "right",
      requireMarkPlacement: "right",
      size: "medium"
    },
    children: []
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "name",
        type: "input",
        field: "componentProps.name"
      },
      {
        label: "标签长度",
        type: "input",
        field: "componentProps.labelWidth"
      },
      {
        label: "标签位置",
        type: "select",
        field: "componentProps.labelPlacement",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "top",
              value: "top"
            }
          ]
        }
      },
      {
        label: "标签文本对齐方式",
        type: "select",
        field: "componentProps.labelAlign",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "right",
              value: "right"
            }
          ]
        }
      },
      {
        label: "必填星号的位置",
        type: "select",
        field: "componentProps.requireMarkPlacement",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "right",
              value: "right"
            }
          ]
        }
      },
      {
        label: "表单尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        }
      },
      {
        label: "scrollToError",
        type: "switch",
        field: "componentProps.scrollToError"
      },
      {
        label: "行内模式",
        type: "switch",
        field: "componentProps.inline"
      },
      // {
      //   label: '隐藏',
      //   type: 'switch',
      //   field: 'componentProps.hidden'
      // },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      }
    ],
    action: [
      {
        type: "getData",
        describe: "获取表单数据"
      },
      {
        type: "setData",
        describe: "设置表单数据"
      },
      {
        type: "validate",
        describe: "校验表单"
      }
    ]
  }
}, r = {
  component: () => import("../../formItem-01c503d2.js"),
  defaultSchema: {
    label: "表单项",
    type: "form-item",
    icon: "epic-icon-qiapian"
  },
  config: {}
}, s = {
  component: () => import("../../button-0e43d004.js"),
  defaultSchema: {
    label: "按钮",
    type: "button",
    field: "input",
    icon: "epic-icon-button-remove",
    input: !1,
    componentProps: {
      bordered: !0,
      type: "default",
      size: "medium"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "类型",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          options: [
            {
              label: "default",
              value: "default"
            },
            {
              label: "tertiary",
              value: "tertiary"
            },
            {
              label: "primary",
              value: "primary"
            },
            {
              label: "success",
              value: "success"
            },
            {
              label: "info",
              value: "info"
            },
            {
              label: "warning",
              value: "warning"
            },
            {
              label: "error",
              value: "error"
            }
          ]
        },
        field: "componentProps.type"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          placeholder: "请选择",
          options: [
            {
              label: "tiny",
              value: "tiny"
            },
            {
              label: "large",
              value: "large"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "是否块级",
        type: "switch",
        field: "componentProps.block"
      },
      {
        label: "显示边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "虚线框",
        type: "switch",
        field: "componentProps.dashed"
      },
      {
        label: "圆角按钮",
        type: "switch",
        field: "componentProps.round"
      },
      {
        label: "圆形按钮",
        type: "switch",
        field: "componentProps.circle"
      },
      {
        label: "按钮颜色",
        type: "color-picker",
        field: "componentProps.color"
      },
      {
        label: "是否透明",
        type: "switch",
        field: "componentProps.ghost"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ],
    event: [
      {
        type: "click",
        describe: "点击按钮时"
      },
      {
        type: "dblclick",
        describe: "双击按钮时"
      }
    ]
  }
}, d = {
  component: () => import("../../card-e513ab3f.js"),
  defaultSchema: {
    label: "卡片布局",
    type: "card",
    icon: "epic-icon-qiapian",
    children: []
  },
  groupName: "布局",
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, m = {
  component: () => import("../../row-0dad9b63.js"),
  defaultSchema: {
    label: "栅格布局",
    type: "row",
    icon: "epic-icon-zhage",
    childImmovable: !0,
    children: [
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        }
      },
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        }
      }
    ]
  },
  groupName: "布局",
  config: {
    attribute: [
      // {
      //   label: "垂直对齐方式",
      //   type: "select",
      //   componentProps: {
      //     style: { width: "100%" },
      //     options: [
      //       {
      //         label: "top",
      //         value: "top",
      //       },
      //       {
      //         label: "middle",
      //         value: "middle",
      //       },
      //       {
      //         label: "bottom",
      //         value: "bottom",
      //       },
      //     ],
      //     placeholder: "请选择",
      //   },
      //   field: "componentProps.align",
      // },
      // {
      //   label: "水平排列方式",
      //   type: "select",
      //   componentProps: {
      //     style: { width: "100%" },
      //     options: [
      //       {
      //         label: "start",
      //         value: "start",
      //       },
      //       {
      //         label: "end",
      //         value: "end",
      //       },
      //       {
      //         label: "center",
      //         value: "center",
      //       },
      //       {
      //         label: "space-around",
      //         value: "space-around",
      //       },
      //       {
      //         label: "space-between",
      //         value: "space-between",
      //       },
      //     ],
      //     placeholder: "请选择",
      //   },
      //   field: "componentProps.justify",
      // },
      {
        label: "栅格间距",
        type: "number",
        field: "componentProps.gutter",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "列编辑",
        type: "EColEditor",
        field: "children"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, b = {
  component: () => import("../../col-9d5dec01.js"),
  defaultSchema: {
    label: "栅格布局-列",
    type: "col",
    icon: "epic-icon-xiala",
    children: [],
    componentProps: {
      span: 6
    }
  },
  config: {
    attribute: [
      {
        label: "占位格数",
        type: "number",
        field: "componentProps.span"
      }
    ]
  }
}, u = {
  component: async () => (await import("../../index-a6551f41.js").then((e) => e.i)).NSelect,
  defaultSchema: {
    label: "选择框",
    type: "select",
    icon: "epic-icon-xiala",
    field: "select",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      placeholder: "请选择",
      size: "medium",
      placement: "bottom-start"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "select",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "tiny",
              value: "tiny"
            },
            {
              label: "small",
              value: "small"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        }
      },
      {
        label: "菜单弹出的位置",
        type: "select",
        field: "componentProps.placement",
        componentProps: {
          options: [
            {
              label: "top-start",
              value: "top-start"
            },
            {
              label: "top",
              value: "top"
            },
            {
              label: "top-end",
              value: "top-end"
            },
            {
              label: "right-start",
              value: "right-start"
            },
            {
              label: "right",
              value: "right"
            },
            {
              label: "right-end",
              value: "right-end"
            },
            {
              label: "bottom-start",
              value: "bottom-start"
            },
            {
              label: "bottom",
              value: "bottom"
            },
            {
              label: "bottom-end",
              value: "bottom-end"
            },
            {
              label: "left-start",
              value: "left-start"
            },
            {
              label: "left",
              value: "left"
            },
            {
              label: "left-end",
              value: "left-end"
            }
          ]
        }
      },
      {
        label: "可过滤",
        type: "switch",
        field: "componentProps.filterable"
      },
      {
        label: "允许创建新选项",
        type: "switch",
        field: "componentProps.tag",
        show: ({ values: e }) => e.componentProps.filterable
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "最大tag数",
        type: "number",
        field: "componentProps.maxTagCount",
        show: ({ values: e }) => e.componentProps.multiple,
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "配置选项"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值修改"
      }
    ]
  },
  bindModel: "value"
}, f = {
  component: () => import("../../radio-fbd641f0.js"),
  defaultSchema: {
    label: "单选框",
    type: "radio",
    icon: "epic-icon-danxuan-cuxiantiao",
    field: "radio",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      size: "medium"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "默认值",
        type: "radio",
        field: "componentProps.defaultValue"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "small",
              value: "small"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "配置选项"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  }
}, y = {
  component: () => import("../../checkbox-0945f6f5.js"),
  defaultSchema: {
    label: "复选框",
    type: "checkbox",
    icon: "epic-icon-duoxuan1",
    field: "checkbox",
    input: !0,
    componentProps: {
      // defaultValue: [],
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      size: "medium"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "默认值",
        type: "checkbox",
        field: "componentProps.defaultValue"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "最大勾选数",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最小勾选数",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "small",
              value: "small"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "配置选项"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
        componentProps: {
          ruleType: "array"
        }
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  }
}, h = {
  component: async () => (await import("../../index-29a3e102.js").then((e) => e.i)).NSlider,
  defaultSchema: {
    label: "滑块",
    type: "slider",
    icon: "epic-icon-menu",
    field: "slider",
    input: !0,
    componentProps: {
      placement: "top-start"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "slider",
        field: "componentProps.defaultValue"
      },
      {
        label: "键盘可控",
        type: "switch",
        field: "componentProps.keyboard"
      },
      {
        label: "范围选择",
        type: "switch",
        field: "componentProps.range",
        changeSync: !0,
        onChange: ({ value: e, values: t }) => {
          e ? t.componentProps.defaultValue = [0, 100] : t.componentProps.defaultValue = 0;
        }
      },
      {
        label: "倒转轨道",
        type: "switch",
        field: "componentProps.reverse"
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "一直显示提示",
        type: "switch",
        field: "componentProps.showTooltip"
      },
      {
        label: "垂直模式",
        type: "switch",
        field: "componentProps.vertical"
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "弹出位置",
        type: "select",
        field: "componentProps.placement",
        componentProps: {
          options: [
            {
              label: "top-start",
              value: "top-start"
            },
            {
              label: "top",
              value: "top"
            },
            {
              label: "top-end",
              value: "top-end"
            },
            {
              label: "right-start",
              value: "right-start"
            },
            {
              label: "right",
              value: "right"
            },
            {
              label: "right-end",
              value: "right-end"
            },
            {
              label: "bottom-start",
              value: "bottom-start"
            },
            {
              label: "bottom",
              value: "bottom"
            },
            {
              label: "bottom-end",
              value: "bottom-end"
            },
            {
              label: "left-start",
              value: "left-start"
            },
            {
              label: "left",
              value: "left"
            },
            {
              label: "left-end",
              value: "left-end"
            }
          ],
          clearable: !0,
          placeholder: "请输入"
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
        componentProps: {
          ruleType: "number"
        }
      }
    ],
    event: [
      {
        type: "input",
        describe: "拖拽实时触发"
      },
      {
        type: "change",
        describe: "拖拽结束改变值时"
      }
    ]
  },
  bindModel: "value"
}, P = {
  component: async () => (await import("../../index-84d53943.js").then((e) => e.i)).NColorPicker,
  defaultSchema: {
    label: "颜色选择器",
    type: "color-picker",
    field: "color-picker",
    icon: "epic-icon-yanse",
    input: !0,
    componentProps: {
      type: "color",
      modes: ["hex"],
      showAlpha: !0,
      size: "medium",
      placement: "bottom-start"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "color-picker",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          placeholder: "请选择",
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "菜单弹出的位置",
        type: "select",
        field: "componentProps.placement",
        componentProps: {
          options: [
            {
              label: "top-start",
              value: "top-start"
            },
            {
              label: "top",
              value: "top"
            },
            {
              label: "top-end",
              value: "top-end"
            },
            {
              label: "right-start",
              value: "right-start"
            },
            {
              label: "right",
              value: "right"
            },
            {
              label: "right-end",
              value: "right-end"
            },
            {
              label: "bottom-start",
              value: "bottom-start"
            },
            {
              label: "bottom",
              value: "bottom"
            },
            {
              label: "bottom-end",
              value: "bottom-end"
            },
            {
              label: "left-start",
              value: "left-start"
            },
            {
              label: "left",
              value: "left"
            },
            {
              label: "left-end",
              value: "left-end"
            }
          ]
        }
      },
      {
        label: "格式",
        type: "checkbox",
        field: "componentProps.modes",
        componentProps: {
          options: [
            {
              label: "rgb",
              value: "rgb"
            },
            {
              label: "hex",
              value: "hex"
            },
            {
              label: "hsl",
              value: "hsl"
            },
            {
              label: "hsv",
              value: "hsv"
            }
          ],
          max: 1
        }
      },
      {
        label: "展示预览块",
        type: "switch",
        field: "componentProps.showPreview"
      },
      {
        label: "可调节透明度",
        type: "switch",
        field: "componentProps.showAlpha"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ],
    action: []
  },
  bindModel: "value"
}, v = {
  component: async () => (await import("../../index-6e98f21e.js").then((e) => e.i)).NSwitch,
  defaultSchema: {
    label: "开关",
    type: "switch",
    icon: "epic-icon-kaiguan3",
    field: "switch",
    input: !0,
    componentProps: {
      defaultValue: !1,
      round: !0,
      size: "medium"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "switch",
        field: "componentProps.defaultValue"
      },
      {
        label: "ON状态值",
        type: "input",
        field: "componentProps.checkedValue",
        componentProps: {
          placeholder: "请输入"
        },
        onChange(e) {
          setTimeout(() => o(e));
        }
      },
      {
        label: "OFF状态值",
        type: "input",
        field: "componentProps.uncheckedValue",
        componentProps: {
          placeholder: "请输入"
        },
        onChange(e) {
          setTimeout(() => o(e));
        }
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "small",
              value: "small"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        }
      },
      {
        label: "圆型按钮",
        type: "switch",
        field: "componentProps.round"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
        componentProps: {
          ruleType: "boolean"
        }
      }
    ],
    event: [
      {
        type: "change",
        describe: "状态发生变化时"
      }
    ]
  },
  bindModel: "value"
};
function o(e) {
  var l;
  let t = ((l = e.values.componentProps) == null ? void 0 : l.uncheckedValue) || !1;
  e.values.componentProps.uncheckedValue === "" && delete e.values.componentProps.uncheckedValue, e.values.componentProps.checkedValue === "" && delete e.values.componentProps.checkedValue, e.values.componentProps ? e.values.componentProps.defaultValue = t : e.values.componentProps = {
    defaultValue: t
  };
}
const g = {
  component: async () => (await import("../../index-be15541b.js").then((e) => e.i)).NCascader,
  defaultSchema: {
    label: "级联选择器",
    type: "cascader",
    icon: "epic-icon-guanlian",
    field: "cascader",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      placeholder: "请选择",
      cascade: !1,
      showPath: !0,
      size: "medium",
      placement: "bottom-start"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "cascader",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "tiny",
              value: "tiny"
            },
            {
              label: "small",
              value: "small"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        }
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "多选时关联选项",
        type: "switch",
        field: "componentProps.cascade",
        show: ({ values: e }) => e.componentProps.multiple
      },
      {
        label: "分割符",
        type: "switch",
        field: "componentProps.separator"
      },
      {
        label: "显示选项路径",
        type: "switch",
        field: "componentProps.showPath"
      },
      {
        label: "可搜索",
        type: "switch",
        field: "componentProps.filterable"
      },
      {
        label: "菜单弹出的位置",
        type: "select",
        field: "componentProps.placement",
        componentProps: {
          options: [
            {
              label: "top-start",
              value: "top-start"
            },
            {
              label: "top",
              value: "top"
            },
            {
              label: "top-end",
              value: "top-end"
            },
            {
              label: "right-start",
              value: "right-start"
            },
            {
              label: "right",
              value: "right"
            },
            {
              label: "right-end",
              value: "right-end"
            },
            {
              label: "bottom-start",
              value: "bottom-start"
            },
            {
              label: "bottom",
              value: "bottom"
            },
            {
              label: "bottom-end",
              value: "bottom-end"
            },
            {
              label: "left-start",
              value: "left-start"
            },
            {
              label: "left",
              value: "left"
            },
            {
              label: "left-end",
              value: "left-end"
            }
          ]
        }
      },
      {
        label: "最大tag显示数",
        type: "number",
        field: "componentProps.maxTagCount",
        show: ({ values: e }) => e.componentProps.multiple
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        componentProps: {
          tree: !0
        },
        describe: "配置选项"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
        componentProps: {
          ruleType: "array"
        }
      }
    ],
    event: [
      {
        type: "change",
        describe: "选中节点变化时"
      },
      {
        type: "close",
        describe: "面板的关闭事件"
      }
    ],
    action: [
      {
        type: "getCheckedNodes",
        describe: "获取当前选中节点"
      }
    ]
  },
  bindModel: "value"
}, w = {
  component: () => import("../../collapse-4d0283b7.js"),
  defaultSchema: {
    label: "折叠面板",
    type: "collapse",
    icon: "epic-icon-xiala",
    children: [
      {
        type: "collapse-item",
        children: [],
        componentProps: {
          span: 12
        },
        id: "g062zikd2jk001"
      },
      {
        type: "collapse-item",
        children: [],
        componentProps: {
          span: 12
        },
        id: "gy5z9jtfb3s001"
      }
    ]
  },
  config: {
    attribute: [
      {
        label: "折叠项管理",
        type: "EColEditor",
        field: "children"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, E = {
  component: () => import("../../collapseItem-b8c21816.js"),
  defaultSchema: {
    label: "折叠项",
    type: "collapse-item",
    icon: "epic-icon-xiala",
    children: []
  },
  config: {
    attribute: []
  }
}, x = {
  component: async () => (await import("../../index-cdd027b6.js").then((e) => e.i)).NDatePicker,
  defaultSchema: {
    label: "日期选择器",
    type: "date",
    icon: "epic-icon-calendar",
    field: "date",
    input: !0,
    componentProps: {
      type: "date",
      placeholder: "请选择",
      size: "medium"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "date",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "small",
              value: "small"
            },
            {
              label: "medium",
              value: "medium"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        }
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "格式",
        type: "input",
        field: "componentProps.format",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "显示类型",
        type: "select",
        field: "componentProps.type",
        componentProps: {
          options: [
            {
              label: "选择日期",
              value: "date"
            },
            {
              label: "日期时间",
              value: "datetime"
            },
            {
              label: "日期范围",
              value: "daterange"
            },
            {
              label: "日期时间范围",
              value: "datetimerange"
            },
            {
              label: "月份",
              value: "month"
            },
            {
              label: "月份范围",
              value: "monthrange"
            },
            {
              label: "年份",
              value: "year"
            },
            {
              label: "季度",
              value: "quarter"
            }
          ]
        }
      },
      {
        label: "分割符",
        type: "input",
        field: "componentProps.separator",
        componentProps: {
          placeholder: "请输入",
          clearable: !0
        },
        show: ({ values: e }) => ["daterange", "datetimerange", "monthrange"].includes(e.componentProps.type)
      },
      {
        label: "start框占位符",
        type: "input",
        field: "componentProps.startPlaceholder",
        componentProps: {
          placeholder: "请输入",
          clearable: !0
        },
        show: ({ values: e }) => ["daterange", "datetimerange", "monthrange"].includes(e.componentProps.type)
      },
      {
        label: "end框占位符",
        type: "input",
        field: "componentProps.endPlaceholder",
        componentProps: {
          placeholder: "请输入",
          clearable: !0
        },
        show: ({ values: e }) => ["daterange", "datetimerange", "monthrange"].includes(e.componentProps.type)
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "formatted-value"
}, k = {
  component: () => import("../../uploadFile-68c81aca.js"),
  defaultSchema: {
    label: "上传文件",
    type: "upload-file",
    icon: "epic-icon-upload",
    field: "uploadFile",
    input: !0,
    componentProps: {
      action: "https://epic.kcz66.com/static/upload-img.json"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "请求地址",
        type: "input",
        field: "componentProps.action"
      },
      {
        label: "上传文件字段",
        type: "input",
        field: "componentProps.name",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "允许上传最大数量",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          min: 0,
          placeholder: "请输入"
        }
      },
      {
        label: "展示文件列表",
        type: "switch",
        field: "componentProps.showFileList"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
        componentProps: {
          ruleType: "array"
        }
      }
    ]
  },
  bindModel: "modelValue"
}, N = {
  component: () => import("../../uploadImage-d0c78d2f.js"),
  defaultSchema: {
    label: "上传图片",
    type: "upload-image",
    icon: "epic-icon-image",
    field: "uploadImage",
    input: !0,
    componentProps: {
      action: "https://epic.kcz66.com/static/upload-img.json"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "请求地址",
        type: "input",
        field: "componentProps.action"
      },
      {
        label: "上传文件字段",
        type: "input",
        field: "componentProps.name",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "允许上传最大数量",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          min: 0,
          placeholder: "请输入"
        }
      },
      {
        label: "展示文件列表",
        type: "switch",
        field: "componentProps.showFileList"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
        componentProps: {
          ruleType: "array"
        }
      }
    ]
  },
  bindModel: "modelValue"
}, z = {
  component: () => import("../../modal-b41ffb30.js"),
  defaultSchema: {
    label: "模态框",
    type: "modal",
    icon: "epic-icon-xiala",
    children: []
  },
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "title"
      }
    ]
  }
};
function C(e = a) {
  e.component(
    "FormItem",
    async () => (await import("../../index-1645fb1f.js").then((l) => l.i)).NFormItem
  ), e.component(
    "Tabs",
    async () => (await import("../../index-dfd5768f.js").then((l) => l.i)).NTabs
  ), e.component("TabPane", p), e.component(
    "Collapse",
    async () => (await import("../../index-dcd9860f.js").then((l) => l.i)).NCollapse
  ), e.component(
    "CollapseItem",
    async () => (await import("../../index-dcd9860f.js").then((l) => l.i)).NCollapseItem
  ), [
    c,
    r,
    n,
    i,
    f,
    y,
    x,
    u,
    v,
    P,
    g,
    h,
    k,
    N,
    s,
    d,
    m,
    b,
    w,
    E,
    z
  ].forEach((l) => {
    e.registerComponent(l);
  }), e.setInitialized(!0);
}
export {
  C as setupNaiveUi
};

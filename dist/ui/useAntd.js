const l = {
  component: () => import("../index.69a5788e.js").then((e) => e.i),
  defaultSchema: {
    label: "\u6587\u672C\u6846",
    type: "input",
    field: "input",
    icon: "icon-write",
    isInput: !0
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6807\u9898",
        type: "input",
        field: "label"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "input",
        field: "componentProps.defaultValue"
      },
      {
        label: "\u8F93\u5165\u7C7B\u578B",
        type: "select",
        defaultValue: "text",
        componentProps: {
          options: [
            {
              label: "text",
              value: "text"
            },
            {
              label: "number",
              value: "number"
            },
            {
              label: "password",
              value: "password"
            }
          ]
        },
        field: "componentProps.type"
      },
      {
        label: "\u663E\u793A",
        type: "switch",
        field: "show",
        componentProps: {}
      },
      {
        label: "\u7981\u7528",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "\u8868\u5355\u6821\u9A8C",
        type: "k-rule-editor",
        layout: "vertical",
        field: "rules",
        describe: "\u6821\u9A8C\u89C4\u5219\u9700\u8981\u914D\u5408\u8868\u5355\u4F7F\u7528"
      }
    ],
    event: [
      {
        type: "input",
        describe: "\u8F93\u5165\u503C"
      },
      {
        type: "change",
        describe: "\u503C\u4FEE\u6539"
      },
      {
        type: "pressEnter",
        describe: "\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03"
      },
      {
        type: "focus",
        describe: "\u83B7\u53D6\u7126\u70B9"
      },
      {
        type: "blur",
        describe: "\u5931\u53BB\u7126\u70B9"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "\u4F7F input \u83B7\u53D6\u7126\u70B9"
      },
      {
        type: "blur",
        describe: "\u4F7F input \u5931\u53BB\u7126\u70B9"
      },
      {
        type: "select",
        describe: "\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57"
      }
    ]
  },
  bindModel: "value"
}, o = {
  component: () => import("../index.b854c84e.js").then((e) => e.i),
  defaultSchema: {
    label: "\u6570\u5B57\u8F93\u5165\u6846",
    type: "number",
    icon: "icon-number",
    field: "number",
    isInput: !0,
    componentProps: {
      style: { width: "100%" }
    }
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      }
    ],
    event: [
      {
        type: "input",
        describe: "\u8F93\u5165\u503C"
      },
      {
        type: "change",
        describe: "\u503C\u4FEE\u6539"
      },
      {
        type: "pressEnter",
        describe: "\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03"
      },
      {
        type: "focus",
        describe: "\u83B7\u53D6\u7126\u70B9"
      },
      {
        type: "blur",
        describe: "\u5931\u53BB\u7126\u70B9"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "\u4F7F input \u83B7\u53D6\u7126\u70B9"
      },
      {
        type: "blur",
        describe: "\u4F7F input \u5931\u53BB\u7126\u70B9"
      },
      {
        type: "select",
        describe: "\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57"
      }
    ]
  },
  bindModel: "value"
}, n = {
  component: async () => (await import("../index.69a5788e.js").then((e) => e.i)).InputPassword,
  defaultSchema: {
    label: "\u5BC6\u7801\u8F93\u5165\u6846",
    type: "password",
    icon: "icon-number",
    field: "password",
    isInput: !0
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      }
    ],
    event: [
      {
        type: "input",
        describe: "\u8F93\u5165\u503C"
      },
      {
        type: "change",
        describe: "\u503C\u4FEE\u6539"
      },
      {
        type: "pressEnter",
        describe: "\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03"
      },
      {
        type: "focus",
        describe: "\u83B7\u53D6\u7126\u70B9"
      },
      {
        type: "blur",
        describe: "\u5931\u53BB\u7126\u70B9"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "\u4F7F input \u83B7\u53D6\u7126\u70B9"
      },
      {
        type: "blur",
        describe: "\u4F7F input \u5931\u53BB\u7126\u70B9"
      },
      {
        type: "select",
        describe: "\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57"
      }
    ]
  },
  bindModel: "value"
}, i = {
  component: () => import("../Group.343845dc.js").then((e) => e.G),
  defaultSchema: {
    label: "\u5355\u9009\u6846",
    type: "radio",
    icon: "icon-danxuan-cuxiantiao",
    field: "radio",
    isInput: !0,
    componentProps: {
      options: [
        {
          label: "\u9009\u98791",
          value: "\u9009\u98791"
        },
        {
          label: "\u9009\u98792",
          value: "\u9009\u98792"
        }
      ]
    }
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "radio",
        field: "componentProps.defaultValue"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      }
    ]
  },
  bindModel: "value"
}, p = {
  component: () => import("../Group.38f606f8.js").then((e) => e.G),
  defaultSchema: {
    label: "\u591A\u9009\u6846",
    type: "checkbox",
    icon: "icon-duoxuan1",
    field: "checkbox",
    isInput: !0,
    componentProps: {
      options: [
        {
          label: "\u9009\u98791",
          value: "\u9009\u98791"
        },
        {
          label: "\u9009\u98792",
          value: "\u9009\u98792"
        }
      ]
    }
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "checkbox",
        field: "componentProps.defaultValue"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      }
    ]
  },
  bindModel: "value"
}, a = {
  component: () => import("../index.08694b0c.js").then((e) => e.i),
  defaultSchema: {
    label: "\u9009\u62E9\u6846",
    type: "select",
    icon: "icon-xiala",
    field: "select",
    isInput: !0,
    componentProps: {
      options: [
        {
          label: "\u9009\u98791",
          value: "\u9009\u98791"
        },
        {
          label: "\u9009\u98792",
          value: "\u9009\u98792"
        }
      ]
    }
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "select",
        field: "componentProps.defaultValue"
      }
    ],
    event: [
      {
        type: "change",
        describe: "\u503C\u4FEE\u6539"
      },
      {
        type: "focus",
        describe: "\u83B7\u53D6\u7126\u70B9"
      },
      {
        type: "blur",
        describe: "\u5931\u53BB\u7126\u70B9"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "\u4F7F input \u83B7\u53D6\u7126\u70B9"
      },
      {
        type: "blur",
        describe: "\u4F7F input \u5931\u53BB\u7126\u70B9"
      },
      {
        type: "select",
        describe: "\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57"
      }
    ]
  },
  bindModel: "value"
}, c = {
  component: () => import("../index.e2cf92c7.js").then((e) => e.i),
  defaultSchema: {
    label: "\u65F6\u95F4\u9009\u62E9\u5668",
    type: "time",
    icon: "icon-xiala",
    field: "time",
    isInput: !0,
    componentProps: {
      valueFormat: "HH:mm:ss"
    }
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "time",
        field: "componentProps.defaultValue"
      }
    ]
  },
  bindModel: "value"
}, r = {
  component: () => import("../KDatePicker.127f6eb9.js"),
  defaultSchema: {
    label: "\u65E5\u671F\u9009\u62E9\u5668",
    type: "date",
    icon: "icon-xiala",
    field: "date",
    isInput: !0,
    componentProps: {
      valueFormat: "YYYY-MM-DD",
      type: "daterange"
    }
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "date",
        field: "componentProps.defaultValue"
      },
      {
        label: "\u683C\u5F0F",
        type: "input",
        field: "componentProps.valueFormat"
      },
      {
        label: "\u663E\u793A\u7C7B\u578B",
        type: "select",
        field: "componentProps.type",
        componentProps: {
          options: [
            {
              label: "\u65E5\u671F",
              value: "date"
            },
            {
              label: "\u6708\u4EFD",
              value: "month"
            },
            {
              label: "\u65E5\u671F\u8303\u56F4",
              value: "daterange"
            }
          ]
        }
      }
    ]
  },
  bindModel: "value"
}, d = {
  component: () => import("../index.b73b2774.js").then((e) => e.i),
  defaultSchema: {
    label: "\u7EA7\u8054\u9009\u62E9\u5668",
    type: "cascader",
    field: "cascader",
    icon: "icon-write",
    isInput: !0
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6807\u9898",
        type: "input",
        field: "label"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "input",
        field: "componentProps.defaultValue"
      },
      {
        label: "\u8F93\u5165\u7C7B\u578B",
        type: "select",
        defaultValue: "text",
        componentProps: {
          options: [
            {
              label: "text",
              value: "text"
            },
            {
              label: "number",
              value: "number"
            },
            {
              label: "password",
              value: "password"
            }
          ]
        },
        field: "componentProps.type"
      }
    ]
  },
  bindModel: "value"
}, s = {
  component: () => import("../index.47d937fb.js").then((e) => e.i),
  defaultSchema: {
    label: "\u5F00\u5173",
    type: "switch",
    icon: "icon-number",
    field: "switch",
    isInput: !0,
    componentProps: {}
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "switch",
        field: "componentProps.defaultValue"
      }
    ]
  },
  bindModel: "checked"
}, b = {
  component: () => import("../KUploadImage.a7a68826.js"),
  defaultSchema: {
    label: "\u4E0A\u4F20\u56FE\u7247",
    type: "upload-image",
    icon: "icon-number",
    field: "uploadImage",
    isInput: !0,
    componentProps: {
      action: "http://cdn.kcz66.com/upload-img.txt"
    }
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      }
    ]
  },
  bindModel: "modelValue"
}, m = {
  component: () => import("../KUploadFile.ab310062.js"),
  defaultSchema: {
    label: "\u4E0A\u4F20\u6587\u4EF6",
    type: "upload-file",
    icon: "icon-number",
    field: "uploadFile",
    isInput: !0,
    componentProps: {
      action: "http://cdn.kcz66.com/upload-img.txt"
    }
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6587\u5B57",
        type: "input",
        field: "label"
      }
    ]
  },
  bindModel: "modelValue"
}, f = {
  component: () => import("../KCard.879ad3d7.js"),
  defaultSchema: {
    label: "\u5361\u7247\u5E03\u5C40",
    type: "card",
    icon: "icon-xiala",
    children: []
  },
  config: {
    attribute: [
      {
        label: "\u6807\u9898",
        type: "input",
        field: "label"
      }
    ]
  }
}, y = {
  component: () => import("../KRow.0372a333.js"),
  defaultSchema: {
    label: "\u6805\u683C\u5E03\u5C40",
    type: "row",
    icon: "icon-xiala",
    children: [
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        },
        id: "g062zikd2jk00"
      },
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        },
        id: "gy5z9jtfb3s00"
      }
    ]
  },
  config: {
    attribute: [
      {
        label: "\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",
        type: "select",
        componentProps: {
          style: { width: "100%" },
          options: [
            {
              label: "top",
              value: "top"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "bottom",
              value: "bottom"
            }
          ]
        },
        field: "componentProps.align"
      },
      {
        label: "\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
        type: "select",
        componentProps: {
          style: { width: "100%" },
          options: [
            {
              label: "start",
              value: "start"
            },
            {
              label: "end",
              value: "end"
            },
            {
              label: "center",
              value: "center"
            },
            {
              label: "space-around",
              value: "space-around"
            },
            {
              label: "space-around",
              value: "space-around"
            }
          ]
        },
        field: "componentProps.justify"
      },
      {
        label: "\u6805\u683C\u95F4\u8DDD",
        type: "input",
        field: "componentProps.gutter"
      },
      {
        label: "\u5217\u7F16\u8F91",
        type: "k-col-editor",
        field: "children"
      }
    ]
  }
}, B = {
  component: () => import("../KCol.0d2def4d.js"),
  defaultSchema: {
    label: "\u6805\u683C\u5E03\u5C40-\u5217",
    type: "col",
    icon: "icon-xiala",
    children: [],
    componentProps: {
      span: 6
    }
  },
  config: {
    attribute: [
      {
        label: "\u5360\u4F4D\u683C\u6570",
        type: "number",
        field: "componentProps.span"
      }
    ]
  }
}, h = {
  component: () => import("../KTabs.446c9aa8.js"),
  defaultSchema: {
    label: "\u6807\u7B7E\u9875",
    type: "tabs",
    icon: "icon-xiala",
    children: [
      {
        type: "tab-pane",
        children: [],
        id: "sdfsdf",
        componentProps: {
          tab: "\u6807\u7B7E1",
          key: 123
        }
      },
      {
        type: "tab-pane",
        children: [],
        id: "sdfsdf2",
        componentProps: {
          tab: "\u6807\u7B7E2",
          key: 2
        }
      }
    ]
  },
  config: {
    attribute: [
      {
        label: "\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",
        type: "input",
        field: "componentProps.align"
      },
      {
        label: "\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
        type: "input",
        field: "componentProps.justify"
      },
      {
        label: "\u6805\u683C\u95F4\u8DDD",
        type: "input",
        field: "componentProps.gutter"
      },
      {
        label: "\u81EA\u52A8\u6362\u884C",
        type: "switch",
        field: "componentProps.wrap"
      }
    ]
  }
}, E = {
  component: () => import("../KTabPane.2991d3cb.js"),
  defaultSchema: {
    label: "\u6807\u7B7E\u5185\u5BB9",
    type: "tab-pane",
    icon: "icon-xiala",
    children: [],
    componentProps: {
      tab: "\u6807\u7B7E",
      key: "1"
    }
  },
  config: {
    attribute: [
      {
        label: "\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",
        type: "input",
        field: "componentProps.tab"
      }
    ]
  }
}, F = {
  component: () => import("../KForm.e1473349.js"),
  defaultSchema: {
    label: "\u8868\u5355",
    type: "form",
    icon: "icon-qiapian",
    labelWidth: 100,
    name: "default",
    componentProps: {
      layout: "horizontal",
      labelWidth: 100,
      labelLayout: "flex",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      },
      hideRequiredMark: !1
    },
    children: []
  },
  config: {
    attribute: [
      {
        label: "name",
        type: "input",
        field: "name"
      },
      {
        label: "\u6807\u7B7E\u5E03\u5C40",
        type: "radio",
        field: "componentProps.labelLayout",
        componentProps: {
          options: [
            {
              label: "\u56FA\u5B9A\u5BBD\u5EA6",
              value: "fixed"
            },
            {
              label: "\u81EA\u9002\u5E94\u5BBD\u5EA6",
              value: "flex"
            }
          ]
        }
      },
      {
        label: "name",
        type: "input",
        field: "name"
      },
      {
        label: "labelWidth",
        type: "input",
        field: "componentProps.labelWidth",
        show: ({ values: e }) => {
          var t;
          return ((t = e.componentProps) == null ? void 0 : t.labelLayout) === "fixed";
        }
      },
      {
        label: "labelCol",
        type: "input",
        field: "componentProps.labelCol.span",
        show: ({ values: e }) => {
          var t;
          return ((t = e.componentProps) == null ? void 0 : t.labelLayout) === "flex";
        }
      },
      {
        label: "wrapperCol",
        type: "input",
        field: "componentProps.wrapperCol.span",
        show: ({ values: e }) => {
          var t;
          return ((t = e.componentProps) == null ? void 0 : t.labelLayout) === "flex";
        }
      }
    ]
  }
}, P = {
  component: () => import("../KFormItem.016a9bda.js"),
  defaultSchema: {
    label: "\u8868\u5355\u9879",
    type: "form-item",
    icon: "icon-qiapian"
  },
  config: {}
}, D = {
  component: () => import("../KButton.16e15cea.js"),
  defaultSchema: {
    label: "\u6309\u94AE",
    type: "button",
    field: "input",
    icon: "icon-write",
    isInput: !1
  },
  config: {
    attribute: [
      {
        label: "\u6807\u9898",
        type: "input",
        field: "label"
      },
      {
        label: "\u7C7B\u578B",
        type: "select",
        componentProps: {
          placeholder: "\u8BF7\u9009\u62E9",
          clearable: !0,
          options: [
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
              label: "warning",
              value: "warning"
            }
          ]
        },
        field: "componentProps.type"
      },
      {
        label: "\u6734\u7D20\u6309\u94AE",
        type: "switch",
        field: "componentProps.plain"
      },
      {
        label: "\u5706\u89D2\u6309\u94AE",
        type: "switch",
        field: "componentProps.round"
      },
      {
        label: "\u5706\u5F62\u6309\u94AE",
        type: "switch",
        field: "componentProps.circle"
      }
    ]
  }
}, C = {
  component: () => import("../index.69a5788e.js").then((e) => e.i),
  defaultSchema: {
    label: "\u989C\u8272\u9009\u62E9\u5668",
    type: "color-picker",
    field: "color-picker",
    icon: "icon-write",
    isInput: !0,
    componentProps: {
      type: "color",
      style: {
        width: "80px"
      }
    }
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6807\u9898",
        type: "input",
        field: "label"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "input",
        field: "componentProps.defaultValue"
      },
      {
        label: "\u663E\u793A",
        type: "switch",
        field: "show",
        componentProps: {}
      },
      {
        label: "\u7981\u7528",
        type: "switch",
        field: "componentProps.disabled"
      }
    ],
    event: [
      {
        type: "input",
        describe: "\u8F93\u5165\u503C"
      },
      {
        type: "change",
        describe: "\u503C\u4FEE\u6539"
      },
      {
        type: "focus",
        describe: "\u83B7\u53D6\u7126\u70B9"
      },
      {
        type: "blur",
        describe: "\u5931\u53BB\u7126\u70B9"
      }
    ],
    action: [
      {
        type: "select",
        describe: "\u9009\u4E2D\u6587\u5B57"
      }
    ]
  },
  bindModel: "value"
};
function v(e) {
  e.component("Modal", () => import("../index.8f96deb8.js").then((u) => u.i)), e.component(
    "Collapse",
    () => import("../index.cc844bc1.js").then((u) => u.i)
  ), e.component(
    "CollapseItem",
    () => import("../CollapsePanel.9c465ea3.js").then((u) => u.C)
  ), e.component("Tabs", () => import("../index.05f71c48.js").then((u) => u.i)), e.component(
    "TabPane",
    async () => (await import("../index.05f71c48.js").then((u) => u.i)).TabPane
  ), [
    F,
    P,
    l,
    o,
    n,
    i,
    p,
    a,
    c,
    r,
    d,
    s,
    b,
    m,
    f,
    y,
    B,
    h,
    E,
    D,
    C
  ].forEach((u) => {
    e.registerComponent(u);
  }), e.setSchemaGroup([
    {
      title: "\u8F93\u5165\u7EC4\u4EF6",
      list: [
        "form",
        "input",
        "number",
        "password",
        "select",
        "checkbox",
        "radio",
        "date",
        "time",
        "upload-file",
        "upload-image",
        "cascader",
        "switch",
        "button",
        "color-picker"
      ]
    },
    {
      title: "\u5E03\u5C40\u7EC4\u4EF6",
      list: [
        "card",
        "row"
      ]
    }
  ]);
}
export {
  v as useAntd
};

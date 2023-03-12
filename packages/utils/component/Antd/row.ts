import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: () => import("./src/KRow"),
  defaultSchema: {
    label: "栅格布局",
    type: "row",
    icon: "icon-xiala",
    children: [
      {
        "type": "col",
        "children": [],
        "componentProps": {
          "span": 12
        },
        "id": "g062zikd2jk00"
      },
      {
        "type": "col",
        "children": [],
        "componentProps": {
          "span": 12
        },
        "id": "gy5z9jtfb3s00"
      }
    ]
  },
  config: {
    attribute: [
      {
        label: "垂直对齐方式",
        type: "select",
        componentProps: {
          style: { width: '100%' },
          options: [
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'middle',
              value: 'middle',
            },
            {
              label: 'bottom',
              value: 'bottom',
            },
          ]
        },
        attrIndex: "componentProps.align",
      },
      {
        label: "水平排列方式",
        type: "select",
        componentProps: {
          style: { width: '100%' },
          options: [
            {
              label: 'start',
              value: 'start',
            },
            {
              label: 'end',
              value: 'end',
            },
            {
              label: 'center',
              value: 'center',
            },
            {
              label: 'space-around',
              value: 'space-around',
            },
            {
              label: 'space-around',
              value: 'space-around',
            },
          ]
        },
        attrIndex: "componentProps.justify",
      },
      {
        label: "栅格间距",
        type: "input",
        attrIndex: "componentProps.gutter",
      },
      {
        label: "列编辑",
        type: "k-col-editor",
        attrIndex: "children",
      },


    ],
  },
} as ComponentConfigModel;

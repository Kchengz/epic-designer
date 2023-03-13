import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: () => import("./src/KUploadImage"),
  defaultSchema: {
    label: "上传图片",
    type: "upload-image",
    icon: "icon-number",
    field: "uploadImage",
    isInput: true,
    componentProps: {
      action: "http://cdn.kcz66.com/upload-img.txt",
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
    ],
  },
  bindModel: "modelValue",
} as ComponentConfigModel;

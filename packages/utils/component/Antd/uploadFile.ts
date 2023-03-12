import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: () => import("./src/KUploadFile"),
  defaultSchema: {
    label: "上传文件",
    type: "upload-file",
    icon: "icon-number",
    field: "uploadFile",
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
        attrIndex: "field",
      },
      {
        label: "文字",
        type: "input",
        attrIndex: "label",
      },
    ],
  },
  bindModel: "modelValue",
} as ComponentConfigModel;

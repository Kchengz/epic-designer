export default {
  component: () => import("./KUploadImage"),
  schema: {
    label: "上传图片",
    type: "upload-image",
    icon: "icon-number",
    field: "uploadImage",
    isInput: true,
    componentProps: {
      action: "http://cdn.kcz66.com/upload-img.txt",
    },
  },
  atteditSchemas: [
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
  bindModel: "modelValue",
};

import { defineComponent, h, PropType, computed, ref, watch } from "vue";
import Upload from "ant-design-vue/lib/upload";
import message from "ant-design-vue/lib/message";
import Image from "ant-design-vue/lib/image";
import type {
  UploadChangeParam,
  UploadProps,
  UploadFile,
} from "ant-design-vue";

// 封装上传文件组件
export default defineComponent({
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Array as PropType<UploadProps["fileList"]>,
      default: [],
    },
  },
  setup(props, { emit, attrs }) {
    const fileList = ref<UploadProps["fileList"]>([]);

    const imgUrl = ref("");
    const visible = ref(false);
    const setVisible = (value: boolean): void => {
      visible.value = value;
    };

    watch(fileList, (e) => {
      emit("update:modelValue", e);
    });
    // 处理传递进来的值
    watch(
      () => props.modelValue,
      (e) => {
        if (e && e.length > 0 && fileList.value) {
          // props modelValue 等于 data 不进行处理
          if (fileList.value === e) return;
          fileList.value.length = 0;
          fileList.value.push(...e);
        }
      },
      { deep: true, immediate: true }
    );

    function handleUpdate(e: UploadProps["fileList"]) {
      fileList.value = e;
    }

    // 处理数据结果
    const handleChange = (info: UploadChangeParam) => {
      if (info.file.status === "uploading") {
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        console.log(info.file.response);
        const url = info.file.response?.data?.url;
        console.log(url);

        if (!info.file.url && !url) {
          info.file.status = "error";
          message.error("上传失败");
          return;
        }
        // 赋值url
        info.file.url = url;
        info.file.thumbUrl = url;
      }

      if (info.file.status === "error") {
        message.error("upload error");
      }
    };

    // 上传前处理
    const beforeUpload = (file: any) => {
      // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      // if (!isJpgOrPng) {
      //   message.error('您只能上传JPG/PNG文件!');
      // }
      // const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isLt2M) {
      //   message.error('图片大小超过 2MB!');
      // }
      // return isJpgOrPng && isLt2M;
    };

    const getUploadProps = computed<UploadProps>(() => ({
      ...attrs,
      "list-type": "picture-card",
      "onUpdate:file-list": handleUpdate,
      "onBefore-upload": beforeUpload,
      onChange: handleChange,
      onPreview: handlePreview,
    }));

    /**
     * 预览功能
     * @param {*} e
     */
    function handlePreview(e: UploadFile) {
      if (!e.url) return;
      imgUrl.value = e.url;
      setVisible(true);
    }

    /**
     * 预览异常处理
     */
    function previewError() {
      if (!imgUrl.value) return false;
      message.error("图片地址无法访问!");
    }

    return () => {
      // const type = attrs.type;
      return h(
        "div",
        {
          class: "k-upload-image",
        },
        {
          default: () => [
            h(Upload, getUploadProps, {
              default: () => [
                h("div", null, {
                  default: () => [
                    h("span", {
                      class: "iconfont icon-shangchuan1",
                      style: { "margin-right": "2px" },
                    }),
                    h(
                      "div",
                      { class: "ant-upload-text" },
                      { default: () => "点击上传" }
                    ),
                  ],
                }),
              ],
            }),
            h(()=>Image, {
              style: { display: "none" },
              src: imgUrl,
              preview: {
                visible: visible,
                onVisibleChange: setVisible,
              },
              onError: previewError,
            }),
          ],
        }
      );
    };
  },
});

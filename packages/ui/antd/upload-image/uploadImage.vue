<template>
  <div class="epic-upload-image">
    <Upload v-bind="getUploadProps">
      <div v-if="(fileList?.length ?? 0) < (props.maxCount ?? 999)">
        <span class="iconfont epic-icon-shangchuan1 mr-2px"></span>
        <div class="ant-upload-text">点击上传</div>
      </div>
    </Upload>
    <Image
      style="display: none"
      :src="imgUrl"
      :preview="{
        visible,
        onVisibleChange: setVisible,
      }"
      @error="previewError"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  type PropType,
  defineComponent,
  h,
  nextTick,
  computed,
  ref,
  watch,
  useAttrs
} from "vue";
import { Upload, message, Image } from "ant-design-vue";
import type {
  UploadChangeParam,
  UploadProps,
  UploadFile,
} from "ant-design-vue";
const attrs = useAttrs()
const props = defineProps({
  modelValue: {
      type: Array as PropType<UploadProps["fileList"]>,
      default: () => [],
    },
    maxCount:{
      type: Number,
    }
})

const emits = defineEmits(["update:modelValue", "change"])

    const fileList = ref<UploadProps["fileList"]>([]);

    const imgUrl = ref("");
    const visible = ref(false);
    const setVisible = (value: boolean): void => {
      visible.value = value;
    };

    watch(fileList, (e) => {
      emits("update:modelValue", e);
      emits("change", e);
    });
    // 处理传递进来的值
    watch(
      () => props.modelValue,
      (e) => {
        if (e != null && e.length > 0 && fileList.value != null) {
          // props modelValue 等于 data 不进行处理
          if (fileList.value === e) return;
          fileList.value.length = 0;
          fileList.value.push(...e);
        }
      },
      { deep: true, immediate: true }
    );

    function handleUpdate(e: UploadProps["fileList"]): void {
      nextTick(() => {
        fileList.value = e;
      });
    }

    // 处理数据结果
    const handleChange = (info: UploadChangeParam): void => {
      if (info.file.status === "uploading") {
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        const url: string | undefined = info.file.response?.data?.url;
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
    const beforeUpload = (file: any): void => {
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
      accept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
      "onUpdate:file-list": handleUpdate,
      "file-list": fileList.value,
      "onBefore-upload": beforeUpload,
      onChange: handleChange,
      onPreview: handlePreview,
    }));

    /**
     * 预览功能
     * @param {*} e
     */
    function handlePreview(e: UploadFile): void {
      if (!e.url) return;
      imgUrl.value = e.url;
      setVisible(true);
    }

    /**
     * 预览异常处理
     */
    function previewError(): void {
      if (!imgUrl.value) return;
      message.error("图片地址无法访问!");
    }
</script>

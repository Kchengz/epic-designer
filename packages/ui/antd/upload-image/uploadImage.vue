<script lang="ts" setup>
import type {
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'ant-design-vue';

import { computed, nextTick, ref, useAttrs, watch } from 'vue';

import { getUUID } from '@epic-designer/utils';
import { Form, Image, message, Upload } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    maxCount?: number;
    modelValue?: string;
  }>(),
  {
    maxCount: 99,
    modelValue: '',
  },
);

const emits = defineEmits(['update:modelValue', 'change']);
const formItemContext = Form.useInjectFormItemContext();
const attrs = useAttrs();
const fileList = ref<UploadProps['fileList']>([]);
let urlString = '';

const imgUrl = ref('');
const visible = ref(false);
const setVisible = (value: boolean): void => {
  visible.value = value;
};

watch(
  () => fileList.value,
  (list) => {
    urlString = list!
      .filter((file) => file.status === 'done')
      .map((file) => file.url)
      .join(',');
    emits('update:modelValue', urlString);
    emits('change', urlString);
    formItemContext.onFieldChange();
  },
);
// 处理传递进来的值
watch(
  () => props.modelValue,
  (modelValue) => {
    // urlString 等于 data 不进行处理
    if (urlString === modelValue) return;

    if (modelValue === '') {
      fileList.value = [];
      return;
    }

    if (modelValue && fileList.value) {
      fileList.value = modelValue.split(',').map((url) => ({
        name: url,
        status: 'done',
        uid: getUUID() as string,
        url,
      }));
    }
  },
  { deep: true, immediate: true },
);

function handleUpdate(e: UploadProps['fileList']): void {
  nextTick(() => {
    fileList.value = e;
  });
}

// 处理数据结果
const handleChange = (info: UploadChangeParam): void => {
  if (info.file.status === 'uploading') {
    return;
  }

  if (info.file.status === 'done') {
    // Get this url from response in real world.
    const url: string | undefined = info.file.response?.data?.url;
    if (!info.file.url && !url) {
      info.file.status = 'error';
      message.error('上传失败');
      return;
    }
    // 赋值url
    info.file.url = url;
    info.file.thumbUrl = url;
  }

  if (info.file.status === 'error') {
    message.error('upload error');
  }
};

// 上传前处理
const beforeUpload = (): void => {
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
  accept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
  'onBefore-upload': beforeUpload,
  onChange: handleChange,
  onPreview: handlePreview,
  'file-list': fileList.value,
  'list-type': 'picture-card',
  'onUpdate:file-list': handleUpdate,
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
  message.error('图片地址无法访问!');
}
</script>

<template>
  <div class="epic-upload-image">
    <Upload v-bind="getUploadProps">
      <div v-if="(fileList?.length ?? 0) < props.maxCount">
        <span
          class="icon--epic icon--epic--cloud-upload-outlined mr-2px text-$epic-text-main text-lg"
        ></span>
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

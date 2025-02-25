import type { UploadProps, UploadUserFile } from 'element-plus';

import type { PropType } from 'vue';

import { computed, defineComponent, h, nextTick, ref, watch } from 'vue';

import { ElButton, ElMessage, ElUpload } from 'element-plus';

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      default: () => [],
      type: Array as PropType<UploadUserFile[]>,
    },
  },
  setup(props, { attrs, emit }) {
    const fileList = ref<UploadUserFile[]>([]);
    watch(fileList, (e) => {
      emit('update:modelValue', e);
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
      { deep: true, immediate: true },
    );

    // function handleChange : UploadProps['onChange']  (e: UploadUserFile[]) => {
    //   nextTick(() => { fileList.value = e })
    // }
    const handleChange: UploadProps['onChange'] = (
      uploadFile,
      uploadFiles,
    ): void => {
      nextTick(() => {
        fileList.value = uploadFiles;
      });
    };
    // 处理数据结果
    // const handleChange = (info: UploadChangeParam): void => {
    //   if (info.file.status === 'uploading') {
    //     return
    //   }
    //
    //   if (info.file.status === 'done') {
    //     // Get this url from response in real world.
    //     const url = info.file.response?.data?.url
    //     if (!info.file.url && !url) {
    //       info.file.status = 'error'
    //       ElMessage.error('上传失败')
    //       return
    //     }
    //     // 赋值url
    //     info.file.url = url
    //   }
    //
    //   if (info.file.status === 'error') {
    //     ElMessage.error('upload error')
    //   }
    // }

    // 上传前处理
    const beforeUpload: UploadProps['beforeUpload'] = (): void => {
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
    const handleSuccess: UploadProps['onSuccess'] = () => {};
    const handleError: UploadProps['onError'] = (error) => {
      ElMessage.error('上传失败');
      console.error(error);
    };
    // ts报错先忽略了
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const getUploadProps = computed<UploadProps>(() => ({
      ...attrs,
      onBeforeUpload: beforeUpload,
      onChange: handleChange,
      onError: handleError,
      onSuccess: handleSuccess,
      'file-list': fileList.value,
    }));

    return () => {
      return h('div', null, {
        default: () => [
          h(ElUpload, getUploadProps.value, {
            default: () => [
              h(
                ElButton,
                {},
                {
                  default: () => [
                    h('span', {
                      class:
                        'icon--epic icon--epic--cloud-upload-outlined text-lg',
                      style: { 'margin-right': '2px' },
                    }),
                    h('span', null, { default: () => '上传文件' }),
                  ],
                },
              ),
            ],
          }),
        ],
      });
    };
  },
});

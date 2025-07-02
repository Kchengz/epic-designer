import type { UploadProps, UploadUserFile } from 'element-plus';

import { computed, defineComponent, h, ref, watch } from 'vue';

import { getFileNameByUrl, getUUID } from '@epic-designer/utils';
import { ElButton, ElMessage, ElUpload } from 'element-plus';

export default defineComponent({
  emits: ['update:modelValue', 'change'],
  props: {
    modelValue: {
      default: '',
      type: String,
    },
  },
  setup(props, { attrs, emit }) {
    const fileList = ref<UploadUserFile[]>([]);
    let urlString = '';
    watch(
      () => fileList.value,
      (list) => {
        console.log('list', list);
        urlString = list
          .filter((file) => file.status === 'success')
          .map((file) => file.url)
          .join(',');
        emit('update:modelValue', urlString);
        emit('change', urlString);
      },
    );
    // 处理传递进来的值
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

        if (modelValue !== null && fileList.value !== null) {
          fileList.value = modelValue.split(',').map((url) => ({
            id: getUUID() as string,
            name: getFileNameByUrl(url),
            status: 'success',
            url,
          }));
        }
      },
      { immediate: true },
    );

    // 删除文件
    const handleRemove = (
      _file: UploadUserFile,
      uploadFiles: UploadUserFile[],
    ) => {
      fileList.value = uploadFiles;
    };

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

    const handleSuccess: UploadProps['onSuccess'] = (
      response,
      uploadFile,
      uploadFiles,
    ) => {
      fileList.value = uploadFiles.map((file: any) => ({
        ...file,
        url: file.response.data?.url,
      }));
    };
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
      onError: handleError,
      onRemove: handleRemove,
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

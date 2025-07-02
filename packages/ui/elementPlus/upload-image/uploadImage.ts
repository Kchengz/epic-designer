import type { UploadProps, UploadUserFile } from 'element-plus';

import { computed, defineComponent, h, ref, watch } from 'vue';

import { getUUID } from '@epic-designer/utils';
import { ElImageViewer, ElMessage, ElUpload } from 'element-plus';

// 封装上传文件组件
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

    const imgUrl = ref('');
    const visible = ref(false);
    const setVisible = (value: boolean): void => {
      visible.value = value;
    };

    watch(
      () => fileList.value,
      (list) => {
        urlString = list
          .filter((file) => file.status === 'success')
          .map((file) => file.url)
          .join(',');
        emit('update:modelValue', urlString);
        emit('change', urlString);
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
            status: 'success',
            uid: Number(getUUID(10, 'number')) as number,
            url,
          }));
        }
      },
      { deep: true, immediate: true },
    );

    // 删除文件
    const handleRemove = (
      _file: UploadUserFile,
      uploadFiles: UploadUserFile[],
    ) => {
      fileList.value = uploadFiles;
    };

    /**
     * 预览功能
     */
    const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
      if (!uploadFile.url) return;
      imgUrl.value = uploadFile.url;
      setVisible(true);
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const getUploadProps = computed<UploadProps>(() => ({
      ...attrs,
      accept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
      onBeforeUpload: beforeUpload,
      onError: handleError,
      onPreview: handlePreview,
      onRemove: handleRemove,
      onSuccess: handleSuccess,
      'file-list': fileList.value,
      'list-type': 'picture-card',
    }));

    return () => {
      // const type = attrs.type;
      return h(
        'div',
        {
          class: 'epic-upload-image',
        },
        {
          default: () => [
            h(ElUpload, getUploadProps.value, {
              default: () => [
                h(
                  'div',
                  { style: { 'text-align': 'center' } },
                  {
                    default: () => [
                      h('span', {
                        class:
                          'icon--epic icon--epic--cloud-upload-outlined mr-2px text-lg',
                      }),
                      h(
                        'div',
                        { class: 'ant-upload-text' },
                        { default: () => '点击上传' },
                      ),
                    ],
                  },
                ),
              ],
            }),
            (() => {
              if (!visible.value) {
                return;
              }
              return h(ElImageViewer, {
                onClose: () => {
                  setVisible(false);
                },
                urlList: [imgUrl.value],
              });
            })(),
          ],
        },
      );
    };
  },
});

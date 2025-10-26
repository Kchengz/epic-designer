import type { UploadFileInfo, UploadOnFinish } from 'naive-ui';
import type { OnError } from 'naive-ui/es/upload/src/interface';

import { defineComponent, h, nextTick, ref, watch } from 'vue';

import { pluginManager } from '@epic-designer/manager';
import { getFileNameByUrl, getUUID } from '@epic-designer/utils';
import { NButton, NUpload } from 'naive-ui';

export default defineComponent({
  emits: ['update:modelValue', 'change'],
  props: {
    modelValue: {
      default: '',
      type: String,
    },
  },
  setup(props, { attrs, emit }) {
    const fileList = ref<UploadFileInfo[]>([]);
    let urlString = '';

    watch(
      () => fileList.value,
      (list) => {
        urlString = list
          .filter((file) => file.status === 'finished')
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

        if (modelValue !== null && fileList.value !== null) {
          fileList.value = modelValue.split(',').map((url) => ({
            id: getUUID() as string,
            name: getFileNameByUrl(url),
            status: 'finished',
            url,
          }));
        }
      },
      { immediate: true },
    );
    function handleUpdate(e: UploadFileInfo[]): void {
      nextTick(() => {
        fileList.value = e;
      });
    }

    const handleError: OnError = () => {};
    const handleSuccess: UploadOnFinish = ({ event, file }) => {
      const resInfo = event?.target as XMLHttpRequest;
      const resData = JSON.parse(resInfo?.response ?? '{}');
      file.url = resData.data?.url;
    };

    return () => {
      return h('div', null, {
        default: () => [
          h(
            NUpload,
            {
              ...attrs,
              'default-upload': true,
              headers: pluginManager.global.axiosConfig?.headers,
              onError: handleError,
              onFinish: handleSuccess,
              'file-list': fileList.value,
              'onUpdate:file-list': handleUpdate,
            },
            {
              default: () => [
                h(
                  NButton,
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
            },
          ),
        ],
      });
    };
  },
});

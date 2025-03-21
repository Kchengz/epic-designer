import type { UploadFileInfo, UploadOnFinish } from 'naive-ui';
import type { OnError } from 'naive-ui/es/upload/src/interface';

import { defineComponent, h, nextTick, ref, watch } from 'vue';

import { getUUID } from '@epic-designer/utils';
import { NUpload } from 'naive-ui';

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
            name: url,
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

    const handleSuccess: UploadOnFinish = ({ event, file }) => {
      const resInfo = event?.target as XMLHttpRequest;
      const resData = JSON.parse(resInfo.response ?? '{}');
      file.url = resData.data?.url;
    };

    const handleError: OnError = ({ event, file }) => {
      console.log('OnError called->', file, event);
    };

    return () => {
      return h(
        'div',
        {
          class: 'epic-upload-image',
        },
        {
          default: () => [
            h(
              NUpload,
              {
                ...attrs,
                accept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                onError: handleError,
                onFinish: handleSuccess,
                'file-list': fileList.value,
                'list-type': 'image-card',
                'onUpdate:file-list': handleUpdate,
              },
              {
                default: () => [
                  h(
                    'div',
                    { style: { 'text-align': 'center' } },
                    {
                      default: () => [
                        h('span', {
                          class:
                            'icon--epic icon--epic--cloud-upload-outlined text-md mr-2px text-lg',
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
              },
            ),
          ],
        },
      );
    };
  },
});

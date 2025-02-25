import type { UploadFileInfo, UploadOnFinish } from 'naive-ui';
import type { OnError } from 'naive-ui/es/upload/src/interface';

import type { PropType } from 'vue';

import { defineComponent, h, nextTick, ref, watch } from 'vue';

import { NButton, NUpload } from 'naive-ui';

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      default: () => [],
      type: Array as PropType<UploadFileInfo[]>,
    },
  },
  setup(props, { attrs, emit }) {
    const fileList = ref<UploadFileInfo[]>([]);
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

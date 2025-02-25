import type { UploadChangeParam, UploadProps } from 'ant-design-vue';

import type { PropType } from 'vue';

import { computed, defineComponent, h, nextTick, ref, watch } from 'vue';

import { Button, message, Upload } from 'ant-design-vue';

// 封装上传文件组件
export default defineComponent({
  emits: ['update:modelValue', 'change'],
  props: {
    modelValue: {
      default: () => [],
      type: Array as PropType<UploadProps['fileList']>,
    },
  },
  setup(props, { attrs, emit }) {
    const fileList = ref<UploadProps['fileList']>([]);
    watch(fileList, (e) => {
      emit('update:modelValue', e);
      emit('change', e);
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
        const url = info.file.response?.data?.url;
        if (!info.file.url && !url) {
          info.file.status = 'error';
          message.error('上传失败');
          return;
        }
        // 赋值url
        info.file.url = url;
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
      'onBefore-upload': beforeUpload,
      onChange: handleChange,
      'file-list': fileList.value,
      'onUpdate:file-list': handleUpdate,
    }));

    return () => {
      return h('div', null, {
        default: () => [
          h(Upload, getUploadProps.value, {
            default: () => [
              h(
                Button,
                {
                  class: 'flex items-center',
                },
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

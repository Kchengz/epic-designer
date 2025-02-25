import type { UploadFileInfo } from 'naive-ui';
import type { OnError } from 'naive-ui/es/upload/src/interface';

import type { PropType } from 'vue';

import { defineComponent, h, nextTick, ref, watch } from 'vue';

import { NUpload } from 'naive-ui';

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

    // const imgUrl = ref('')
    // const visible = ref(false)
    // const setVisible = (value: boolean): void => {
    //   visible.value = value
    // }

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

    // 处理数据结果
    // const handleChange = (info: UploadChangeParam): void => {
    //   if (info.file.status === 'uploading') {
    //     return
    //   }
    //
    //   if (info.file.status === 'done') {
    //     // Get this url from response in real world.
    //     const url: string | undefined = info.file.response?.data?.url
    //     if (!info.file.url && !url) {
    //       info.file.status = 'error'
    //       message.error('上传失败')
    //       return
    //     }
    //     // 赋值url
    //     info.file.url = url
    //     info.file.thumbUrl = url
    //   }
    //
    //   if (info.file.status === 'error') {
    //     message.error('upload error')
    //   }
    // }

    const handleSuccess = ({ event, file }) => {
      const resInfo = event?.target as any;
      const resData = JSON.parse(resInfo.response ?? '{}');
      file.url = resData.data?.url;
    };
    const handleError: OnError = () => {};

    // 上传前处理
    // const beforeUpload = (file: any): void => {
    // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    // if (!isJpgOrPng) {
    //   message.error('您只能上传JPG/PNG文件!');
    // }
    // const isLt2M = file.size / 1024 / 1024 < 2;
    // if (!isLt2M) {
    //   message.error('图片大小超过 2MB!');
    // }
    // return isJpgOrPng && isLt2M;
    // }

    /**
     * 预览功能
     */
    // const handlePreview: OnPreview = (file) => {
    //   console.log(file)
    //   if (!file.url) return
    //   imgUrl.value = file.url
    //   setVisible(true)
    // }

    return () => {
      // const type = attrs.type;
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

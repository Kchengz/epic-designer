import { type PropType, defineComponent, h, nextTick, computed, ref, watch } from 'vue'
import { ElUpload, ElMessage, ElImageViewer, type UploadProps, type UploadUserFile } from 'element-plus'

// 封装上传文件组件
export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<UploadUserFile[]>,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit, attrs }) {
    const fileList = ref<UploadUserFile[]>([])

    const imgUrl = ref('')
    const visible = ref(false)
    const setVisible = (value: boolean): void => {
      visible.value = value
    }

    watch(fileList, (e) => {
      emit('update:modelValue', e)
    })
    // 处理传递进来的值
    watch(
      () => props.modelValue,
      (e) => {
        if (e != null && e.length > 0 && fileList.value != null) {
          // props modelValue 等于 data 不进行处理
          if (fileList.value === e) return
          fileList.value.length = 0
          fileList.value.push(...e)
        }
      },
      { deep: true, immediate: true }
    )

    const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles): void => {
      nextTick(() => { fileList.value = uploadFiles })
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

    const handleSuccess: UploadProps['onSuccess'] = (response, uploadFile, uploadFiles) => {
      console.log(uploadFiles)
    }
    const handleError: UploadProps['onError'] = (error, uploadFile, uploadFiles) => {
      ElMessage.error('上传失败')
      console.error(error)
    }

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
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const getUploadProps = computed<UploadProps>(() => ({
      ...attrs,
      'list-type': 'picture-card',
      accept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
      onBeforeUpload: beforeUpload,
      onChange: handleChange,
      onSuccess: handleSuccess,
      onError: handleError,
      onPreview: handlePreview
    }))

    /**
     * 预览功能
     * @param {*} e
     */
    const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
      if (!uploadFile.url) return
      imgUrl.value = uploadFile.url
      setVisible(true)
    }

    return () => {
      // const type = attrs.type;
      return h(
        'div',
        {
          class: 'epic-upload-image'
        },
        {
          default: () => [
            h(ElUpload, getUploadProps.value, {
              default: () => [
                h('div', { style: { 'text-align': 'center' } }, {
                  default: () => [
                    h('span', {
                      class: 'iconfont icon-shangchuan1 text-md',
                      style: { 'margin-right': '2px' }
                    }),
                    h(
                      'div',
                      { class: 'ant-upload-text' },
                      { default: () => '点击上传' }
                    )
                  ]
                })
              ]
            }),
            (() => {
              if (!visible.value) {
                return
              }
              return h(ElImageViewer, {
                urlList: [imgUrl.value],
                onClose: () => { setVisible(false) }
              })
            })()
          ]
        }
      )
    }
  }
})

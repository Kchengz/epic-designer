import { type PropType, defineComponent, h, nextTick, ref, watch } from 'vue'
import { NUpload } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'
import type { OnFinish, OnError } from 'naive-ui/es/upload/src/interface'

export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<UploadFileInfo[]>,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit, attrs }) {
    const fileList = ref<UploadFileInfo[]>([])

    // const imgUrl = ref('')
    // const visible = ref(false)
    // const setVisible = (value: boolean): void => {
    //   visible.value = value
    // }

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

    function handleUpdate (e: UploadFileInfo[]): void {
      console.log('onChange called->', e)
      nextTick(() => { fileList.value = e })
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

    const handleSuccess: OnFinish = ({ file, event }) => {
      console.log('OnFinish called->', file, event)
      const resInfo = event?.target as any
      const resData = JSON.parse(resInfo.response ?? '{}')
      file.url = resData.data?.url
    }
    const handleError: OnError = ({ file, event }) => {
      console.log('OnError called->', file, event)
    }

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
         * @param {*} e
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
          class: 'epic-upload-image'
        },
        {
          default: () => [
            h(NUpload, {
              ...attrs,
              'list-type': 'image-card',
              accept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              'onUpdate:file-list': handleUpdate,
              onFinish: handleSuccess,
              onError: handleError
            }, {
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
            })
          ]
        }
      )
    }
  }
})

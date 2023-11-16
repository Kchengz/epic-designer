import { type PropType, defineComponent, h, nextTick, ref, watch } from 'vue'
import { NUpload, NButton } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'
import { type OnFinish, type OnError } from 'naive-ui/es/upload/src/interface'

export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<UploadFileInfo []>,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit, attrs }) {
    const fileList = ref<UploadFileInfo[]>([])
    watch(fileList, (e) => {
      emit('update:modelValue', e)
    })
    // 处理传递进来的值
    watch(
      () => props.modelValue,
      (e) => {
        if ((e != null) && e.length > 0 && (fileList.value != null)) {
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

    const handleError: OnError = ({ file, event }) => {
      console.log('OnError called->', file, event)
    }
    const handleSuccess: OnFinish = ({ file, event }) => {
      console.log('OnFinish called->', file, event)
      const resInfo = event?.target as any
      const resData = JSON.parse(resInfo.response ?? '{}')
      file.url = resData.data?.url
    }

    return () => {
      return h('div', null, {
        default: () => [
          h(NUpload, {
            ...attrs,
            'onUpdate:file-list': handleUpdate,
            "file-list": fileList.value,
            onError: handleError,
            onFinish: handleSuccess,
            'default-upload': true
          }, {
            default: () => [
              h(
                NButton,
                {},
                {
                  default: () => [
                    h('span', {
                      class: 'iconfont epic-icon-shangchuan1',
                      style: { 'margin-right': '2px' }
                    }),
                    h('span', null, { default: () => '上传文件' })
                  ]
                }
              )
            ]
          })
        ]
      })
    }
  }
})

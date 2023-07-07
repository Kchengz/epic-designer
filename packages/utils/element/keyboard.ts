import { onKeyUp, onKeyDown } from '@vueuse/core'
import { ref } from 'vue'

/**
 * 是否按住键盘状态
 * @returns
 */
export function useKeyPress () {
  // 是否按住空格键
  const pressSpace = ref(false)
  // 是否按住shift键
  const pressShift = ref(false)
  // 是否按住ctrl键
  const pressCtrl = ref(false)
  onKeyDown(' ', (e) => {
    var element = e.target as HTMLElement;
    if(!['INPUT','TEXTAREA'].includes(element.tagName)){
      e.preventDefault()
    }
    pressSpace.value = true
  })
  onKeyUp(' ', () => {
    pressSpace.value = false
  })

  onKeyDown('Shift', (e) => {
    e.preventDefault()
    pressShift.value = true
  })
  onKeyUp('Shift', () => {
    pressShift.value = false
  })

  onKeyDown('Control', (e) => {
    e.preventDefault()
    pressCtrl.value = true
  })
  onKeyUp('Control', () => {
    pressCtrl.value = false
  })

  return { pressSpace, pressShift, pressCtrl }
}

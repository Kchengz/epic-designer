import { type PluginManager } from '../pluginManager'
import MonacoEditor from './KComponent/monacoEditor'
import Page from './KComponent/page'
import KColEditor from './KComponent/KColEditor/KColEditor.vue'
import KTabPaneEditor from './KComponent/KTabPaneEditor/KTabPaneEditor.vue'
import KInputSize from './KComponent/KInputSize/index.vue'
import KActionEditor from './KComponent/KActionEditor/KActionEditor.vue'

export function initComponent (pluginManager: PluginManager): void {
  pluginManager.component('KTabPaneEditor', KTabPaneEditor)
  pluginManager.component('KInputSize', KInputSize)
  pluginManager.component('KColEditor', KColEditor)
  pluginManager.component('KActionEditor', KActionEditor)
  pluginManager.component('KRuleEditor', async () => await import('./KComponent/KRuleEditor/KRuleEditor.vue'))

  // 左侧菜单初始化
  pluginManager.registerActivitybar({
    title: '组件',
    icon: 'icon-mokuai_1',
    component: async () =>
      await import(
        '../../components/KDesigner/src/modules/KComponentView/KComponentView.vue'
      )
  })

  pluginManager.registerActivitybar({
    title: '源码',
    icon: 'icon-daima1',
    component: async () =>
      await import(
        '../../components/KDesigner/src/modules/KSoundCode/KSoundCode.vue'
      )
  })

  pluginManager.registerActivitybar({
    title: '大纲',
    icon: 'icon-juxingkaobei',
    component: async () =>
      await import('../../components/KDesigner/src/modules/KOutline/KOutline.vue')
  })

  pluginManager.registerRightSidebar({
    title: '属性',
    component: async () =>
      await import(
        '../../components/KDesigner/src/modules/KAttributeView/KAttributeView.vue'
      )
  })

  pluginManager.registerRightSidebar({
    title: '样式',
    component: async () =>
      await import(
        '../../components/KDesigner/src/modules/KAttributeView/KStyleView.vue'
      )
  })
  pluginManager.registerRightSidebar({
    title: '事件',
    component: async () =>
      await import(
        '../../components/KDesigner/src/modules/KAttributeView/KEventView.vue'
      )
  })

  const componentArray = [MonacoEditor, Page]
  componentArray.forEach((item) => {
    pluginManager.registerComponent(item)
  })
}

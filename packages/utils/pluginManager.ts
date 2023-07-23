import { type NodeItem, type SchemaGroupItem } from '@epic-designer/core/types/epic-designer.d'
import { loadAsyncComponent } from './utils'
import { getUUID } from './index'
import { ref } from 'vue'
export interface ActivitybarModel {
  id: string
  title: string
  icon: string
  component: any
}

export interface RightSidebarModel {
  id: string
  title: string
  component: any
}

export interface ViewsContainersModel {
  activitybars: ActivitybarModel[]
  rightSidebars: RightSidebarModel[]
}

export type Components = Record<string, any>

export interface EventModel {
  type: string
  describe: string
}

export interface ComponentConfigModel {
  component: any
  defaultSchema: NodeItem
  config: {
    attribute?: NodeItem[]
    style?: NodeItem[]
    event?: EventModel[]
    action?: EventModel[]
  }
  bindModel?: string
}

export type ComponentConfigModelRecords = Record<string, ComponentConfigModel>

export interface MethodModel {
  describe: string
  methodName: string
  method: (...args) => any
}

export type PublicMethodsModel = Record<string, MethodModel>

export interface SchemaGroup {
  list: NodeItem[]
  title: string
}

export type SchemaGroupList = SchemaGroup[]

export class PluginManager {
  components: Components = {}
  componentConfigs: ComponentConfigModelRecords = {}
  schemaGroup: SchemaGroupItem[] = []

  schemaGroupList = ref<SchemaGroupList>([])

  viewsContainers: ViewsContainersModel = {
    activitybars: [],
    rightSidebars: []
  }

  publicMethods: PublicMethodsModel = {
    test: {
      describe: '测试函数',
      methodName: 'test',
      method: () => {
        alert('测试函数弹出')
      }
    }
  }

  /**
   * 添加组件到插件管理器中
   * @param componentName 组件名称
   * @param component 组件
   */
  component (componentName: string, component: any): void {
    if (typeof component === 'function') {
      component = loadAsyncComponent(component)
    }
    // 注册组件
    this.components[componentName] = component
  }

  /**
   * 注册组件到插件管理器中
   * @param component 组件
   * @param schema 组件结构
   * @param attrSchemas 属性结构
   * @param bindModel 双向绑定value
   */
  registerComponent (componentConfig: ComponentConfigModel): void {
    // 添加组件
    this.component(
      componentConfig.defaultSchema.type,
      componentConfig.component
    )
    // 添加组件配置
    this.componentConfigs[componentConfig.defaultSchema.type] = componentConfig
  }

  /**
   * 获取所有插件管理中的所有组件
   * @returns components
   */
  getComponents (): Components {
    return this.components
  }

  /**
   * 通过type 查询相应的组件
   * @returns components
   */
  getComponent (type: string): any {
    return this.components[type]
  }

  /**
   * 注册活动栏
   */
  registerActivitybar (activitybar: ActivitybarModel): void {
    if (typeof activitybar.component === 'function') {
      activitybar.component = loadAsyncComponent(activitybar.component)
    }

    const index = this.viewsContainers.activitybars.findIndex(item => item.id === activitybar.id)

    if (index !== -1) {
      this.viewsContainers.activitybars[index] = activitybar
    } else {
      this.viewsContainers.activitybars.push(activitybar)
    }
  }

  /**
   * 获取所有activitybars
   * @returns activitybars
   */
  getActivitybars (): ActivitybarModel[] {
    return this.viewsContainers.activitybars
  }

  /**
   * 注册右侧栏
   */
  registerRightSidebar (rightSidebar: RightSidebarModel): void {
    if (typeof rightSidebar.component === 'function') {
      rightSidebar.component = loadAsyncComponent(rightSidebar.component)
    }

    const index = this.viewsContainers.rightSidebars.findIndex(sidebar => sidebar.id === rightSidebar.id)

    if (index !== -1) {
      this.viewsContainers.rightSidebars[index] = rightSidebar
    } else {
      this.viewsContainers.rightSidebars.push(rightSidebar)
    }
  }

  /**
   * 获取所有rightSidebars
   * @returns rightSidebars
   */
  getRightSidebars (): RightSidebarModel[] {
    return this.viewsContainers.rightSidebars
  }

  /**
   * 获取所有插件管理中的所有组件配置
   * @returns componentAttrs
   */
  getComponentConfings (): ComponentConfigModelRecords {
    return this.componentConfigs
  }

  /**
   * 通过type获取ComponentConfing
   * @returns
   */
  getComponentConfingByType (type: string): ComponentConfigModel {
    const componentConfig = this.componentConfigs[type]
    return componentConfig
  }

  /**
   * 设置分组,这个操作将会覆盖原来的数据
   * @param {*} schemaGroup
   * @returns
   */
  setSchemaGroup (schemaGroup: SchemaGroupItem[]): void {
    this.schemaGroup = schemaGroup
    this.computedSchemaGroupList()
  }

  /**
   * 添加分组
   * @param {*} schemaGroupItem
   * @returns
   */
  addSchemaGroup (schemaGroupItem: SchemaGroupItem): void {
    this.schemaGroup.push(schemaGroupItem)
    this.computedSchemaGroupList()
  }

  /**
   * 计算schemaGroupList
   */
  computedSchemaGroupList () {
    const schemaGroupList = this.schemaGroup.map((item) => {
      // 映射defaultSchema,并过滤未查询到的组件
      const list = item.list
        .map((type) => {
          const schema = this.componentConfigs[type]?.defaultSchema
          if (schema == null) {
            console.warn(`${type} 组件未注册到pluginManager中`)
            return false
          }
          return {
            ...schema,
            id: getUUID()
          }
        })
        .filter((e) => e) as NodeItem[]
      return {
        ...item,
        list
      }
    })
    this.schemaGroupList.value = schemaGroupList
  }

  /**
   * 按照分组获取schemaGroupList
   * @returns schemaGroupList
   */
  getSchemaByGroup () {
    return this.schemaGroupList
  }

  /**
   * 添加公共方法
   * @param method
   */
  addPublicMethod (method: MethodModel): void {
    this.publicMethods[method.methodName] = method
  }
}

export const pluginManager = new PluginManager()

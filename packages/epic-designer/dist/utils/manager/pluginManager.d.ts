import { type ComponentSchema } from '../../core/types/epic-designer';
export interface ActivitybarModel {
    id: string;
    title: string;
    icon: string;
    component: any;
}
export interface RightSidebarModel {
    id: string;
    title: string;
    component: any;
}
export interface ViewsContainersModel {
    activitybars: ActivitybarModel[];
    rightSidebars: RightSidebarModel[];
}
export type Components = Record<string, any>;
export interface EventModel {
    type: string;
    describe: string;
}
export interface ActionModel extends EventModel {
    argsConfigs?: ComponentSchema[];
    args?: any[];
}
export interface ComponentConfigModel {
    component: any;
    groupName?: string;
    defaultSchema: ComponentSchema;
    config: {
        attribute?: ComponentSchema[];
        style?: ComponentSchema[];
        event?: EventModel[];
        action?: ActionModel[];
    };
    bindModel?: string;
}
export type ComponentConfigModelRecords = Record<string, ComponentConfigModel>;
export interface PublicMethodModel {
    describe?: string;
    methodName?: string;
    name: string;
    method?: (...args: any[]) => any;
    handler: (...args: any[]) => any;
}
export type PublicMethodsModel = Record<string, PublicMethodModel>;
export interface ComponentGroup {
    list: ComponentSchema[];
    title: string;
}
export type ComponentSchemaGroups = ComponentGroup[];
export declare class PluginManager {
    initialized: import("vue").Ref<boolean>;
    components: Components;
    componentConfigs: ComponentConfigModelRecords;
    componentSchemaGroups: import("vue").Ref<{
        list: {
            [x: string]: any;
            id?: string | undefined;
            type: string;
            label?: string | undefined;
            field?: string | undefined;
            componentProps?: any;
            slotName?: string | undefined;
            rules?: {
                [x: string]: any;
                trigger?: string | string[] | undefined;
                required?: boolean | undefined;
                type?: string | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    readonly hasIndices: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                validator?: string | undefined;
                isValidator?: boolean | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
            }[] | undefined;
            noFormItem?: boolean | undefined;
            input?: boolean | undefined;
            immovable?: boolean | undefined;
            childImmovable?: boolean | undefined;
            labelCol?: any;
            wrapperCol?: any;
            children?: any[] | undefined;
            slots?: {
                [slotName: string]: ComponentSchema[];
            } | undefined;
            show?: boolean | ((renderCallbackParams: import('../../core/types/epic-designer').RenderCallbackParams) => boolean) | undefined;
            editData?: any;
        }[];
        title: string;
    }[]>;
    hiddenComponents: string[];
    componentGroupNameMap: Record<string, string>;
    sortedGroups: string[];
    viewsContainers: ViewsContainersModel;
    publicMethods: PublicMethodsModel;
    /**
     * 添加组件到插件管理器中
     * @param componentName 组件名称
     * @param component 组件
     */
    component(componentName: string, component: any): void;
    /**
     * 注册组件到插件管理器中
     * @param componentConfig 组件配置
     */
    registerComponent(componentConfig: ComponentConfigModel): void;
    /**
     * 获取所有插件管理中的所有组件
     * @returns components
     */
    getComponents(): Components;
    /**
     * 通过type 查询相应的组件
     * @returns components
     */
    getComponent(type: string): any;
    /**
     * 注册或更新活动栏（Activitybar）模型。
     * 如果模型中的组件是一个函数，则异步加载该组件。
     * @param activitybar 要注册或更新的活动栏模型
     */
    registerActivitybar(activitybar: ActivitybarModel): void;
    /**
     * 获取所有activitybars
     * @returns activitybars
     */
    getActivitybars(): ActivitybarModel[];
    /**
     * 注册右侧栏
     */
    registerRightSidebar(rightSidebar: RightSidebarModel): void;
    /**
     * 获取所有rightSidebars
     * @returns rightSidebars
     */
    getRightSidebars(): RightSidebarModel[];
    /**
     * 获取所有插件管理中的所有组件配置
     * @returns componentAttrs
     */
    getComponentConfings(): ComponentConfigModelRecords;
    /**
     * 通过type获取ComponentConfing
     * @returns
     */
    getComponentConfingByType(type: string): ComponentConfigModel;
    /**
     * 计算componentSchemaGroups
     */
    computedComponentSchemaGroups(): void;
    /**
     * 按照分组获取componentSchemaGroups 暂时没啥用
     * @returns componentSchemaGroups
     */
    getComponentSchemaGroups(): import("vue").Ref<{
        list: {
            [x: string]: any;
            id?: string | undefined;
            type: string;
            label?: string | undefined;
            field?: string | undefined;
            componentProps?: any;
            slotName?: string | undefined;
            rules?: {
                [x: string]: any;
                trigger?: string | string[] | undefined;
                required?: boolean | undefined;
                type?: string | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    readonly hasIndices: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                validator?: string | undefined;
                isValidator?: boolean | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
            }[] | undefined;
            noFormItem?: boolean | undefined;
            input?: boolean | undefined;
            immovable?: boolean | undefined;
            childImmovable?: boolean | undefined;
            labelCol?: any;
            wrapperCol?: any;
            children?: any[] | undefined;
            slots?: {
                [slotName: string]: ComponentSchema[];
            } | undefined;
            show?: boolean | ((renderCallbackParams: import('../../core/types/epic-designer').RenderCallbackParams) => boolean) | undefined;
            editData?: any;
        }[];
        title: string;
    }[]>;
    /**
     * 设置组件分组名称到映射名称的关系
     * @param groupName 组件分组名称
     * @param mapName 映射的名称
     */
    setComponentGroupNameMap(groupName: string, mapName: string): void;
    /**
     * 清空组件分组名称到映射名称的关系
     */
    clearComponentGroupNameMap(): void;
    /**
     * 设置组件分组的排序
     * @param sortedGroups 包含组名和排序字段的对象数组
     */
    setSortedGroups(sortedGroups: string[]): void;
    /**
     * 清空组件分组的排序
     */
    clearSortedGroups(): void;
    /**
     * 添加需要隐藏的组件类型
     * @param {*} type
     * @returns
     */
    hideComponent(type: string): void;
    /**
     * 移除需要隐藏的组件类型
     * @param {*} type
     * @returns
     */
    showComponent(type: string): void;
    /**
     * 设置需要隐藏的组件类型数组
     * @param {*} type[]
     * @returns
     */
    setHideComponents(types: string[]): void;
    /**
     * 设置initialized的状态。
     *
     * @param value 要设置的布尔值。
     */
    setInitialized(value: boolean): void;
    /**
     * 添加公共方法
     * @param publicMethod
     */
    addPublicMethod(publicMethod: PublicMethodModel): void;
    /**
     * 移除公共方法
     * @param methodName
     */
    removePublicMethod(methodName: string): void;
}
export declare const pluginManager: PluginManager;

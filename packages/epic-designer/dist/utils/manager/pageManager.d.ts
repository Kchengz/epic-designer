import { type Ref, type ComponentPublicInstance } from "vue";
export interface ActionsModel {
    componentId?: string;
    args: string;
    methodName: string;
    type: "component" | "public" | "custom";
}
export interface PageManager {
    componentInstances: Ref<Record<string, ComponentPublicInstance>>;
    funcs: Ref<Record<string, any>>;
    isDesignMode: Ref<boolean>;
    getComponentInstance: (id: string) => ComponentPublicInstance;
    find: (id: string) => ComponentPublicInstance;
    addComponentInstance: (id: string, instance: ComponentPublicInstance) => void;
    removeComponentInstance: (id: string) => void;
    setMethods: (scriptStr: string) => void;
    doActions: (actions: ActionsModel[], ...args: any) => void;
    setDesignMode: (isDesign?: boolean) => void;
}
export declare function usePageManager(): PageManager;

import { type Ref, type ComponentPublicInstance } from "vue";
export interface ActionModel {
    componentId?: string;
    args: string;
    methodName: string;
    type: "component" | "public" | "custom";
}
export interface PageManager {
    componentInstances: Ref<Record<string, ComponentPublicInstance>>;
    funcs: Ref<Record<string, any>>;
    getComponentInstance: (id: string) => ComponentPublicInstance;
    addComponentInstance: (id: string, instance: ComponentPublicInstance) => void;
    removeComponentInstance: (id: string) => void;
    setMethods: (scriptStr: string) => void;
    doActions: (actions: ActionModel[], ...args: any) => void;
}
export declare function usePageManager(): PageManager;

export interface ActionModel {
    componentId?: string;
    args: string;
    methodName: any;
}
export interface PageManager {
    componentInstances: import("vue").Ref<{
        [id: string]: any;
    }>;
    funcs: import("vue").Ref<{
        [id: string]: any;
    }>;
    getComponentInstance: (id: string) => any;
    addComponentInstance: (id: string, instance: any) => any;
    setMethods: (scriptStr: string) => void;
    doActions: (actions: ActionModel[]) => void;
}
export declare function usePageManager(): PageManager;

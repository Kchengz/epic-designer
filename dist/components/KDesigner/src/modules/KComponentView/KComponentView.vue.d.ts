import { Ref } from 'vue';
import { NodeItem, Designer } from '../../../../../types/kDesigner';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    Collapse: any;
    CollapseItem: any;
    sourceSchema: Ref<{
        title: string;
        list: {
            [x: string]: any;
            type: string;
            label?: string | undefined;
            field?: string | undefined;
            name?: string | undefined;
            slotName?: string | undefined;
            componentProps?: any;
            id?: string | undefined;
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
            labelCol?: any;
            wrapperCol?: any;
            children?: any[] | undefined;
            show?: boolean | ((renderCallbackParams: import("../../../../../types/kDesigner").RenderCallbackParams) => boolean) | undefined;
        }[];
    }[]>;
    schemas: Ref<NodeItem[]>;
    designer: Designer;
    collapseActiveNames: Ref<string[]>;
    handleDraggableEnd: (e: any, list: NodeItem[]) => void;
    handleClick: (e: NodeItem) => false | undefined;
    readonly draggable: import("vue").DefineComponent<{
        list: {
            type: ArrayConstructor;
            required: boolean;
            default: any;
        };
        modelValue: {
            type: ArrayConstructor;
            required: boolean;
            default: any;
        };
        itemKey: {
            type: (StringConstructor | FunctionConstructor)[];
            required: boolean;
        };
        clone: {
            type: FunctionConstructor;
            default: (original: any) => any;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        move: {
            type: FunctionConstructor;
            default: any;
        };
        componentData: {
            type: ObjectConstructor;
            required: boolean;
            default: any;
        };
    }, unknown, {
        error: boolean;
    }, {
        realList(): any;
        getKey(): any;
    }, {
        /**
         * 拖拽结束,深拷贝一次数据,防止重复引用
         * @param e
         * @param list
         */
        getUnderlyingVm(domElement: any): any;
        getUnderlyingPotencialDraggableComponent(htmElement: any): any;
        emitChanges(evt: any): void;
        alterList(onList: any): void;
        spliceList(): void;
        updatePosition(oldIndex: any, newIndex: any): void;
        getRelatedContextFromMoveEvent({ to, related }: {
            to: any;
            related: any;
        }): any;
        getVmIndexFromDomIndex(domIndex: any): any;
        onDragStart(evt: any): void;
        onDragAdd(evt: any): void;
        onDragRemove(evt: any): void;
        onDragUpdate(evt: any): void;
        computeFutureIndex(relatedContext: any, evt: any): any;
        onDragMove(evt: any, originalEvent: any): any;
        onDragEnd(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        move: Function;
        tag: string;
        clone: Function;
        list: unknown[];
        modelValue: unknown[];
        componentData: Record<string, any>;
    } & {
        itemKey?: string | Function | undefined;
    }>, {
        move: Function;
        tag: string;
        clone: Function;
        list: unknown[];
        modelValue: unknown[];
        componentData: Record<string, any>;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;

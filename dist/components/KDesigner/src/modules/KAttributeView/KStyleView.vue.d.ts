import { Designer, NodeItem } from '../../../../../types/kDesigner';
import { getAttributeValue } from '../../../../../utils/index';
import { Ref } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    designer: Designer;
    schemas: Ref<NodeItem[]>;
    componentStyles: NodeItem[];
    checkedNode: import("vue").ComputedRef<NodeItem | null>;
    isShow: (item: NodeItem) => boolean;
    handleSetValue: (value: any, field: string) => void;
    readonly KNode: import("vue").DefineComponent<{
        record: {
            type: import("vue").PropType<NodeItem>;
            required: true;
        };
        modelValue: {};
    }, {
        formData: import("../../../../../types/kDesigner").FormDataModel;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        pageManager: import("../../../../../utils/pageManager").PageManager;
        emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        FormItem: any;
        componentInstance: Ref<null>;
        props: any;
        component: any;
        componentProps: any;
        dataSource: any;
        show: import("vue").ComputedRef<boolean>;
        getFormItemProps: import("vue").ComputedRef<{
            rules: false | {
                validator: any;
                trigger?: string | string[] | undefined;
                required?: boolean | undefined;
                type?: string | undefined;
                pattern?: string | RegExp | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                isValidator?: boolean | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
            }[] | undefined;
            type: string;
            label?: string | undefined;
            field?: string | undefined;
            name?: string | undefined;
            slotName?: string | undefined;
            componentProps?: any;
            id?: string | undefined;
            labelCol?: any;
            wrapperCol?: any;
            children?: NodeItem[] | undefined;
            show?: boolean | ((renderCallbackParams: import("../../../../../types/kDesigner").RenderCallbackParams) => boolean) | undefined;
        }>;
        initComponent: () => Promise<false | undefined>;
        fetchData: (api: string | Function, record: NodeItem) => void;
        handleUpdate: (v: any) => void;
        oldData: string | null;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        record: {
            type: import("vue").PropType<NodeItem>;
            required: true;
        };
        modelValue: {};
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
    }, {}>;
    readonly getAttributeValue: typeof getAttributeValue;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;

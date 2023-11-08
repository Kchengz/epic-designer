import { type Ref, type PropType } from 'vue';
import { Form } from 'ant-design-vue';
import type { NodeItem, FormDataModel } from '@epic-designer/core/types/epic-designer';
interface FormInstance extends InstanceType<typeof Form> {
    getData?: () => FormDataModel;
    setData?: (FormDataModel: any) => void;
    validateFields: () => void;
    validate: () => void;
}
/**
 * 获取表单数据
 * @param formName 表单name
 */
declare function getData(): FormDataModel;
/**
 * 校验表单数据
 * @param data
 */
declare function validate(): void | undefined;
/**
 * 设置表单数据
 * @param data
 */
declare function setData(data: FormDataModel): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    record: {
        type: PropType<NodeItem>;
        require: boolean;
        default: () => {};
    };
}, {
    form: Ref<FormInstance | null>;
    getData: typeof getData;
    setData: typeof setData;
    validate: typeof validate;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    record: {
        type: PropType<NodeItem>;
        require: boolean;
        default: () => {};
    };
}>>, {
    record: NodeItem;
}, {}>, {
    "edit-node"?(_: {}): any;
    node?(_: {
        record: NodeItem;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

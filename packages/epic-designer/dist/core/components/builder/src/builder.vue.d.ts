import { PageSchema, FormDataModel } from '../../../types/epic-designer';
/**
 * 跳过验证直接获取表单数据
 * @param formName 表单name
 */
declare function getData(formName?: string): Promise<FormDataModel | boolean>;
/**
 * 验证并获取数据
 * @param formName 表单name
 */
declare function validate(formName?: string): Promise<FormDataModel | boolean>;
/**
 * 设置表单数据
 * @param data
 */
declare function setData(data: FormDataModel, formName?: string): false | undefined;
/**
 * 获取表单实例的异步函数
 * @param {string} formName - 表单名称，默认为 'default'
 * @returns {Promise<any | boolean>} - 返回一个 Promise 对象，可能是表单实例或布尔值
 */
declare function getFormInstance(formName?: string): Promise<any | boolean>;
declare const _default: import("vue").DefineComponent<{
    pageSchema: {
        type: import("vue").PropType<PageSchema>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
}, {
    ready: import("vue").Ref<boolean>;
    getData: typeof getData;
    setData: typeof setData;
    validate: typeof validate;
    getFormInstance: typeof getFormInstance;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    ready: (...args: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    pageSchema: {
        type: import("vue").PropType<PageSchema>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    onReady?: ((...args: any) => any) | undefined;
}, {}, {}>;
export default _default;

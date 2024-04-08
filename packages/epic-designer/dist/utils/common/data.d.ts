import { PageSchema, type ComponentSchema } from '../../core/types/epic-designer';
/**
 * 深拷贝数据
 * @param obj
 * @returns
 */
export declare function deepClone(obj: Record<string, any>, cache?: WeakMap<object, any>): any;
/**
 * 生成新的schema数据
 * 深拷贝数据,防止重复引用
 * 生成uuid
 * 生成field
 * @param schema
 */
export declare function generateNewSchema(schema: ComponentSchema): ComponentSchema;
/**
 * 不改变obj1引用，将obj2所有属性遍历复制给obj1。
 * 递归比较两个对象，将obj2的属性复制给obj1。
 * 如果obj1中有obj2没有的属性，则删除该属性。
 * @param obj1 - 要修改的对象。
 * @param obj2 - 要比较的对象。
 */
export declare function deepCompareAndModify(obj1: Record<string, any>, obj2: Record<string, any>): void;
/**
 * 深度比较两个对象是否相等
 * @param obj1
 * @param obj2
 * @returns
 */
/**
 * 深度比较两个对象是否相等
 * @param obj1
 * @param obj2
 * @param ignoreKeys 可选参数，指定要忽略比较的属性名数组
 * @returns
 */
export declare function deepEqual(obj1: Record<string, any>, obj2: Record<string, any>, ignoreKeys?: string[], visitedObjs?: WeakMap<object, any>): boolean;
/**
 * 通过id获取节点路径
 * @param schemas
 * @param id
 */
export declare function getMatchedById(schemas: ComponentSchema[], id: string): ComponentSchema[];
/**
 * 此函数接受一个字符串参数，表示对象中的字段 和 对象
 * 它通过将参数使用点“.”作为分隔符拆分成部分来检索字段的值
 * 然后通过迭代每一部分从对象中获取字段的值
 * 如果找不到字段值，则该函数返回null
 * @param field 属性路径
 */
export declare function getAttributeValue(field: string, obj: Record<string, any>): Record<string, any> | undefined;
/**
 * 设置属性值的函数
 * 这是一个设置属性值的函数，传入三个参数，一个是要设置的属性值，一个是要设置的属性路径,一个要设置的对象。
 * 函数主要工作是将属性路径拆分成数组，然后遍历这个数组，依次进入对象中的子属性，直到最后一个子属性，然后将属性值设置到这个子属性上。
 * @param value 属性值
 * @param field 属性路径
 * @param obj 属性路径
 */
export declare function setAttributeValue(value: any, field: string, obj: Record<string, any>): void;
/**
 *  获取表单字段
 * @param schemas 页面结构数据
 * @param formName 表单name
 */
export declare function getFormFields(schemas: ComponentSchema[], formName?: string): (string | undefined)[];
/**
 * 从给定的组件schema数组中获取特定表单的输入字段schema数组。
 * @param {ComponentSchema[]} schemas - 包含整个表单结构信息的组件schema数组。
 * @param {string} formName - 要获取输入字段schema的表单名称，默认为 "default"。
 * @returns {ComponentSchema[]} 包含表单输入字段schema的数组。
 */
export declare function getFormSchemas(schemas: ComponentSchema[], formName?: string): ComponentSchema[];
/**
 * 查询Schema 返回所有符合添加的数据
 * @param schemas
 * @param handler
 * @param once  当once为true，表示只需要查询一条符合添加的数据之后结束函数
 * @param filter  节点过滤，函数返回 false,则不查询该节点得所有子节点 children
 * @returns
 */
export declare function findSchemas(schemas: ComponentSchema[], handler: (item: ComponentSchema) => boolean, once?: boolean, filter?: (item: ComponentSchema) => boolean): false | ComponentSchema | ComponentSchema[];
/**
 * 遍历Schema 返回映射的数据
 * @param schemas
 * @param handler 映射处理
 * @param filter  节点过滤，函数返回 false,则不映射该节点得所有子节点 children
 * @returns
 */
export declare function mapSchemas(schemas: ComponentSchema[], handler: (item: ComponentSchema) => ComponentSchema, filter?: (item: ComponentSchema) => boolean): ComponentSchema[];
/**
 * 通过id查询schema
 * @param schemas
 * @param id
 * @returns
 */
export declare function findSchemaById(schemas: ComponentSchema[], id: string): ComponentSchema;
/**
 * 通过id查询schema及节点children index 信息
 * @param schemas
 * @param id
 * @returns
 */
export declare function findSchemaInfoById(schemas: ComponentSchema[], id: string): {
    list: ComponentSchema[];
    schema: ComponentSchema;
    index: number;
};
/**
 * 将k-form-design数据转换为epic-designer数据
 * @param data
 * @returns
 */
export declare function convertKFormData(data: any): PageSchema;
/**
 * 递归转换子节点
 * @param children
 */
export declare function recursionConvertedNode(children: any, parent?: any): ComponentSchema[];

import { type NodeItem } from "@epic-designer/core/types/epic-designer";
import { type AsyncComponentLoader, type Component } from "vue";
/**
 * 生成一个用不重复的ID
 * @param randomLength 随机id长度
 */
export declare function getUUID(randomLength?: number): string;
/**
将字符串的首字母大写
@param {string} 待处理字符串
@returns {string} 首字母大写后的字符串
*/
export declare function capitalizeFirstLetter(str: string): string;
/**
 * 深拷贝数据
 * @param obj
 * @returns
 */
export declare function deepClone(obj: Record<string, any>, cache?: WeakMap<object, any>): any;
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
export declare function deepEqual(obj1: Record<string, any>, obj2: Record<string, any>, visitedObjs?: WeakMap<object, any>): boolean;
/**
 * * 异步加载组件
 * @param loader
 * @returns
 */
export declare const loadAsyncComponent: (loader: AsyncComponentLoader<any>, loadingComponent?: Component) => any;
/**
 * 通过id查询schema
 * @param schemas
 * @param id
 * @returns
 */
export declare function findSchemaById(schemas: NodeItem[], id: string): {
    list: NodeItem[];
    schema: NodeItem;
    index: number;
};
/**
 * 通过id获取节点路径
 * @param schemas
 * @param id
 */
export declare function getMatchedById(schemas: NodeItem[], id: string): NodeItem[];
/**
 * 此函数接受一个字符串参数，表示对象中的字段 和 对象
 * 它通过将参数使用点“.”作为分隔符拆分成部分来检索字段的值
 * 然后通过迭代每一部分从对象中获取字段的值
 * 如果找不到字段值，则该函数返回null
 * @param field 属性路径
 */
export declare function getAttributeValue(field: string, obj: NodeItem): NodeItem | undefined;
/**
 * 设置属性值的函数
 * 这是一个设置属性值的函数，传入三个参数，一个是要设置的属性值，一个是要设置的属性路径,一个要设置的对象。
 * 函数主要工作是将属性路径拆分成数组，然后遍历这个数组，依次进入对象中的子属性，直到最后一个子属性，然后将属性值设置到这个子属性上。
 * @param value 属性值
 * @param field 属性路径
 * @param obj 属性路径
 */
export declare function setAttributeValue(value: any, field: string, obj: NodeItem): void;

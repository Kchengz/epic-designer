import {
  PageSchema,
  type ComponentSchema,
} from "@epic-designer/core/types/epic-designer";
import { getUUID } from "./string";
import { pluginManager } from "../index";

/**
 * 深拷贝数据
 * @param obj
 * @returns
 */
export function deepClone(
  obj: Record<string, any>,
  cache = new WeakMap()
): any {
  // 如果不是对象或数组，则直接返回
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // 如果已经处理过这个对象，则直接返回缓存中的对象
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  // 处理数组
  if (Array.isArray(obj)) {
    const clonedArray = obj.map((item: any) => deepClone(item, cache));
    cache.set(obj, clonedArray);
    return clonedArray;
  }

  // 处理对象
  const clonedObj = {} as any;
  cache.set(obj, clonedObj);
  Object.keys(obj).forEach((key) => {
    clonedObj[key] = deepClone(obj[key], cache);
  });
  return clonedObj;
}

/**
 * 生成新的schema数据
 * 深拷贝数据,防止重复引用
 * 生成uuid
 * 生成field
 * @param schema
 */
export function generateNewSchema(schema: ComponentSchema) {
  const [newSchema] = mapSchemas([deepClone(schema)], (item) => {
    // 补充id字段
    const newVal = {
      ...item,
      id: `${item.type}_${getUUID(8)}`,
    };

    // 存在字段名，则自动在字段名后补充id
    if (
      (newVal.field || newVal.input) &&
      !pluginManager.getComponentConfingByType(newVal.type)?.editConstraints?.fixedField
    ) {
      newVal.field = newVal.id;
    }
    return newVal;
  });

  return newSchema;
}

/**
 * 不改变obj1引用，将obj2所有属性遍历复制给obj1。
 * 递归比较两个对象，将obj2的属性复制给obj1。
 * 如果obj1中有obj2没有的属性，则删除该属性。
 * @param obj1 - 要修改的对象。
 * @param obj2 - 要比较的对象。
 */
export function deepCompareAndModify(
  obj1: Record<string, any>,
  obj2: Record<string, any>
): void {
  // 循环遍历obj2的所有属性
  for (const [key, val2] of Object.entries(obj2)) {
    const val1 = obj1?.[key];
    // 如果obj1的属性值是对象或数组，则递归调用该函数
    if (val1 && val2 && typeof val1 === "object" && typeof val2 === "object") {
      deepCompareAndModify(val1, val2);
    } else {
      // 如果属性值不相等，则将obj2的属性值复制给obj1
      obj1[key] = val2;
    }
  }

  Object.keys(obj1)
    .reverse()
    .forEach((key) => {
      // 如果obj2中存在obj1的属性跳过
      if (obj2.hasOwnProperty(key)) {
        return;
      }
      // 如果obj2中没有obj1的属性，则从obj1中删除该属性
      if (Array.isArray(obj2)) {
        // obj1 是数组
        obj1.splice(key, 1);
      } else {
        // obj1 是对象
        delete obj1[key];
      }
    });
}

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
export function deepEqual(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
  ignoreKeys: string[] = [],
  visitedObjs = new WeakMap()
): boolean {
  const normalize = (obj: any): any => {
    // 如果是数组类型，则递归调用 normalize 函数对每个元素进行标准化处理
    if (Array.isArray(obj)) {
      return obj.map(normalize);
    }

    // 如果是对象类型，则将所有属性名按照字母顺序排序，并递归调用 normalize 函数对每个属性值进行标准化处理
    else if (typeof obj === "object" && obj !== null) {
      // 在访问过该对象时，直接返回一个占位符
      if (visitedObjs.has(obj)) {
        return "[Circular]";
      }
      visitedObjs.set(obj, true);

      const keys = Object.keys(obj).sort();
      const normalizedObj: Record<string, any> = {};
      keys.forEach((key) => {
        if (!ignoreKeys.includes(key)) {
          // 如果该属性不在忽略列表中
          normalizedObj[key] = normalize(obj[key]);
        }
      });

      // 递归调用 normalize 函数时，需要将 visitedObjs 参数传递下去
      visitedObjs.delete(obj);
      return normalizedObj;
    }
    // 其它类型直接返回即可
    else {
      return obj;
    }
  };

  // 对两个对象进行标准化处理后，再进行比较
  return JSON.stringify(normalize(obj1)) === JSON.stringify(normalize(obj2));
}

/**
 * 通过id获取节点路径
 * @param schemas
 * @param id
 */
export function getMatchedById(
  schemas: ComponentSchema[],
  id: string
): ComponentSchema[] {
  const matched: ComponentSchema[] = [];
  let found = false;

  function getNodePath(node: ComponentSchema): void {
    matched.push(node);
    if (node.id === id) {
      found = true;
    }
    // 遍历默认子节点
    if (!found && node.children != null && node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        getNodePath(node.children[i]);
        if (found) break;
      }
    }

    // 遍历插槽
    if (!found && node.slots) {
      for (let key in node.slots) {
        for (let i = 0; i < node.slots[key].length; i++) {
          getNodePath(node.slots[key][i]);
          if (found) break;
        }
      }
    }

    if (!found) {
      matched.pop();
    }
  }

  schemas.forEach(getNodePath);

  if (!found) {
    console.error(`没有查询到id为${id}的节点`);
  }

  return matched;
}

/**
 * 此函数接受一个字符串参数，表示对象中的字段 和 对象
 * 它通过将参数使用点“.”作为分隔符拆分成部分来检索字段的值
 * 然后通过迭代每一部分从对象中获取字段的值
 * 如果找不到字段值，则该函数返回null
 * @param field 属性路径
 */
export function getAttributeValue(
  field: string,
  obj: Record<string, any>
): Record<string, any> | undefined {
  // 使用“.”作为分隔符拆分field字符串，以创建字段数组。
  const fieldList = field.split(".");
  let data: Record<string, any> | undefined = obj;
  // 遍历fieldList中每个字段，以从obj中检索字段的值
  for (let i = 0; i < fieldList.length; i++) {
    // 更新nodeItem为nodeItem中当前字段的值。
    data = data[fieldList[i]];
    // 如果字段的值不存在，则返回空。
    if (typeof data === "undefined") return;
  }

  // 假如数据是个空数组，则直接返回 undefined
  // if (Array.isArray(data) && data.length === 0) {
  //   return;
  // }

  // 返回从obj中检索到的最终字段的值。

  return data;
}

/**
 * 设置属性值的函数
 * 这是一个设置属性值的函数，传入三个参数，一个是要设置的属性值，一个是要设置的属性路径,一个要设置的对象。
 * 函数主要工作是将属性路径拆分成数组，然后遍历这个数组，依次进入对象中的子属性，直到最后一个子属性，然后将属性值设置到这个子属性上。
 * @param value 属性值
 * @param field 属性路径
 * @param obj 属性路径
 */
export function setAttributeValue(
  value: any,
  field: string,
  obj: Record<string, any>
): void {
  // 使用“.”作为分隔符拆分field字符串，以创建字段数组。
  const fieldList = field.split(".");
  let data: Record<string, any> = obj;

  // 遍历属性路径数组
  fieldList.forEach((item, index) => {
    // 如果当前遍历到数组的最后一个元素，则将属性值设置到这个子属性上
    if (index === fieldList.length - 1) {
      data[item] = value;
      return;
    }

    // 否则，进入子属性对象中
    data = data[item] ?? (data[item] = {});
  });
}

/**
 *  获取表单字段
 * @param schemas 页面结构数据
 * @param formName 表单name
 */
export function getFormFields(
  schemas: ComponentSchema[],
  formName = "default"
) {
  const inputSchemaList = getFormSchemas(schemas, formName);
  return inputSchemaList.map((item) => item.field);
}

/**
 * 从给定的组件schema数组中获取特定表单的输入字段schema数组。
 * @param {ComponentSchema[]} schemas - 包含整个表单结构信息的组件schema数组。
 * @param {string} formName - 要获取输入字段schema的表单名称，默认为 "default"。
 * @returns {ComponentSchema[]} 包含表单输入字段schema的数组。
 */
export function getFormSchemas(
  schemas: ComponentSchema[],
  formName = "default"
) {
  const formSchema = findSchemas(
    schemas,
    (currentNode) => {
      return (
        currentNode.type === "form" &&
        (currentNode.componentProps?.name ?? currentNode.name === formName)
      );
    },
    true
  ) as ComponentSchema;
  // console.log(schema);
  const inputSchemaList = findSchemas(
    formSchema?.children ?? [],
    (currentNode) => {
      return Boolean(currentNode.input);
    },
    false,
    (currentNode: ComponentSchema) => {
      // 过滤子表单子节点
      return currentNode.type !== "subform";
    }
  ) as ComponentSchema[];

  return inputSchemaList;
}

/**
 * 查询Schema 返回所有符合添加的数据
 * @param schemas
 * @param handler
 * @param once  当once为true，表示只需要查询一条符合添加的数据之后结束函数
 * @param filter  节点过滤，函数返回 false,则不查询该节点得所有子节点 children
 * @returns
 */
export function findSchemas(
  schemas: ComponentSchema[],
  handler: (item: ComponentSchema) => boolean,
  once = false,
  filter?: (item: ComponentSchema) => boolean
) {
  const matchedNodes: ComponentSchema[] = [];

  const nodesToVisit: ComponentSchema[] = [...schemas];

  while (nodesToVisit.length) {
    const currentNode = nodesToVisit.pop() as ComponentSchema;

    // 检查默认子节点
    if (currentNode?.children && (!filter || filter(currentNode))) {
      nodesToVisit.push(...currentNode.children);
    }

    // 检查插槽
    if (currentNode?.slots && (!filter || filter(currentNode))) {
      for (let key in currentNode.slots) {
        nodesToVisit.push(...currentNode.slots[key]);
      }
    }

    if (handler(currentNode)) {
      matchedNodes.push(currentNode);
      if (once) {
        return currentNode;
      }
    }
  }

  // 当只查询一条数据时，执行到这里说明没有查询到数据，所以返回false
  if (once) {
    return false;
  }

  return matchedNodes;
}

/**
 * 遍历Schema 返回映射的数据
 * @param schemas
 * @param handler 映射处理
 * @param filter  节点过滤，函数返回 false,则不映射该节点得所有子节点 children
 * @returns
 */
export function mapSchemas(
  schemas: ComponentSchema[],
  handler: (item: ComponentSchema) => ComponentSchema,
  filter?: (item: ComponentSchema) => boolean
) {
  const nodesToVisit: ComponentSchema[] = [...schemas];

  while (nodesToVisit.length) {
    const currentNode = nodesToVisit.pop() as ComponentSchema;

    // 检查默认子节点
    if (currentNode?.children && (!filter || filter(currentNode))) {
      nodesToVisit.push(...currentNode.children);
    }
    // 检查插槽
    if (currentNode?.slots && (!filter || filter(currentNode))) {
      for (let key in currentNode.slots) {
        nodesToVisit.push(...currentNode.slots[key]);
      }
    }

    deepCompareAndModify(currentNode, handler(currentNode));
  }

  return schemas;
}

/**
 * 通过id查询schema
 * @param schemas
 * @param id
 * @returns
 */
export function findSchemaById(
  schemas: ComponentSchema[],
  id: string
): ComponentSchema {
  let index: number = 0;

  // 查询节点
  const schema = findSchemas(
    schemas,
    (currentNode) => {
      return currentNode.id === id;
    },
    true
  ) as ComponentSchema & { children: ComponentSchema };

  // 判断节点是否存在，不存在则抛出异常
  if (!schema) {
    throw new Error(`没有查询到id为${id}的节点`);
  }

  return schema;
}

/**
 * 通过id查询schema及节点children index 信息
 * @param schemas
 * @param id
 * @returns
 */
export function findSchemaInfoById(
  schemas: ComponentSchema[],
  id: string
): {
  list: ComponentSchema[];
  schema: ComponentSchema;
  index: number;
} {
  const stack: ComponentSchema[] = [{ type: "", children: schemas }];
  let index: number = 0;
  let children: ComponentSchema[] | null = null;
  // 查询父节点
  const parentSchema = findSchemas(
    stack,
    (currentNode) => {
      children = currentNode.children ?? null;

      if (!children) {
        if (currentNode?.slots) {
          for (let key in currentNode.slots) {
            children = currentNode.slots[key] as ComponentSchema[];
            for (let i = 0; i < children.length; i++) {
              if (children[i].id === id) {
                index = i;
                return true;
              }
            }
          }
        }
        return false;
      }

      for (let i = 0; i < children.length; i++) {
        if (children[i].id === id) {
          index = i;
          return true;
        }
      }

      return false;
    },
    true
  ) as ComponentSchema & { children: ComponentSchema };

  // 判断节点是否存在，不存在则抛出异常
  if (!children) {
    throw new Error(`没有查询到id为${id}的节点`);
  }

  return {
    list: children,
    schema: children[index],
    index,
  };
}

/**
 * 将k-form-design数据转换为epic-designer数据
 * @param data
 * @returns
 */

export function convertKFormData(data) {
  const convertedData: PageSchema = {
    schemas: [
      {
        type: "page",
        id: "root",
        label: "页面",
        children: [
          {
            label: "表单",
            type: "form",
            icon: "epic-icon-daibanshixiang",
            labelWidth: data.config.labelWidth || 100,
            name: "default",
            componentProps: {
              layout: data.config.layout || "horizontal",
              labelWidth: data.config.labelWidth || 100,
              labelLayout:
                data.config.labelLayout === "flex" ? "fixed" : "flex",
              labelCol: data.config.labelCol || { span: 5 },
              wrapperCol: data.config.wrapperCol || { span: 19 },
              hideRequiredMark: data.config.hideRequiredMark || false,
              colon: data.config.colon || true,
              labelAlign: data.config.labelAlign || "right",
              size: data.config.size || "middle",
            },
            children: [],
            id: "form_" + getUUID(),
          },
        ],
        componentProps: {
          style: {
            padding: "16px",
          },
        },
      },
    ],
    script: data.script || "",
  };

  convertedData.schemas[0]!.children![0]!.children = recursionConvertedNode(
    data.list
  );

  return convertedData;
}

/**
 * 递归转换子节点
 * @param children
 */
export function recursionConvertedNode(
  children: any,
  parent?: any
): ComponentSchema[] {
  return children.map((item: any) => {
    let type = item.type ?? "";
    const componentProps = item.options ?? {};

    const handleUploadComponent = (uploadType: string, replacement: string) => {
      if (type === uploadType) {
        type = replacement;
        if (componentProps.defaultValue) {
          componentProps.defaultValue = JSON.parse(componentProps.defaultValue);
        }
      }
    };

    handleUploadComponent("uploadImg", "upload-image");
    handleUploadComponent("uploadFile", "upload-file");

    if (type === "date" && componentProps.range) {
      componentProps.type = "daterange";
      delete componentProps.range;
    }

    if (type === "date" || type === "time") {
      componentProps.valueFormat = componentProps.format;
    }

    if (type === "textarea") {
      const { minRows, maxRows } = componentProps;
      componentProps.autoSize = { minRows, maxRows };
      delete componentProps.minRows;
      delete componentProps.maxRows;
    }

    if (type === "number" && !componentProps.precision) {
      delete componentProps.precision;
    }

    if (componentProps.width) {
      componentProps.style = { width: componentProps.width };
      delete componentProps.width;
    }

    if (type === "grid") {
      type = "row";
      // 待修改
    }

    if (parent && parent.type === "grid") {
      type = "col";
      componentProps.span = item.span;
      item.key = getUUID();
    }

    // 创建新的节点数据
    const newItem: ComponentSchema = {
      label: item.label,
      type,
      icon: item.icon || "",
      field: item.model,
      componentProps,
      id: item.key,
    };

    // 隐藏label 和 无FormItem 数据
    if (componentProps.noFormItem || !componentProps.showLabel) {
      newItem.noFormItem = true;
      delete componentProps.noFormItem;
      delete componentProps.showLabel;
    }

    // 清空属性字段
    if (componentProps.clearable) {
      componentProps.allowClear = true;
      delete componentProps.clearable;
    }

    // 输入组件
    const inputTypes = [
      "input",
      "textarea",
      "number",
      "password",
      "select",
      "cascader",
      "checkbox",
      "radio",
      "date",
      "time",
      "slider",
      "switch",
      "color-picker",
      "upload-file",
      "upload-image",
    ];
    if (inputTypes.includes(type)) {
      newItem.input = true;
      if (item.rules?.[0]?.required === false) {
        item.rules.shift();
      }
      if (item.rules?.length > 0) {
        newItem.rules = item.rules;
      }
    }

    // 递归子节点转换
    if (item.list) {
      newItem.children = recursionConvertedNode(item.list, item);
    }
    if (item.columns) {
      newItem.children = recursionConvertedNode(item.columns, item);
    }
    if (item.trs) {
      newItem.children = recursionConvertedNode(item.trs, item);
    }
    if (item.tds) {
      newItem.children = recursionConvertedNode(item.tds, item);
    }

    return newItem;
  });
}

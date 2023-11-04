import { type NodeItem } from "@epic-designer/core/types/epic-designer";
import { getUUID } from './string'

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
export function generateNewSchema(schema: NodeItem) {
  
  const [newSchema] = mapSchemas([deepClone(schema)], (item) => {
    // 补充id字段
    const newVal = {
      ...item,
      id: `${item.type}_${getUUID(8)}`,
    };
    // 存在字段名，则自动在字段名后补充id
    if (newVal.field || newVal.input) {
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
export function deepEqual(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
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
        normalizedObj[key] = normalize(obj[key]);
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
export function getMatchedById(schemas: NodeItem[], id: string): NodeItem[] {
  const matched: NodeItem[] = [];
  let found = false;

  function getNodePath(node: NodeItem): void {
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
  obj: NodeItem
): NodeItem | undefined {
  // 使用“.”作为分隔符拆分field字符串，以创建字段数组。
  const fieldList = field.split(".");
  let data: NodeItem | undefined = obj;
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
  obj: NodeItem
): void {
  // 使用“.”作为分隔符拆分field字符串，以创建字段数组。
  const fieldList = field.split(".");
  let data: NodeItem = obj;

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
export function getFormFields(schemas: NodeItem[], formName = "default") {
  const formSchema = findSchemas(
    schemas,
    (currentNode) => {
      return currentNode.type === "form" && currentNode.name === formName;
    },
    true
  ) as NodeItem;
  // console.log(schema);
  const inputSchemaList = findSchemas(
    formSchema?.children ?? [],
    (currentNode) => {
      return Boolean(currentNode.input);
    },
    false,
    (currentNode: NodeItem) => {
      // 过滤子表单子节点
      return currentNode.type !== "subform";
    }
  ) as NodeItem[];

  return inputSchemaList.map((item) => item.field);
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
  schemas: NodeItem[],
  handler: (item: NodeItem) => boolean,
  once = false,
  filter?: (item: NodeItem) => boolean
) {
  const matchedNodes: NodeItem[] = [];

  const nodesToVisit: NodeItem[] = [...schemas];

  while (nodesToVisit.length) {
    const currentNode = nodesToVisit.pop() as NodeItem;

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
  schemas: NodeItem[],
  handler: (item: NodeItem) => NodeItem,
  filter?: (item: NodeItem) => boolean
) {
  const nodesToVisit: NodeItem[] = [...schemas];

  while (nodesToVisit.length) {
    const currentNode = nodesToVisit.pop() as NodeItem;

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
export function findSchemaById(schemas: NodeItem[], id: string): NodeItem {
  let index: number = 0;

  // 查询节点
  const schema = findSchemas(
    schemas,
    (currentNode) => {
      return currentNode.id === id;
    },
    true
  ) as NodeItem & { children: NodeItem };

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
  schemas: NodeItem[],
  id: string
): {
  list: NodeItem[];
  schema: NodeItem;
  index: number;
} {
  const stack: NodeItem[] = [{ type: "", children: schemas }];
  let index: number = 0;
  let children: NodeItem[] | null = null;
  // 查询父节点
  const parentSchema = findSchemas(
    stack,
    (currentNode) => {
      children = currentNode.children ?? null;

      if (!children) {
        if (currentNode?.slots) {
          for (let key in currentNode.slots) {
            children = currentNode.slots[key];
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
  ) as NodeItem & { children: NodeItem };

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

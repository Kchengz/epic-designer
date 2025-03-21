import type { ComponentSchema } from '@epic-designer/types';

import { PageSchema } from '@epic-designer/types';

import { pluginManager } from '../index';
import { getUUID } from './string';

/**
 * 深拷贝数据
 * @param obj
 */
export function deepClone<T extends object>(obj: T, cache = new WeakMap()): T {
  // 如果不是对象或数组，则直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // 如果已经处理过这个对象，则直接返回缓存中的对象
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  // 处理数组
  if (Array.isArray(obj)) {
    const clonedArray = obj.map((item) => deepClone(item as T, cache)) as T;
    cache.set(obj, clonedArray);
    return clonedArray;
  }

  // 处理对象
  const clonedObj = {} as Record<string, unknown>;
  cache.set(obj, clonedObj);
  Object.keys(obj).forEach((key) => {
    clonedObj[key] = deepClone(
      (obj as Record<string, unknown>)[key] as T,
      cache,
    );
  });
  return clonedObj as T;
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
      !pluginManager.getComponentConfingByType(newVal.type)?.editConstraints
        ?.fixedField
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
 * 如果obj1中有obj2没有的属性，根据shouldDelete参数决定是否删除该属性。
 * @param obj1 - 要修改的对象。
 * @param obj2 - 要比较的对象。
 * @param shouldDelete - 如果为true，则删除obj2中不存在的obj1的属性。
 */
export function deepCompareAndModify(
  obj1: object,
  obj2: object,
  shouldDelete: boolean = true,
): void {
  const typedObj1 = obj1 as Record<string, unknown>;

  // 循环遍历obj2的所有属性
  for (const [key, val2] of Object.entries(obj2)) {
    // 如果obj1的属性值是对象或数组，则递归调用该函数
    if (
      typedObj1[key] &&
      val2 &&
      typeof typedObj1[key] === 'object' &&
      typeof val2 === 'object'
    ) {
      // 如果typedObj1[key]是数组，val2为非数组
      if (Array.isArray(typedObj1[key]) && !Array.isArray(val2)) {
        typedObj1[key] = {};
      } else if (!Array.isArray(typedObj1[key]) && Array.isArray(val2)) {
        typedObj1[key] = [];
      }
      // 递归比较
      deepCompareAndModify(
        typedObj1[key] as Record<string, unknown>,
        val2 as Record<string, unknown>,
        shouldDelete,
      );
    } else {
      // 如果属性值不相等，则将obj2的属性值复制给typedObj1
      typedObj1[key] = val2;
    }
  }

  if (shouldDelete) {
    Object.keys(typedObj1)
      .reverse()
      .forEach((key) => {
        // 如果obj2中存在typedObj1的属性跳过
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
          return;
        }
        // 如果obj2中没有typedObj1的属性，则从typedObj1中删除该属性
        if (Array.isArray(typedObj1)) {
          // typedObj1 是数组，key 是字符串，需要转成数字索引
          typedObj1.splice(Number(key), 1);
        } else {
          // typedObj1 是对象
          delete typedObj1[key];
        }
      });
  }
}

/**
 * 深度比较两个对象是否相等
 * @param obj1
 * @param obj2
 * @param ignoreKeys 可选参数，指定要忽略比较的属性名数组
 */
export function deepEqual(
  obj1: object,
  obj2: object,
  ignoreKeys: string[] = [],
  visitedObjs = new WeakMap(),
): boolean {
  const normalize = (obj: unknown): unknown => {
    // 如果是数组类型，则递归调用 normalize 函数对每个元素进行标准化处理
    if (Array.isArray(obj)) {
      return obj.map(normalize);
    }

    // 如果是对象类型，则将所有属性名按照字母顺序排序，并递归调用 normalize 函数对每个属性值进行标准化处理
    else if (typeof obj === 'object' && obj !== null) {
      // 在访问过该对象时，直接返回一个占位符
      if (visitedObjs.has(obj)) {
        return '[Circular]';
      }
      visitedObjs.set(obj, true);

      const keys = Object.keys(obj).sort();
      const normalizedObj: Record<string, unknown> = {};
      keys.forEach((key) => {
        if (!ignoreKeys.includes(key)) {
          // 如果该属性不在忽略列表中
          normalizedObj[key] = normalize((obj as Record<string, unknown>)[key]);
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
  id: string,
): ComponentSchema[] {
  const matched: ComponentSchema[] = [];
  let found = false;

  function getNodePath(node: ComponentSchema): void {
    matched.push(node);
    if (node.id === id) {
      found = true;
    }
    // 遍历默认子节点
    if (!found && node.children && node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        getNodePath(node.children[i]);
        if (found) break;
      }
    }

    // 遍历插槽
    if (!found && node.slots) {
      for (const key in node.slots) {
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
 * 从嵌套对象中提取值
 * @param object - 要访问的对象
 * @param path - 点分隔的路径字符串
 * @param defaultValue - 如果路径不存在，返回的默认值
 * @returns 通过路径获取的值
 */
export function getValueByPath(
  object: object,
  path: string,
  defaultValue?: unknown,
) {
  // 将路径字符串拆分为数组
  const pathArray = path.split('.');

  // 逐步从对象中提取值

  let result: any = object;
  for (const element of pathArray) {
    // eslint-disable-next-line eqeqeq
    if (result == null) {
      // 如果中间的值为 null 或 undefined，返回默认值
      return defaultValue;
    }

    result = result[element];
  }

  // 如果最终的值为 undefined，返回默认值
  return result === undefined ? defaultValue : result;
}

/**
 * 在嵌套对象中设置值
 * @param object - 要修改的对象
 * @param path - 点分隔的路径字符串
 * @param value - 要设置的值
 * @returns 修改后的对象
 */
export function setValueByPath(object: object, path: string, value: unknown) {
  // 将路径字符串拆分为数组
  const pathArray = path
    .replaceAll(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter(Boolean);

  // 逐步设置对象中的值

  let current: any = object;

  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];

    // 如果当前对象的属性不存在，则创建一个新对象或数组
    // eslint-disable-next-line eqeqeq
    if (current[key] == null) {
      // 如果路径部分是数字，创建数组；否则，创建对象
      current[key] = Number.isNaN(Number(pathArray[i + 1])) ? {} : [];
    }

    current = current[key];
  }

  // 在路径的最后一层设置值
  current[pathArray[pathArray.length - 1]] = value;

  return object;
}

/**
 *  获取表单字段
 * @param schemas 页面结构数据
 * @param formName 表单name
 */
export function getFormFields(
  schemas: ComponentSchema[],
  formName = 'default',
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
  formName = 'default',
) {
  const formSchema = findSchemas(
    schemas,
    (currentNode) => {
      return (
        currentNode.type === 'form' &&
        (currentNode.componentProps?.name ?? currentNode.name === formName)
      );
    },
    true,
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
      return currentNode.type !== 'subform';
    },
  ) as ComponentSchema[];

  return inputSchemaList;
}

/**
 * 查询Schema 返回所有符合添加的数据
 * @param schemas
 * @param handler
 * @param once  当once为true，表示只需要查询一条符合添加的数据之后结束函数
 * @param filter  节点过滤，函数返回 false,则不查询该节点的子节点 children
 */
export function findSchemas(
  schemas: ComponentSchema[],
  handler: (item: ComponentSchema) => boolean,
  once = false,
  filter?: (item: ComponentSchema) => boolean,
) {
  const matchedNodes: ComponentSchema[] = [];

  const nodesToVisit: ComponentSchema[] = [...schemas];

  while (nodesToVisit.length > 0) {
    const currentNode = nodesToVisit.pop() as ComponentSchema;

    // 检查默认子节点
    if (currentNode?.children && (!filter || filter(currentNode))) {
      nodesToVisit.push(...currentNode.children);
    }

    // 检查插槽
    if (currentNode?.slots && (!filter || filter(currentNode))) {
      for (const key in currentNode.slots) {
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
 */
export function mapSchemas(
  schemas: ComponentSchema[],
  handler: (item: ComponentSchema) => ComponentSchema,
  filter?: (item: ComponentSchema) => boolean,
) {
  const nodesToVisit: ComponentSchema[] = [...schemas];

  while (nodesToVisit.length > 0) {
    const currentNode = nodesToVisit.pop() as ComponentSchema;

    // 检查默认子节点
    if (currentNode?.children && (!filter || filter(currentNode))) {
      nodesToVisit.push(...currentNode.children);
    }
    // 检查插槽
    if (currentNode?.slots && (!filter || filter(currentNode))) {
      for (const key in currentNode.slots) {
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
 */
export function findSchemaById(
  schemas: ComponentSchema[],
  id: string,
): ComponentSchema {
  // 查询节点
  const schema = findSchemas(
    schemas,
    (currentNode) => {
      return currentNode.id === id;
    },
    true,
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
 */
export function findSchemaInfoById(
  schemas: ComponentSchema[],
  id: string,
): {
  index: number;
  list: ComponentSchema[];
  parentSchema: ComponentSchema;
  schema: ComponentSchema;
} {
  const stack: ComponentSchema[] = [{ type: '', children: schemas }];
  let index: number = 0;
  let children: ComponentSchema[] | null = null;
  // 查询父节点
  const parentSchema = findSchemas(
    stack,
    (currentNode) => {
      children = currentNode.children ?? null;

      if (!children) {
        if (currentNode?.slots) {
          for (const key in currentNode.slots) {
            children = currentNode.slots[key] as ComponentSchema[];
            for (const [i, child] of children.entries()) {
              if (child.id === id) {
                index = i;
                return true;
              }
            }
          }
        }
        return false;
      }

      for (const [i, child] of children.entries()) {
        if (child.id === id) {
          index = i;
          return true;
        }
      }

      return false;
    },
    true,
  ) as ComponentSchema & { children: ComponentSchema };

  // 判断节点是否存在，不存在则抛出异常
  if (!children) {
    throw new Error(`没有查询到id为${id}的节点`);
  }

  return {
    index,
    parentSchema,
    schema: children[index],
    list: children,
  };
}

/**
 * 将k-form-design数据转换为epic-designer数据
 * @param data
 * @returns
 */

export function convertKFormData(data: any) {
  if (!data.config) {
    data.config = {};
  }
  const convertedData: PageSchema = {
    schemas: [
      {
        componentProps: {
          style: {
            padding: '16px',
          },
        },
        id: 'root',
        label: '页面',
        type: 'page',
        children: [
          {
            label: '表单',
            type: 'form',
            icon: 'epic-icon-daibanshixiang',
            labelWidth: data.config.labelWidth || 100,
            name: 'default',
            componentProps: {
              colon: data.config.colon || true,
              hideRequiredMark: data.config.hideRequiredMark || false,
              labelAlign: data.config.labelAlign || 'right',
              labelCol: data.config.labelCol || { span: 5 },
              labelLayout:
                data.config.labelLayout === 'flex' ? 'fixed' : 'flex',
              labelWidth: data.config.labelWidth || 100,
              layout: data.config.layout || 'horizontal',
              size: data.config.size || 'middle',
              wrapperCol: data.config.wrapperCol || { span: 19 },
            },
            children: [],
            id: `form_${getUUID()}`,
          },
        ],
      },
    ],
    script: data.script || '',
  };

  if (convertedData.schemas && convertedData.schemas.length > 0) {
    const firstSchema = convertedData.schemas[0];
    // 检查 firstSchema 的 children 是否存在且长度大于 0
    if (firstSchema.children && firstSchema.children.length > 0) {
      const firstChild = firstSchema.children[0];
      // 检查 data.list 是否存在
      if (data.list) {
        firstChild.children = recursionConvertedNode(data.list);
      }
    }
  }

  return convertedData;
}

// 定义节点的类型
interface OriginalNode {
  columns?: OriginalNode[];
  icon?: string;
  key?: string;
  label?: string;
  list?: OriginalNode[];
  model?: string;
  options?: Record<string, unknown>;
  rules?: { required: boolean }[];
  span?: number;
  tds?: OriginalNode[];
  trs?: OriginalNode[];
  type?: string;
}

/**
 * 递归转换子节点
 * @param children
 */
export function recursionConvertedNode(
  children: OriginalNode[],
  parent?: OriginalNode,
): ComponentSchema[] {
  return children.map((item) => {
    let type = item.type ?? '';
    const componentProps = item.options ?? ({} as Record<string, unknown>);

    const handleUploadComponent = (uploadType: string, replacement: string) => {
      if (type === uploadType) {
        type = replacement;
        if (typeof componentProps.defaultValue === 'string') {
          componentProps.defaultValue = JSON.parse(componentProps.defaultValue);
        }
      }
    };

    handleUploadComponent('uploadImg', 'upload-image');
    handleUploadComponent('uploadFile', 'upload-file');

    if (type === 'date' && componentProps.range) {
      componentProps.type = 'daterange';
      delete componentProps.range;
    }

    if (type === 'date' || type === 'time') {
      componentProps.valueFormat = componentProps.format;
    }

    if (type === 'textarea') {
      const { maxRows, minRows } = componentProps;
      componentProps.autoSize = { maxRows, minRows };
      delete componentProps.minRows;
      delete componentProps.maxRows;
    }

    if (type === 'number' && !componentProps.precision) {
      delete componentProps.precision;
    }

    if (componentProps.width) {
      componentProps.style = { width: componentProps.width };
      delete componentProps.width;
    }

    if (type === 'grid') {
      type = 'row';
      // 待修改
    }

    if (parent && parent.type === 'grid') {
      type = 'col';
      componentProps.span = item.span;
      item.key = getUUID();
    }

    // 创建新的节点数据
    const newItem: ComponentSchema = {
      componentProps,
      field: item.model,
      icon: item.icon || '',
      id: item.key,
      label: item.label,
      type,
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
      'input',
      'textarea',
      'number',
      'password',
      'select',
      'cascader',
      'checkbox',
      'radio',
      'date',
      'time',
      'slider',
      'switch',
      'color-picker',
      'upload-file',
      'upload-image',
    ];
    if (inputTypes.includes(type)) {
      newItem.input = true;
      if (item.rules?.[0]?.required === false) {
        item.rules.shift();
      }
      if (item.rules && item.rules.length > 0) {
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

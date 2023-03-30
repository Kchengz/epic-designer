import { NodeItem } from "../types/kDesigner";
import { defineAsyncComponent, AsyncComponentLoader, toRaw } from 'vue'
import KAsyncLoading from '../components/KAsyncLoading/KAsyncLoading.vue'
/**
 * 生成一个用不重复的ID
 * @param randomLength 随机id长度
 */
export function getUUID(randomLength = 10): string {
  return Number(
    Math.random().toString().substring(3, randomLength) + Date.now()
  ).toString(36);
}

/**
将字符串的首字母大写
@param {string} 待处理字符串
@returns {string} 首字母大写后的字符串
*/
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 深拷贝数据
 * @param obj
 * @returns
 */
export function deepClone(obj: any, cache = new WeakMap()): any {
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
    const clonedArray = obj.map((item: any) => deepClone(item, cache));
    cache.set(obj, clonedArray);
    return clonedArray;
  }

  // 处理对象
  const clonedObj = {} as any;
  cache.set(obj, clonedObj);
  Object.keys(obj).forEach(key => {
    clonedObj[key] = deepClone(obj[key], cache);
  });
  return clonedObj;
}


/**
 * * 异步加载组件
 * @param loader
 * @returns
 */
export const loadAsyncComponent = (loader: AsyncComponentLoader<any>) =>
  defineAsyncComponent({
    loader,
    loadingComponent: KAsyncLoading,
    delay: 80,
  })

/**
 * 通过id查询schema
 * @param schemas
 * @param id
 * @returns
 */
export function findSchemaById(schemas: NodeItem[], id: string) {
  const stack: NodeItem[] = [{ type: 'root', children: schemas }];

  while (stack.length > 0) {
    const item = stack.pop();
    const children = item?.children;
    // 没有子节点,跳过该循环
    if (!children) {
      continue
    }

    for (let i = 0; i < children.length; i++) {
      if (children[i].id === id) {
        return {
          list: item.children as NodeItem[],
          schema: children[i],
          index: i,
        };
      }

      stack.push(...children);

    }

  }

  throw `没有查询到id为${id}的节点`;
}


/**
 * 通过id获取节点路径
 * @param schemas
 * @param id
 */
export function getMatchedById(schemas: NodeItem[], id: string) {
  const matched: NodeItem[] = [];
  let found = false;

  function getNodePath(node: NodeItem) {
    matched.push(node);
    if (node.id === id) {
      found = true;
    }
    if (!found && node.children && node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        getNodePath(node.children[i]);
        if (found) break;
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

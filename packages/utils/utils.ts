/**
 * 生成一个用不重复的ID
 * @param randomLength 随机id长度
 */
export function getUUID(randomLength = 10): string {
  return Number(Math.random().toString().substring(3, randomLength) + Date.now()).toString(36)
}

/**
 * 深拷贝数据
 * @param json 
 * @returns 
 */
export function deepClone(json: object | any[]) {
  return JSON.parse(JSON.stringify(json)) 

}
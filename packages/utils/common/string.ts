
/**
 * 生成一个用不重复的ID
 * @param randomLength 随机id长度
 */
export function getUUID(randomLength = 10): string {
    return Number(
      `${Math.random().toString().substring(3, randomLength)}${Date.now()}`
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
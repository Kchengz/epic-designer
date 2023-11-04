/**
 * 生成一个用不重复的ID
 * @param randomLength 随机id长度 0 - 11
 */
export function getUUID(randomLength = 10): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + randomLength);
}

/**
  将字符串的首字母大写
  @param str 待处理字符串
  @returns string 首字母大写后的字符串
  */
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

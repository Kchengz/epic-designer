/**
 * 生成一个用不重复的ID
 * @param randomLength 随机id长度 0 - 11
 */
export function getUUID(randomLength = 6, type = 'string'): string {
  let UUID = '';
  // 生成字符类型UUID
  if (type === 'string') {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      UUID += characters[randomIndex];
    }
  }

  // 生成数值类型UUID
  if (type === 'number') {
    for (let i = 0; i < randomLength; i++) {
      UUID += Math.floor(Math.random() * 10); // 生成 0 到 9 之间的随机整数
    }
  }

  return UUID;
}

/**
  将字符串的首字母大写
  @param str 待处理字符串
  @returns string 首字母大写后的字符串
  */
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

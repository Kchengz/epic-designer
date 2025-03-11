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

/**
 * 从 URL 中提取文件名
 * @param url - 包含文件名的 URL
 * @returns 提取的文件名，如果没有则返回空字符串
 */
export function getFileNameByUrl(url: string): string {
  // 找到最后一个斜杠的位置
  const lastSlashIndex = url.lastIndexOf('/');
  if (lastSlashIndex === -1) {
    // 如果没有斜杠，返回整个 URL
    return url;
  }
  // 提取斜杠后面的部分
  const fileName = url.slice(lastSlashIndex + 1);
  return fileName;
}

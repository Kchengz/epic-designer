/**
 * 生成一个用不重复的ID
 * @param randomLength 随机id长度 0 - 11
 */
export function getUUID(
  randomLength = 6,
  type: 'number' | 'string' = 'string',
): string {
  // 生成字符类型UUID
  if (type === 'string') {
    const buf: string[] = [];
    const max = 36; // 0-9, a-z 共36个字符
    const offset = 87; // 'a'的charCodeAt值为97，97 - 10 = 87
    for (let i = 0; i < randomLength; i++) {
      const k = Math.floor(Math.random() * max);
      buf.push(k < 10 ? k.toString() : String.fromCodePoint(offset + k));
    }
    return buf.join('');
  }

  // 生成数值类型UUID
  const times = 10 ** (randomLength - 1);
  return (times + Math.floor(Math.random() * 9 * times)).toString();
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

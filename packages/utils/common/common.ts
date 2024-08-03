/**
 * 防抖函数，用于限制处理函数的执行频率。
 * @param handler - 要防抖的函数。
 * @param delay - 防抖延迟时间，单位为毫秒。
 * @returns 返回一个防抖处理后的函数。
 */
export function debounce<T extends (...args: any[]) => void>(handler: T, delay: number): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>): void => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      handler(...args);
    }, delay);
  };
}

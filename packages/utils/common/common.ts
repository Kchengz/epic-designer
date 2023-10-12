/**
 * 防抖函数
 * @param handler
 * @param delay
 * @returns
 */
export function debounce(handler: Function, delay: number) {
  let timer: any = null;
  return (...args: any[]) => {
      if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {

      handler.apply(this, args);
    }, delay);
  };
}

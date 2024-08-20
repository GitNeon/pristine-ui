export function debounce<T extends (...args: any[]) => any, U>(
  func: T,
  wait: number,
  immediate: boolean = false,
  thisArg?: U,
): (...funcArgs: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>): void => {
    // 清除上一个定时器
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    if (immediate && !timeout) {
      // 立即执行第一次
      func.apply(thisArg, args);
    }

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        // 非立即执行，在延迟后执行
        func.apply(thisArg, args);
      }
    }, wait);
  };
}

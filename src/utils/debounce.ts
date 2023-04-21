export const debounce = (fn: (...args: any) => any, ms = 50) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(null, args);
    }, ms);
  };
};

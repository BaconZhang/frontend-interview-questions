function debounce(fn, delay) {
  let timer = null;
  let context = this;
  return function () {
    if (!timer) {
      fn.apply(context, ...arguments);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
    return
  }
}
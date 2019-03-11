function debounce(fn, delay) {
  let timer = null;
  let context = this;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(context, ...arguments);
      }, delay);
    } else {
      clearTimeout(timer);
      timer = null;
      timer = setTimeout(() => {
        fn.call(context, ...arguments);
      }, delay);
    }
  }
}
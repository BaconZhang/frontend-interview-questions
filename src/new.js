function _new(constructor, ...args) {
  function F() { };
  F.prototype = superType.prototype;

  let instance = new Object();
  constructor.call(instance, ...args);
  instance.prototype = new F();
  instance.constructor = constructor;
  return instance;
}
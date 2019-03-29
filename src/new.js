function _new(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  const ret = constructor.call(obj, ...args);
  return ret instanceof Object ? ret : obj;
}

function People(name) {
  this.name = name;
}

People.prototype.sayName = function () {
  console.log(this.name);
}

let people = _new(People, 'jack');
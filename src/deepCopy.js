const TYPES = {
  array: 'Array',
  object: 'Object',
  function: 'Function',
  string: 'String',
  null: 'Null',
  undefined: 'Undefined',
  boolean: 'Boolean',
  number: 'Number'
};
const getType = (o) => Object.prototype.toString(o).slice(8, -1);
const isType = (o, type) => TYPES[type] && TYPES[type] === getType(o);

const deepCopy = (o) => {
  let result;
  if (isType(o, 'array')) {
    result = o.map(i => deepCopy(o[i]));
  } else if (isType(o, 'object')) {
    result = Object.keys(o).reduce((prev, key) => {
      prev[key] = deepCopy(obj[key]);
      return prev;
    }, {})
  } else if (isType(o, 'function')) {
    result = eval('(' + o.toString() + ')');
  } else {
    result = o;
  }
  return result;
};
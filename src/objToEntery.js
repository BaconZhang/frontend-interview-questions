var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

// 要求转换成如下对象
var output = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

function trans(obj, keys = []) {
  let result = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string") {
      result[keys.concat(key).join(".")] = value;
    } else {
      result = Object.assign(result, trans(value, keys.concat(key)));
    }
  });
  return result;
}

console.log(trans(entry));
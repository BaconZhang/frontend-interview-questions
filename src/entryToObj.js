var entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

// 要求转换成如下对象
var output = {
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

function trans(entry, parent = {}) {
  Object.entries(entry).forEach(([key, value]) => {
    if (key.includes(".")) {
      const index = key.indexOf(".");
      const cur = key.slice(0, index);
      const next = key.slice(index + 1);
      parent[cur] = Object.assign({}, parent[cur], trans({ [next]: value }));
    } else {
      parent[key] = value;
    }
  });
  return parent;
}

console.log(JSON.stringify(trans(entry), null, 4));
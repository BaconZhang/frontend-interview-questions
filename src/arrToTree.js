const arr = [
  { id: 1 },
  { id: 2, pid: 1 },
  { id: 3, pid: 2 },
  { id: 4, pid: 1 },
  { id: 5, pid: 3 },
  { id: 6, pid: 2 },
  { id: 6, pid: 2 },
  { id: 2, pid: 1 }
];

const trans = (arr) => {
  const cache = arr.reduce((map, item) => {
    map[item.id] = item;
    return map;
  }, {});
  const result = [];
  Object.values(cache).forEach(item => {
    if (!item.pid) {
      result.push(item);
    } else {
      const parent = cache[item.pid];
      parent.child = parent.child || [];
      parent.child.push(item);
    }
  })
  return result;
};

console.log(JSON.stringify(trans(arr), null, 2));
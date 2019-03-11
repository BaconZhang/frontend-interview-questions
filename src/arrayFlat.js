const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

const flat = (array) => [].concat(...array.map(i => Array.isArray(i) ? flat(i) : [i]));

const unique = (array) => [...new Set(array)];

const sort = (array) => array.sort((a, b) => a - b);

const compose = (...fns) => value => [...fns].reverse().reduce((prev, fn) => prev = fn(prev), value);

compose(sort, unique, flat)(arr);
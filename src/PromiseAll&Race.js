function all(fns) {
  return new Promise((resolve, reject) => {
    let result = [];
    let resolveCount = 0;
    next(0);
    function next(index) {
      fns[index]().then(res => {
        result[index] = res;
        resolveCount++;
        if (resolveCount === fns.length) {
          resolve(result);
        }
      }).catch(err => reject(err));
      if (index < fns.length - 1) {
        next(index + 1);
      }
    };
  });
}

function race(fns) {
  return new Promise((resolve, reject) => {
    fns.forEach(func => {
      func().then(resolve, reject);
    });
  })
}

const fns = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 4000)),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 3000)),
  () => new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(4), 1000)),
];

all(fns).then(res => console.log(res));
race(fns).then(res => console.log(res));
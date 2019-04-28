Promise.prototype.finally = function (callback) {
  return this.then(
    (value) => Promise.resolve(callback()).then(() => value),
    (err) => Promise.resolve(callback()).catch(() => err),
  )
}

Promise.prototype.done = function (resolve, reject) {
  this.then(resolve, reject).catch(err => {
    throw err;
  })
}

new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve(1) : reject(2);
}).then(v => {
  console.log(v);
  return v + 1;
}).catch(err => {
  console.log('err', err);
  return "error";
}).finally(() => {
  console.log("finally");
}).then(v => {
  console.log("then", v);
  return v;
}).done(v => {
  console.log("done", v)
  return "done"
})
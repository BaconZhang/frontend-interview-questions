const STATUS = {
  'pending': 0,
  'resolved': 1,
  'rejected': 2
};

function Promise(executor) {
  let self = this;
  self.status = STATUS.pending;
  self.data = undefined;
  self.onResolvedCallback = [];
  self.onRejectedCallback = [];

  function resolve(value) {
    if (self.status === STATUS.pending) {
      self.status = STATUS.resolved;
      self.data = value;
      for (let i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value);
      }
    }
  }

  function reject(reason) {
    if (self.status === STATUS.pending) {
      self.status = STATUS.rejected;
      self.data = reason;
      for (let i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason);
      }
    }
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  let self = this;
  let promise2;

  onResolved = typeof onResolved === 'function' ? onResolved : function (value) { return value };
  onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { throw reason };

  if (self.status === STATUS.resolved) {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        let x = onResolved(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
        resolve(x);
      } catch (e) {
        reject(e)
      }
    })
  }

  if (self.status === STATUS.rejected) {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        let x = onRejected(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  if (self.status === STATUS.pending) {
    return promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallback.push(function (value) {
        try {
          let x = onResolved(value);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
          resolve(x);
        } catch (e) {
          reject(e)
        }
      })

      self.onRejectedCallback.push(function (reason) {
        try {
          var x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}
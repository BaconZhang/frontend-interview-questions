// unfinished
const STATES = {
  'pending': 0,
  'fulfilled': 1,
  'rejected': 2,
  'isPromise': 3
};

function noop() { }

function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  }
}

/*
  @params fn (resolve, reject) => {}
*/
function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');

  this._state = STATES.pending;

  this._handled = undefined;

  this._value = undefined;

  this._deferreds = [];

  doReslove(fn, this);
}

function handle(context, deferred) {
  while (context._state === Promise.isPromise) {
    context = context._value;
  }
  if (context._state === STATES.pending) {
    context._deferreds.push(deferred);
    return;
  }
  context._handled = true;
  Promise._immediateFn(function () {
    const cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, context._value);
      return;
    }
    let ret;
    try {
      ret = cb(context._value);
    } catch (err) {
      reject(deferred.promise, err);
      return
    }
    resolve(deferred.promise, ret);
  })
}

function reject(context, err) {
  context._state = STATES.rejected;
  selef._value = err;
  finale(context);
}

function finale(context) {
  if (context._state === STATES.rejected && context._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!context._handled) {
        Promise._unhandledRejectionFn(context.value);
      }
    })
  }

  for (let i = 0; i < context._deferreds.length; i++) {
    handle(context, context._deferreds[i]);
  }
  context._deferreds = null;
}

function doReslove(fn, context) {
  let done = false;
  try {
    fn(
      function (value) {
        if (done) return;
        done = false;
        resolve(context, value);
      },
      function (err) {
        if (done) return;
        done = true;
        reject(context, err);
      }
    )
  } catch (err) {
    if (done) return;
    done = true;
    reject(context, err);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  let promise = new this.contructor();


}

Promise._immediateFn = function (fn) {
  if (typeof setImmediate === 'function') {
    setImmediate(fn);
  } else {
    setTimeout(fn, 0);
  }
}

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err);
  }
}

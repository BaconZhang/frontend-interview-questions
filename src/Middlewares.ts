type Middleware<C extends object = {}> = (ctx: C, next: () => void) => void | Promise<void>;

class Middlewares<C extends object> {
  private ctx: C;
  private queue: Middleware<C>[];
  constructor(ctx: C = {} as C) {
    this.ctx = ctx;
    this.queue = [];
  }

  use = (middleware: Middleware<C>) => {
    this.queue.push(middleware);
  }

  exec = () => {
    let current = -1;
    return dispatch(0);
    function dispatch(index: number) {
      if (index <= current) return Promise.reject(new Error("next() called multiple times"));
      if (index === this.queue.length) {
        return Promise.resolve();
      }
      current = index;
      const task: Middleware<C> = this.queue[index];
      function next() {
        return dispatch(index + 1);
      }
      try {
        return Promise.resolve(task(this.ctx, next));
      } catch (err) {
        return Promise.reject(err);
      }
    };
  }
}

const middlewares = new Middlewares();

const one: Middleware = (ctx, next) => {
  console.log(1, ctx);
  next();
}

const two: Middleware = (ctx, next) => {
  console.log(2, ctx);
  next();
}

const three: Middleware = (ctx, next) => {
  console.log(3, ctx);
  next();
}

middlewares.exec().then(() => {
  console.log("done");
})
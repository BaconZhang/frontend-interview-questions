var Middlewares = /** @class */ (function () {
    function Middlewares(ctx) {
        var _this = this;
        if (ctx === void 0) { ctx = {}; }
        this.use = function (middleware) {
            _this.queue.push(middleware);
        };
        this.exec = function () {
            var current = -1;
            return dispatch(0);
            function dispatch(index) {
                if (index <= current)
                    return Promise.reject(new Error("next() called multiple times"));
                if (index === _this.queue.length) {
                    return Promise.resolve();
                }
                current = index;
                var task = _this.queue[index];
                try {
                    return Promise.resolve(task(_this.ctx, function next() {
                        return dispatch(index + 1);
                    }));
                } catch (err) {
                    return Promise.reject(err);
                }
            };
        };
        this.ctx = ctx;
        this.queue = [];
    }
    return Middlewares;
}());
var middlewares = new Middlewares({ token: 0 });
var one = function (ctx, next) {
    if (ctx.token === undefined || ctx.token === null) {
        throw new Error(401);
    }
    console.log(1);
    return next();
};
var two = function (ctx, next) {
    if (ctx.token !== 0) {
        throw new Error(403);
    }
    console.log(2);
    return next();
};
var three = function (ctx, next) {
    console.log(3, ctx);
    return next();
};

middlewares.use(one);
middlewares.use(two);
middlewares.use(three);

middlewares.exec().catch(err => {
    if (err.message === "401") {
        console.log(401);
    }
    if (err.message === "403") {
        console.log(403);
    }
});

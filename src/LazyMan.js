class Node {
  constructor(func = null) {
    this.func = func;
    this.next = null;
  }

  async exec() {
    if (this.func) {
      await this.func();
    }
    if (this.next && this.next.func) {
      this.next.exec();
    }
  }
}

function delayFunc(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`等待了${delay}秒...`);
      resolve();
    }, delay * 1000);
  });
}

class Lazy {
  constructor(name) {
    this.name = name;
    this.head = new Node();
    this.current = this.head;
    Promise.resolve().then(() => this.head.exec());
  }

  eat(sth) {
    const log = () => {
      console.log("I am eating " + sth);
    };
    this.current.next = new Node(log);
    this.current = this.current.next;
    return this;
  }

  sleep(delay) {
    this.current.next = new Node(() => delayFunc(delay));
    this.current = this.current.next;
    return this;
  }

  sleepFirst(delay) {
    let head = new Node(() => delayFunc(delay));
    if (!this.head.func) {
      head.next = this.head.next;
    } else {
      head.next = this.head;
    }
    this.head = head;
    return this;
  }
}

function LazyMan(name) {
  console.log("I am " + name);
  return new Lazy(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');

function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function () {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// Child.prototype = new Parent();
// inherit(Child, Parent);
// Child.prototype = Object.create(Parent.prototype);
Child.prototype = Object.assign({}, Parent.prototype);


function inherit(subType, superType) {
  function F() { };
  F.prototype = superType.prototype;
  subType.prototype = new F();
  subType.constructor = superType;
}

Child.prototype.sayAge = function () {
  console.log(this.age)
}

Child.prototype.sayName = function () {
  console.log(`child-${this.name}`);
}

let child = new Child('hello', 11);
child.sayAge();
child.sayName();

let parent = new Parent('111');
parent.sayName();
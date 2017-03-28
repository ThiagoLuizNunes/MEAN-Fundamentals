console.log(global === this);
console.log(module === this);
console.log(module.exports === this);

module.exports.sayHi = () => {
  console.log('Hi!');
}
this.sayHi = function () {
  console.log('Hi!');
}

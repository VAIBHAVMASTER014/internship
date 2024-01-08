var a = "hello";
console.log(typeof(a));
 a = 1;
console.log(typeof(a));
 a = {};
console.log(typeof a);
 a = [];
console.log(Object.prototype.toString.call(a));
 a = null
console.log(typeof(a));
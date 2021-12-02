let a = new Set(["a", "b", "c"])
let b = new Set(["d", "e", "f"])

console.log(a);
console.log(b);
let union = new Set([a, b]);
console.log(union);

let dif = new Set( [...a].filter(x => !b.has(x)));
console.log(dif);


Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

var arr = [3, 5, 7];
arr.foo = "hello";

for (var i in arr) {
    console.log(i); 
}
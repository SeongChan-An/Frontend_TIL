const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

let array = [1, 2, 3, 4]
let result = []
function 제곱(x) {
    return x ** 2
}

console.log(array.forEach(x => result.push(x**2)));
// undefined

// console


// ex) call by value
// call by value는 메모리의 주소를 가져오는 것이 아니라 메모리 주소에 위치한 값을 가져온다. 따라서 원래 값은 변하지 않는다.
// call by reference는 메모리의 주소를 가져온다. 따라서 원래 값을 변형 시킨다.

// js에서는 call by value 밖에 없지만
// 예외로 array나 object는 index로 메모리 주소를 따라가 값을 처리하기 때문에 call by reference 처럼 동작한다 맞나요?
let x = [10, 20, 30];
let x2 = 10;

function test(a) {
    a[0] = 10000;
}

function test2(a) {
    a = 10000;
}
test(x)
console.log(x);

test(x2)
console.log(x2);

let x3 = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9];
console.log("5를 초과하는")
console.log(x3.filter(v => v > 5));

// https://perfectacle.github.io/2017/10/30/js-014-call-by-value-vs-call-by-reference/


// // ++
// ### call by value, reference, sharing

// - javascript는 call by value만 존재한다. 참조타입을 넘기면 주소가 넘어가는 것이 아니라 주소값을 복사한 복사본이 넘어간다.

// - call by reference인 것 처럼 보이지만 js에서는 call by value (주소가 넘어가는 것이 아니라 주소가 복사가 되어 넘어감)
// - 다른 언어에서는 call by reference
// - 해당되는 자료형 : Object, Array, function

// - 원래 call by value, js에서도 call by value
// - 재할당 되는 순간에는 다른 값을 가리킴
// - 해당되는 자료형 : Number, String, boolean, null, undefined


let v = 100;

function test(a) {
    a = 1000;
}

console.log(test(v));

// - 아래와 같은 특징 때문에 js에서는 call by sharing이라 얘기합니다.
var a = {};
function test2(b) {
    b = 1000;
}

console.log(test2(a));

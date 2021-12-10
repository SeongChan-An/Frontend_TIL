// !!"seongchan"
// true
// !!1
// true
// !!0
// false
// !!undefined
// false
// !!NaN
// false
// '0' == 0
// true
// 0 == ''
// true
// 0 == '0'
// true
// false == 'false'
// false
// false == '0'
// true
// false == null
// false
// false == undefined
// false
// false == NaN
// false
// !!null
// false
// !!undefined
// false
// !!NaN
// false

// 타입 (https://ko.javascript.info/types 참고)

document.write(`typeof(5) : ${typeof(5)} <br>`);
document.write(`typeof(5.5) : ${typeof(5.5)} <br>`);
document.write(`typeof('5') : ${typeof('5')} <br>`);
document.write(`typeof('leehojun') : ${typeof('leehojun')} <br>`);
document.write(`typeof(x) : ${typeof(x)} <br>`);
document.write(`typeof(undefined) : ${typeof(undefined)} <br>`);
document.write(`typeof([1, 2, 3, 4]) : ${typeof([1, 2, 3, 4])} <br>`);
document.write(`typeof({'one':'하나', 'two':'둘'}) : ${typeof({'one':'하나', 'two':'둘'})} <br>`);

function js(){
}
document.write(`typeof(js) : ${typeof(js)} <br>`);
document.write(`typeof(js / 2) : ${typeof(js / 2)} <br>`);
document.write(js / 2, '<br>');

document.write(`typeof('1'+1) : ${typeof('1' + 1)} <br>`);
document.write('1' + 1, '<br>');
document.write(`typeof('leehojun' / 3) : ${typeof('leehojun' / 3)} <br>`);
document.write('leehojun' / 3, '<br>');
document.write(`typeof(true) : ${typeof(true)} <br>`);

let test = null;
document.write(typeof(test), '<br>');

// 타입의 형 변환 (https://ko.javascript.info/type-conversions 참고)

let one = 1;
document.write(`<p> one + one : ${one + one} </p>`);
document.write(`<p> String(one) + String(one) : ${String(one) + String(one)} </p>`);

let two = '2';
document.write(`<p> two + two : ${two + two} </p>`);
document.write(`<p> Number(two) + Number(two) : ${Number(two) + Number(two)} </p>`);

let three = two + two;
document.write(`<p> typeof(three) : ${typeof(three)} </p>`);

document.write(`<p> Boolean(-1) : ${Boolean(-1)} </p>`);
document.write(`<p> Boolean(0) : ${Boolean(0)} </p>`);
document.write(`<p> Boolean(' ') : ${Boolean(' ')} </p>`);
document.write(`<p> Boolean('') : ${Boolean('')} </p>`);
document.write(`<p> Boolean([]) : ${Boolean([])} </p>`);
document.write(`<p> Boolean([0]) : ${Boolean([0])} </p>`);
document.write(`<p> Boolean('0') : ${Boolean('0')} </p>`);
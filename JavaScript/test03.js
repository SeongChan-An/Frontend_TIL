// http://www.lingoes.net/en/translator/langcode.htm

let today = new Date('2021/12/5/12:00')

console.log(today.toISOString());

let year = today.slice(0,4);
let mon = today.slice(5, 7);
let day = today.slice(8, 10);

today.toISOString().split("-");

//모던자바스크립트 예제
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current);

console.log(result)

// https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d


// https://google.github.io/styleguide/jsguide.html
// https://github.com/airbnb/javascript
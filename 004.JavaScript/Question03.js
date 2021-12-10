// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

// document.writeln(comma);
console.log(comma);

// 콤마 찍기 2
// navigator.language
const n2 = 12345.6789;
n2.toLocaleString('ko-KR');

// 콤마 찍기 3
let n3 = 12345678;
n3 += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n3.length; i++) {
  reverse = n3[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);
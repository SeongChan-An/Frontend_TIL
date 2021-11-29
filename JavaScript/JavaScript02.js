//문자열 (string)

let txt = 'ABCDEFGHIJKABC';
let txt_two = 'mom said \'hello world\'';

document.write(`txt : ${txt} <br>`);
document.write(`txt.length : ${txt.length} <br>`);
document.write(`txt[1] : ${txt[1]} <br>`);
document.write(`txt_two : ${txt_two} <br>`);

document.write(`txt.indexOf : ${txt.indexOf("F")} <br>`);
document.write(`txt.search : ${txt.search("FGH")} <br>`);
document.write(`txt.lastIndexOf : ${txt.lastIndexOf("Z")} <br>`);
document.write(`txt.slice(0, 3) : ${txt.slice(0, 3)} <br>`);
document.write(`txt.substring(0, 3) : ${txt.substring(0, 3)} <br>`);
document.write(`txt.substr(2, 5) : ${txt.substr(2, 5)} <br>`);

//정규표현식에서 한 번 더 다뤄드립니다.
document.write(`txt.replace('ABC', 'hojun') : ${txt.replace(/ABC/g, 'hojun')} <br>`);

document.write(`txt.toUpperCase() : ${txt.toUpperCase()} <br>`);
document.write(`txt.toLowerCase() : ${txt.toLowerCase()} <br>`);



// 문자열의 내장 함수
let txt = 'ABCDEFGHIJKABC';

document.write(txt.includes('ABC'), '<br>');
document.write(txt.startsWith('BCD'), '<br>');
document.write(txt.endsWith('AB'), '<br>');

document.write(txt.indexOf('AB', 3), '<br>');

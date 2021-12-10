//배열 내장함수

let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
let 과일선물 = ['체리', '멜론'];

document.write(`과일 : ${과일} <br>`);
let 꺼낸과일 = 과일.pop()
document.write(`과일.pop() : ${꺼낸과일} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.push() : ${과일.push(꺼낸과일)} <br>`);
document.write(`과일 : ${과일} <br>`);

document.write(`------------------ <br>`);

let 문자열 = 과일.toString()
document.write(`과일.toString()[1] : ${문자열[1]} <br>`);
document.write(`과일.join('!!*') : ${과일.join('!!*')} <br>`);
document.write(`과일.shift() : ${과일.shift()} <br>`);
document.write(`과일.unshift() : ${과일.unshift('호준')} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.splice(1, 0, '한라봉') : ${과일.splice(1, 0, '한라봉')} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.slice(1, 3) : ${과일.slice(1, 3)} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.concat(과일선물) : ${과일.concat(과일선물)} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.sort() : ${과일.sort()} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.reverse() : ${과일.reverse()} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`['1', '11', '2', '22'].sort() : ${['1', '11', '2', '22'].sort()} <br>`);
document.write(`['1', '11', '2', '22'].length : ${['1', '11', '2', '22'].length} <br>`);

// 다차원 배열

let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, {name:'leehojun', age:10}],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
  ];

// document.write(전교점수[0][1][4]['age']);

// matrix
let m = [[1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]]

document.write(m + m);
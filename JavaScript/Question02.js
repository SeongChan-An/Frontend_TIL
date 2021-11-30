let strQ1 = [10, 20, 30, 10, 20, 30, 40, 10];
let sum = strQ1.reduce(function sum(sum, currValue) {
    return sum + currValue;
})

let average = sum/strQ1.length;

console.log("평균은 ?");
console.log(average);
console.log("분산은 ?");
// 분산 
let devTotal = 0;   /* 편차값의 합계 구하기 */
for (let i=0; i < strQ1.length; i++){
    let dev = strQ1[i] - average;
    devTotal += dev * dev;
}
let variance = devTotal/strQ1.length;   /* 모분산값 구하기 */
let sVariance = devTotal/(strQ1.length-1);   /* 표본분산값 구하기 */
let stdDev = Math.sqrt(devTotal/strQ1.length);   /* 모표준편차값 구하기 */
let sStdDev = Math.sqrt(devTotal/(strQ1.length-1));   /* 표본표준편차값 구하기 */
console.log(variance);


let str = "5, 4, 10, 2, 5";
let answer = str.split(",").map((item) => +item).reduce(function sum(sum, currValue) {
    return sum + currValue;
}, 0);

console.log(Math.floor(answer/5));

// 연습
const str2 = [11, 22, 33, 111, 2];
let temp = str2.map(el => el + "")
console.log(temp);
console.log(temp[0].split(""));

let tempArr = [];

for (let i = 0; i < str2.length; i++) {
    tempArr.push(temp[i].split("").map((el) => +el).reduce(function add(add, currValue) {
        return add + currValue;
    }, 0));
}

console.log(tempArr);




// for (let i = 0; i <str.length; i++) {
//     tempArr2[i] = str[i].split("").map((e) => e+=e);
// }
// console.log(tempArr2);

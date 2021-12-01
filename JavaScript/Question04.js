// import data from "./sample_json";
// console.log(data);

let score = [
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
]

console.log(score[0][1][4]);

let sum = 0;
let avg = 0;

console.log(score[0].length)
console.log(score[0][1].length)

for (let i = 0; i<score[0].length; i++) {
    for (let j = 0; j<score[0][1].length; j++) {
        sum += score[0][i][j]
    }
}

avg = sum/10
console.log(avg);

let person = {
    //key: value
    name: '이호준',
    age: 10,
    height : 30,
    weight : 40,
    이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'}
  }


// 
let resulttemp = 0;
for (let idx = 0; idx < 101; idx ++) {
    if(idx % 3 == 0 || idx % 5 == 0){
        resulttemp += idx;
    }
}
console.log(resulttemp)

// 1. false || true
// 2. true && false
// 3. !true
// 4. !((true && false) || (true && false))
// 5. let x = 10
//    !((x % 5 == 0 && x % 2 == 0) || (x / 2 == 5 && false))
// 6. let y = 10
//    (false && y % 2 == 0) && (y / 2 == 5 && false)
// 7. let z = 3
//    (true && z % 3 == 0) || (z / 2 !=!= 5 && false) // !==는 잘못된 문법입니다.ㅎㅎ
// ---
// // 드모르간 법칙
// !(x || y) === (!x && !y)
// !(x && y) === (!x || !y)
// ---
// // 3항연산자 대체 용법
// true && '완료' || '미완료';

function countEight (number) {
    let array = Array.from(new Array(number), (x,i) => i + 1)
    return array.join("").split("8").length-1;
  }  
Array.apply( null, Array( 10000 ) ).map( ( v, i ) => { return i } ).join( "" ).match( /8/g ).length

let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0];
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i];
        result = i;
    }
}

console.log(value[result], value[result+1]);
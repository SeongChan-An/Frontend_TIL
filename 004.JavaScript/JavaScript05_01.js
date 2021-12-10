//객체 (object)

// 함수는 후에 자세히 다룹니다.
function sum(x, y){
  return x + y;
}

let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
  이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'},
  기능 : sum
}
person.소속 = '바울랩';

document.write(`제 이름은 ${person.name} 입니다. <br>`);
document.write(`제 나이는 ${person.age} 입니다. <br>`);
document.write(`제 키는 ${person.height} 입니다. <br>`);

document.write(`제 이름은 ${person['name']} 입니다. <br>`);
document.write(`제 나이는 ${person['age']} 입니다. <br>`);
document.write(`제 키는 ${person['height']} 입니다. <br>`);

document.write(`제 소속는 ${person['소속']} 입니다. <br>`);
document.write(`제 이력은 ${person['이력']['첫번째직장']} 입니다. <br>`);
document.write(`제 기능은 ${person['기능'](10, 20)} 입니다. <br>`);

//메모리 주소 확인 불가, python은 가능
a = 100000000
//100000000
b = 100000000
//100000000
Object.is(a, b)
//true
//ECMA Script2015 추가
//https://stackoverflow.com/questions/50530936/is-there-any-method-to-check-memory-address-of-javascript-variable
Object.is(0, -0)
//false
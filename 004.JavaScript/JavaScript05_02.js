let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
  이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'},
  //기능 : sum
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// value: '이호준',
// writable: true, // 변경 가능 여부, 기본값 false
// enumerable: true, // 열거(for) 가능 여부, 기본값 false
// configurable: true // 재정의 가능 여부, 기본값 false
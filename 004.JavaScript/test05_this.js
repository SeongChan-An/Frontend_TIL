// 자바스크립트에서 This는 몇가지로 추론 될수 있는가, 아는대로 말해달라
// 일반함수의 this와 화살표 함수의 this는 어떻게 다른가?

// 자바스크립트의 내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든지 this는 전역객체를 가르킴
// 일반함수의 this는 window(전역)을 가르키며, 화살표 함수의 this는 언제나 상위스코프의 this를 가르킴

// Call, Apply, Bind 함수에 대해 설명해달라

// 3가지 방법은 this를 바인딩하기 위한 방법이다.
// Call은 this를 바인딩하면서 함수를 호출하는 것, 두번째 인자를 apply와 다르게 하나씩 넘기는 것
// Apply는 this를 바인딩하면서 함수를 호출하는 것, 두번째인자가 배열
// Bind는 함수를 호출하는 것이 아닌 this가 바인딩 된 새로운 함수를 리턴함.
// use strict모드에서의 this?

// 일반함수에서의 this는 undefined가 바인딩 됨.

// https://paperblock.tistory.com/44


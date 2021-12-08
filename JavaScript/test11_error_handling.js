// try {

//     alert('try 블록 시작');  // (1) <--
  
//     lalala; // 에러, 변수가 정의되지 않음!
  
//     alert('try 블록 끝(절대 도달하지 않음)');  // (2)
  
//   } catch(err) {
  
//     alert(`에러가 발생했습니다!`); // (3) <--
  
//   }

// try {
//     ... 코드를 실행 ...
//  } catch(e) {
//     ... 에러 핸들링 ...
//  } finally {
//     ... 항상 실행 ...
//  }

let json = '{ "age": 30 }'; // 불완전한 데이터

try {

  let user = JSON.parse(json); // <-- 에러 없음

  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: 불완전한 데이터: 이름 없음
}


// 이해해보기
try {
    alert( 'try 블록 시작' );
    if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
  } catch (e) {
    alert( 'catch' );
  } finally {
    alert( 'finally' );
  }

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  // 사용법
  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new ValidationError("No field: age");
    }
    if (!user.name) {
      throw new ValidationError("No field: name");
    }
  
    return user;
  }
  
  // try..catch와 readUser를 함께 사용한 예시
  
  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // (*)
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // 알려지지 않은 에러는 재던지기 합니다. (**)
    }
  }


  // 참고 글
  // https://olsh1108o.tistory.com/entry/JS-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
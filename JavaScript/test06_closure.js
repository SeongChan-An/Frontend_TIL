function 제곱(x) {
    function 승수(y) {
        // debugger;
        return y ** x
    }
return 승수
}

var 제곱2 = 제곱(2);
var 제곱3 = 제곱(3);

제곱2(10)
제곱3(10)


const x = 100;

function a() {
  const x = 1;
  b();
}

function b() {
  console.log(x);
}

a(); // 100
b(); // 100
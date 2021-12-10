function reverse(text) {
    text += ''
    if(text.length <= 1) {
        return text
    }
    return reverse(text.slice(1)) + text[0]
}

// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'

// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = []
function fibo(n){
  if (n in fibo_cache) {
    return fibo_cache[n]
  }
  fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
  return fibo_cache[n]
}

// 1, 1, 2, 3, 5, 8, 13, 21
// fibo_cache = [0, 1, 1, 2, fibo(2) + fibo(3)]
// fibo(4) == fibo_cache[4] == fibo(2) + fibo(3)
// fibo(2) == fibo_cache[2] == fibo(0) + fibo(1)
// fibo(0) == fibo_cache[0] == 0
// fibo(1) == fibo_cache[1] == 1
// fibo(3) == fibo_cache[3] == fibo(1) + fibo(2)
// fibo(1) == 1
// fibo(2) == 1

function fib(n){
    if(n <= 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

// 왼쪽 function만 따라갔으니
// fib(4) == fib(3) + fib(2)
// fib(3) == fib(2) + fib(1) == 3
// fib(2) == 2
// fib(1) == 1

// 오른쪽 값인 fib(2)를 다시 해야하는 상황!!
// fib(2) == 2


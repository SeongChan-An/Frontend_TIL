// 모던 자바스크립트 예제 (살짝 수정)
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 3000)
    });
  
    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
  
    alert(result); // "완료!"
      return 100
  }
  
  f().then(function(result) { // (**)
  
    alert(result); // 1
    return result * 2;
  
  }).then(function(result) { // (***)
  
    alert(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
  });

/*
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

*/
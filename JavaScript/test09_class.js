class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name}가 멈췄습니다.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name}가 숨었습니다!`);
    }
  
    stop() {
      super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
      this.hide(); // 숨습니다.
    }
  }
  
  let rabbit = new Rabbit("흰 토끼");
  
  rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
  rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!


  class CoffeeMachine {
    #waterLimit = 200;
  
    #checkWater(value) {
      if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
      if (value > this.#waterLimit) throw new Error("물이 용량을 초과합니다.");
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // 클래스 외부에서 private에 접근할 수 없음
  coffeeMachine.#checkWater(); // Error
  coffeeMachine.#waterLimit = 1000; // Error
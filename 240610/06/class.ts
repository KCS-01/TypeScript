class Car {
  //   color: string; /* ts에서는 멤버변수를 미리 선언 */

  //   constructor(color: string) {
  //     this.color = color;
  //   }
  //   constructor(public color: string) {
  constructor(readonly color: string) {
    this.color = color;
  }

  start() {
    console.log("start");
  }
}

const bmw = new Car("red");

/* 접근 제한자(Access modifier) - public, private, protected */
/* public은 어디서든 접근할 수 있다 */
/* protected은 자식 클래스에서만 접근할 수 있다*/
/* private은 해당 클래스에서만 사용 === #변수 */
/* readonly의 경우 수정 불가 */

/* static으로 멤버변수를 선언했을 경우 */

class Car_01 {
  static wheels = 4;
  constructor() {}
}

console.log(Car_01.wheels);

/* 추상 클래스 */
/* new를 사용하여 인스턴스 생성 불가  */
/* 상속받은 쪽에서 구체적인 구현을 해야함 */
abstract class Car_02 {
  static wheels = 4;
  constructor() {}

  abstract doSomethin(): void;
}

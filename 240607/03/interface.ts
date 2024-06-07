/** let user: object;

user = {
  name: "char1ey",
  age: 30,
};

// 추론이 불가능하여 에러 발생
console.log(user.name);

*/

interface User_01 {
  name: string;
  age: number;
}

let user_01: User_01 = {
  name: "char1ey",
  age: 30,
};

user_01.age = 10;

// User 인터페이스에 gender가 없기 때문에 에러를 발생 시킴
user_01.gender = "male";

interface User_02 {
  name: string;
  age: number;
  gender?: string; // 입력을 해도되고 안해도 되는 경우 옵셔널하게 처리
}

let user_02: User_02 = {
  name: "char1ey",
  age: 30,
};

user_02.gender = "male";

interface User_03 {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number; // 읽기 전용 속성으로 최초에 생성시에만 할당 후 수정 불가
}

let user_03: User_03 = {
  name: "char1ey",
  age: 30,
  birthYear: 1995,
};

user_03.birthYear = 1996; // 읽기 전용이기 때문에 setter가 실행되지 않음

interface User_04 {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  //   1?: string;
  //   2?: string;
  //   3?: string;
  //   4?: string;
  /* 문자열 인덱스 서명 */
  [grade: number]: string; // number를 키로 하고 string을 값으로 받을 수 있다.
}

let user: User_04 = {
  name: "char1ey",
  age: 30,
  birthYear: 1995,
  1: "A",
  2: "B",
};

type Score = "A" | "B" | "C" | "F";

interface User_05 {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  //   1?: string;
  //   2?: string;
  //   3?: string;
  //   4?: string;
  /* 문자열 인덱스 서명 */
  [grade: number]: Score;
}

/* interface로 함수 정의_01 */
interface Add {
  // 매개변수와 반환값
  //   (num1: number, num2: number): void;
  (num1: number, num2: number): number;
}

// const add: Add = function () {};

// x, y의 타입은 number 타입이 된다.
const add: Add = function (x, y) {
  return x + y;
};

/* interface로 함수 정의_02 */
interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
};

/* implements */

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color: string;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go");
  }
}

/* extends */

interface Benz extends Car {
  door: number;
  stop(): void;
}

/* 다중 상속 */

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}

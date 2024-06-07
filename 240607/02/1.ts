// 타입추론 자동으로 타입을 추측
let car = "bmw";

let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week_01: string[] = ["mon", "tue", "wed"];
let week_02: Array<string> = ["mon", "tue", "wed"];

// 정해진 타입 외의 것을 실행할 경우 에러 발생
week_01.push(3);

/* 튜플(Tuple) */

let b: [string, number];

b = ["z", 1];

/* void, never */

function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something
  }
}

/* enum */

enum Os {
  Window,
  Ios,
  Android,
}

console.log(Os[0]);

let myOs: Os; // myOs에는 정해진 값만 넣을 수 있다

// 특정값만 입력하도록 해야하거나 강제해야할 경우 사용
// 값들이 공통점을 가지고 있을 때
myOs = Os.Window;

// 수동으로 값을 주지않으면 0부터 자동으로 할당

// enum Os {
//     Window = 3,
//     Ios = 10,
//     Android = 20,
//   }

/* null, undefined */

let c: null = null;
let d: undefined = undefined;

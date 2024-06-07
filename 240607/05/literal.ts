// 리터럴 타입

// 상수와 변수
const userName_01 = "Bob";
// let userName_02 = "Tom";
let userName_02: string | number = "Tom";

// 최초 할당된 값이 string이기 때문에 Error 발생
userName_02 = 3;

type Job = "police" | "developer" | "teacher";
interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "Bob",
  //   job: "student",
  job: "developer",
};

// 유니언 타입 |

interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  //   gift.start(); // 에러발생, Car에만 start가 있기 때문에 Car인지 확인이 필요
  if (gift.name === "car") {
    // "식별가능한 유니언" 타입
    gift.start();
  } else {
    gift.call();
  }
}

// 교차 타입(And)

interface Car_01 {
  name: string;
  start(): void;
}

interface Toy_01 {
  name: string;
  color: string;
  price: number;
}

// 교차 타입은 필요한 모든 타입을 가질 수 있다
const toyCar: Toy_01 & Car_01 = {
  name: "BMW",
  color: "RED",
  price: 8080,
  start() {
    console.log("go");
  },
};

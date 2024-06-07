// 함수

function add(num1: number, num2: number): void {
  console.log(num1, num2);
}

// function hello(name: string) {
//   return `Hello, ${name || "world"}`;
// }

// const result = hello();

// 옵셔널
function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}

const result = hello();

// 매개변수 default 값
function hello_01(name = "world") {
  return `Hello, ${name}`;
}

const result_01 = hello();

// 선택적 매개변수와 필수 매개변수의 순서 정의

function hello_02(age?: number, name: string): string {
  if (age !== undefined) {
    return `Hello, ${name}, You are ${age}`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(hello(30, "Sam"));
console.log(hello(undefined, "Sam"));

// 나머지 매개변수 타입정리
// 갯수가 매번 바뀔 수 있는 경우
function add_01(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add_01(1, 2, 3); // 6
add_01(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// this
interface User {
  name: string;
}

const Sam: User = {
  name: "Sam",
};

// this가 가장 앞의 매개변수로 들어온다.
// 사용시에는 this를 제외하고 순서대로 넣어주면 된다.
function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name);
}

const a = showName.bind(Sam);
a(30, "m");

// 함수 오버로딩

interface User_01 {
  name: string;
  age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User_01;
function join(name: string, age: number | string): User_01 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요";
  }
}

const sam: User_01 = join("Sam", 30);
const jane: string = join("Jane", 30);

// 제네릭 == 타입파라미터
/* 사용하는 쪽에서 타입을 입력해 줄 수 있다 */
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr_01 = [1, 2, 3];
getSize<number>(arr_01); // 3

const arr_02 = ["a", "b", "c"];
getSize<string>(arr_02); // 3

const arr_03 = [false, true, true];
getSize<boolean>(arr_03); // 3

const arr_04 = [{}, {}, {}];
getSize<object>(arr_04); // 3

/* 인터페이스 예제 */
interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m_01: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m_02: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};

/* 인터페이스 예제 2 */

interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: "a", age: 10 };
const car: Car = { name: "bmw", color: "red" };
const book: Book = { price: 3000 };

// name이 string인 객체를 상속한 T
function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user);
showName(car);
showName(book);

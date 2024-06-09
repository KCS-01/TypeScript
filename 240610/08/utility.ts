/* keyof - 인터페이스를 나열하여 받을 수 있음 */

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User; // id, name, age, gender

const uk: UserKey = "age";

/* Partial<T> - 속성을 모두 optional로 변경하여 일부만 사용할 수 있다 */

let admin: Partial<User> = {
  id: 1,
  name: "Bob",
};

/* Required<T> - 속성을 모두 필수 속성으로 변경 */
/* Readonly<T> - 모든 속성을 읽기전용으로 변경, 최초에 할당만 가능 */

/* Record<K, T> - 키값, 타입 */
// interface Score {
//   "1": "A" | "B" | "C" | "D";
//   "2": "A" | "B" | "C" | "D";
//   "3": "A" | "B" | "C" | "D";
//   "4": "A" | "B" | "C" | "D";
// }

// const score: Score = {
//   1: "A",
//   2: "C",
//   3: "B",
//   4: "D",
// };

const score: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
};

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";

const score_01: Record<Grade, Score> = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
};

/* Pick<T, K> - T 타입에서 K 속성만 골라서 사용 */
interface User_Pick {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin_pick: Pick<User_Pick, "id" | "name"> = {
  id: 0,
  name: "Bob",
};

/* Omit<T, K> - 특정 속성을 생략하고 사용 */
interface User_Omit {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin_omit: Omit<User_Omit, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};

/* Exclude<T1, T2>  T1 타입중 T2 타입과 겹치는 부분을 제거 */
type T1 = string | number;
type T2 = Exclude<T1, number>; // --> string만 남음

/* NonNullable<Type> - null, undefined을 제외한 타입을 생성 */

type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;

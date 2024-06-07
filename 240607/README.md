# TypeScript

## 타입스크립트를 사용하는 이유

다음의 코드를 실행했을 경우, 런타임시 에러를 확인하게 된다.

```js
function add(num1, num2) {
  console.log(num1, num2);
}

add();
add(1);
add(1, 2);
add(3, 4, 5);
add("hello", "world");
```

아래의 경우 사용자가 의도한 경우 외에는 컴파일시 에러를 발생시키게 된다.

```ts
function add(num1: number, num2: number): undefined {
  console.log(num1, num2);
}

// add();
// add(1);
add(1, 2);
// add(3, 4, 5);
// add("hello", "world");
```

```ts
function showItems(arr: number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3]);
// showItems(1, 2, 3);
```

## 기본 타입

```

```

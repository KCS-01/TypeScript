// 1
function add(num1: number, num2: number): undefined {
  console.log(num1, num2);
}

add(1);
add(1, 2);
add(3, 4, 5);
add("hello", "world");

// 2
function showItems(arr: number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3]);
showItems(1, 2, 3);

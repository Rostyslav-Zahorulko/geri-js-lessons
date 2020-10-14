// ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ CALLBACK ФУНКЦИЙ

// ______________________________________________________________________________________________________________

// 1. Фильтрация массива (filter)

// https://youtu.be/lf5ziJX_FAQ?t=462

// const arr = [1, 2, 3, 4, 5, 6];

// const filter = function (numbers, callback) {
//   const newArr = [];

//   for (const number of numbers) {
//     if (callback(number)) {
//       newArr.push(number);
//     }
//   }

//   return newArr;
// };

// console.log(filter(arr, x => x > 3)); // [4, 5, 6]

// console.log(filter(arr, x => x < 3)); // [1, 2]

// console.log(filter(arr, x => x <= 2 || x > 4)); // [1, 2, 5, 6]

// console.log(filter(arr, x => x > 6)); // []

// ______________________________________________________________________________________________________________

// 2. Поиск элемента в массиве (find)

// https://youtu.be/lf5ziJX_FAQ?t=987

// const arr = [1, 2, 3, 4, 5, 6];

// const find = function (numbers, callback) {
//   for (const number of numbers) {
//     if (callback(number)) {
//       return number;
//     }
//   }
// };

// console.log(find(arr, x => x === 3)); // 3
// console.log(find(arr, x => x === 6)); // 6
// console.log(find(arr, x => x === 9)); // undefined

// ______________________________________________________________________________________________________________

// 3. Поиск индекса элемента в массиве (indexOf)

// https://youtu.be/lf5ziJX_FAQ?t=1146

// const fruits = ['apple', 'orange', 'strawberry'];

// const indexOf = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i])) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(indexOf(fruits, fruit => fruit === 'apple')); // 0
// console.log(indexOf(fruits, fruit => fruit === 'orange')); // 1
// console.log(indexOf(fruits, fruit => fruit === 'banana')); // -1
// console.log(indexOf(fruits, fruit => fruit === 'cherry')); // -1

// ______________________________________________________________________________________________________________

// 4. Трансформация массива (map)

// https://youtu.be/lf5ziJX_FAQ?t=1404

const fruits = ['apple', 'orange', 'strawberry'];

function transform(x) {
  return `<li>${x}</li>`;
}

function map(arr, callback) {
  const result = [];

  for (const item of arr) {
    result.push(callback(item));
  }

  return result;
}

console.log(map(fruits, transform));
// ["<li>apple</li>", "<li>orange</li>", "<li>strawberry</li>"]

console.log(map(fruits, x => `<li class="list-item">${x}</li>`));
// ["<li class="list-item">apple</li>", "<li class="list-item">orange</li>", "<li class="list-item">strawberry</li>"]

// ______________________________________________________________________________________________________________

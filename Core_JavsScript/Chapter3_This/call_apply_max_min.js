// var numbers = [10, 20, 3, 16, 45];

// 1. apply 사용 안함
// var max = min = numbers[0];
// numbers.forEach(function(number) {
//     if (number > max) {
//         max = number;
//     }
//     if(number < min) {
//         min = number;
//     }
// });
// console.log(max, min);

// 2. Math.max / Math.min에 apply 적용
// var max = Math.max.apply(null, numbers);
// var min = Math.min.apply(null, numbers);
// console.log(max, min);

// 3. [ES6] 펼치기 연산자 (spread operator)
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min)
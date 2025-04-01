// 2. 호이스팅을 마친 상태
// 함수 선언문은 전체를 호이스팅한다.
var sum = function sum (a, b) {
    return a + b;
};

// 변수는 선언부만 끌어올린다.
var multiply;

console.log(sum(1, 2));
console.log(multiply(3, 4));

multiply = function (a, b) {
    return a * b;
}
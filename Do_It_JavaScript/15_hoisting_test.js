function addNumber(num1, num2) {
    return num1 + num2;
}
var sum = addNumber(10, 20);    // sum 변수 선언, 함수 호출
console.log(sum);
sum = 50;                       // sum 변수 재할당
console.log(sum);  
var sum = 100;                  // sum 변수 재선언
console.log(sum);
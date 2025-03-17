// 전역 컨텍스트 -> outer -> inner 순으로 stack에 쌓이게 됨.
// 통상적으로 함수의 순서가 stack에 쌓이는 내용을 생각하면 될 거 같다.
var a = 1;
function outer() {
    function inner() {
        console.log(a); // undefined
        var a = 3;
    }
    inner();
    console.log(a); // 1
}

outer();
console.log(a); // 1
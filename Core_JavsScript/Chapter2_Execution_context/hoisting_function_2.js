// 3. 함수 선언문을 함수 표현식으로 바군 코드
function a () {
    var b;              
    var b = function b () { };  // 이 부분이 변경되었다.

    console.log(b);     // (1)
    var b = 'bbb';     
    console.log(b);     // (2)
    console.log(b);     // (3)
}

a();
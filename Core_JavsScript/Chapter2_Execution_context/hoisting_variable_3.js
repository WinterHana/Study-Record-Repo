// 2. 호이스팅을 마친 상태
function a () {
    var x;          // 수집 대상 1의 변수 선언 부분
    var x;          // 수집 대상 2의 변수 선언 부분
    var x;          // 수집 대상 3의 변수 선언 부분

    var x = 1;      // 수집 대상 1의 할당 부분
    console.log(x); // 1
    console.log(x); // 1
    var x = 2;      // 수집 대상 3의 할당 부분
    console.log(x); // 2
}

a();
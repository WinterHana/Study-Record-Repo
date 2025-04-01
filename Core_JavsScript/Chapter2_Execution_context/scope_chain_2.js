var a = 1;
var outer = function() {
    var b = 2;
    var inner = function() {
        console.dir(inner); // 객체 속성을 콘솔에 출력
    };
    inner();
};
outer();


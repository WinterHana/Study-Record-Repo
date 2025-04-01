var a = 1;
var outer = function() {
    var inner = function() {
        console.log(a); // inner scope의 LexicalEnvironment부터 검색함 -> undefined
        var a = 3;
    };
    inner();
    console.log(a); // outer의 LexicalEnvironment부터 검색 -> 전역에서 검색 -> 1
};
outer();
console.log(a); // 전역에서 검색 -> 1


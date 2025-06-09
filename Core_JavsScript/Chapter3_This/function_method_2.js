var obj = {
    method: function (x) { console.log(this, x) }
};
// 두 가지 경우 전부 메서드로서 호출한 것이다.
obj.method(1);   // { method: f } 1
obj['method'](2);// { method: f } 2
var func = function(x) {
    console.log(this, x);
};
func(1); // Windows { ... } 1

var obj = {
    method: func
};
obj.method(2); // { method : f } 2
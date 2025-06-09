var obj1 = {
    outer: function() {
        console.log(this); // obj1
        var innerFunc = function () {
            console.log(this); // windows(전역객체)
        }
        innerFunc();

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod(); // obj2
    }
};

obj1.outer();
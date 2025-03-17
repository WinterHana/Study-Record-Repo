// 1. 원본
function a () {
    console.log(b);
    var b = 'bbb';
    console.log(b);
    function b () {
        // blank
    }
    console.log(b);
}

a();
var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("first");
        resolve(50);
    }, 3000);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('second');
        resolve(100);
    }, 5000);
});
var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('second');
        resolve(30);
    }, 1000);
});
Promise.race([p1, p2, p3]).then(function (value) {
    console.log(value);
});

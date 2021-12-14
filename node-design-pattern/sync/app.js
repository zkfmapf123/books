// namespace useSyncMethod {
//     const cache: any = {}
//     function consist(filename: string) {
//         if (cache[filename]) {
//             return cache[filename]
//         } else {
//             cache[filename] = fs.readFileSync(filename, "utf-8")
//             return cache[filename]
//         }
//     }
//     consist("123.txt")
// }
var useProcessNextTic;
(function (useProcessNextTic) {
    var cache = {
        "123": 123
    };
    useProcessNextTic.consist = function (filename, callback) {
        if (cache[filename]) {
            process.nextTick(function () { return callback(cache[filename]); });
        }
        else {
            // 비동기함수
            console.log("123");
        }
    };
})(useProcessNextTic || (useProcessNextTic = {}));
console.log("first");
new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(true);
    }, 2000);
}).then(function (value) {
    console.log(value);
});
useProcessNextTic.consist("123", function () { return setTimeout(function () {
    console.log('callback');
}, 1000); });
console.log("last");

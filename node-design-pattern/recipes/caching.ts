/**
 * 캐싱 처리
 */

// index signature
interface Obj {
  [key: string]: Function;
}
let queues: Obj = {}; // 작업 큐
const ca: Obj = {}; // 해당 작업의 cache -> 해당 부분에서 작업이 없으면 queue에 넣는다

const totalSalesBatch = (item: string, cb: Function) => {
  if (ca[item]) {
    console.log("already exists");
    return;
  }

  // [key] -> string literal만 붙기 때문에 index signature로 구성해야 한다
  if (queues[item]) {
    console.log("batch processing ...");
  } else {
    return (queues[item] = cb);
  }
};

/**
 * execute
 * TODO: Refactoring
 */
const totalSales = () => {
  for (const [key, cb] of Object.entries(ca)) {
    console.log("caching");
    ca[key] = cb;
    console.log(cb());
  }

  for (const [key, cb] of Object.entries(queues)) {
    console.log("queue");
    ca[key] = cb;
    console.log(cb());
  }

  queues = {};
};

totalSalesBatch("call my name", () => {
  console.log("leedonggyu");
});

totalSalesBatch("call your name", () => {
  console.log("yourdonggyu");
});

totalSalesBatch("call my name", () => {
  console.log("error");
});

totalSales(); // queue
setTimeout(() => {
  totalSales(); // cache
}, 2000);

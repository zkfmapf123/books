import urlExits from "url-exist";

class Matrix {
  constructor(protected readonly matrix: number[][]) {}

  getMatrix(row: number, column: number) {
    this.checkOutOfRange(row, column);
    return this.matrix[row][column];
  }

  setMatrix(row: number, column: number, value: number) {
    this.checkOutOfRange(row, column);
    this.matrix[row][column] = value;
  }

  private checkOutOfRange(row: number, column: number): never | void {
    if (row >= this.matrix.length || column >= this.matrix[row].length) {
      throw new RangeError("Out of range");
    }
  }

  // 이렇게 구현해야하는 이유가 있나?
  // 밑에 Generator로 구현
  // [Symbol.iterator]() {
  //   let nextRow = 0;
  //   let nextCol = 0;

  //   return {
  //     next: () => {
  //       if (nextRow === this.matrix.length) {
  //         return {
  //           done: true,
  //         };
  //       }

  //       const currVal = this.matrix[nextRow][nextCol];

  //       if (nextCol === this.matrix[nextRow].length - 1) {
  //         nextRow++;
  //         nextCol = 0;
  //       } else {
  //         nextCol++;
  //       }

  //       return {
  //         value: currVal,
  //       };
  //     },
  //   };
  // }
}

const m = new Matrix([
  [11, 12],
  [21, 22],
]);

// const iter = m[Symbol.iterator]();
// let iterNext = iter.next();
// while (!iterNext.done) {
//   console.log(iterNext.value);
//   iterNext = iter.next();
// }

/**
 * Generator == SemiCoroutin
 */
function* myGen() {
  yield "A";
  yield "B";
  yield "C";
}

// 1. use generator
const generator = myGen();
// console.log(generator.next()); // done: false
// console.log(generator.next()); // done: false
// console.log(generator.next()); // done: false
// console.log(generator.next()); // done: true

// 2. use for...of
for (const gen of myGen()) {
  // console.log(gen);
}

// 1.1) map -> use Symbol.iterator()
const map = new Map();
map.set(1, 20);
map.set(2, 20);
map.set(3, 20);

const iteratorMap = map[Symbol.iterator]();
// console.log(iteratorMap.next());
// console.log(iteratorMap.next());
// console.log(iteratorMap.next());

/**
 * 반복자 대신 -> 이터레이터를 사용하는 이유
 */

// 다시만들기 귀찮아서 상속으로 구현
class ExtendsMatrix extends Matrix {
  constructor(matrix: number[][]) {
    super(matrix);
  }

  *[Symbol.iterator]() {
    let nextRow = 0;
    let nextCol = 0;

    while (nextRow !== this.matrix.length) {
      yield this.matrix[nextRow][nextCol];

      if (nextCol === this.matrix[nextRow].length - 1) {
        nextRow++;
        nextCol = 0;
      } else {
        nextCol++;
      }
    }
  }
}

const mm: number[][] = [
  [1, 2, 3, 4],
  [4, 3, 2, 1],
];

const extendMatrix = new ExtendsMatrix(mm);
const iterator = extendMatrix[Symbol.iterator]();

for (const iter of iterator) {
  console.log(iter);
}

class CheckUrls {
  constructor(private readonly urls: string[]) {}

  async *[Symbol.iterator](): AsyncIterableIterator<string> {
    for (const url of this.urls) {
      try {
        const status = await urlExits(url);

        yield `${url} is up, state : ${status}`;
      } catch (e: any) {
        yield `${url} is done, err : ${e.message}`;
      }
    }
  }
}

const checkUrl = new CheckUrls([
  "https://www.naver.com",
  "https://www.google.com",
  "https://www.daum.net",
]);

for await (const check of checkUrl[Symbol.iterator]()) {
  console.log(check);
}

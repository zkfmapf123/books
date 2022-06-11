/**
 * core.implementation
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set

function observe<T extends object>(object: T, cb: ProxyHandler<T>) {
  const proxy = new Proxy(object, cb);
  return proxy;
}

/**
 * class implementataion
 */

class Calc {
  add(num: any) {
    return num + num;
  }

  min(num: any) {
    return num - num;
  }

  mul(num: any) {
    return num * num;
  }

  div(num: any) {
    return num / num;
  }
}

const newCalc = new Calc();

console.log(newCalc.add(10)); // 20
console.log(newCalc.add(Infinity)); // Infinity (x)
console.log(newCalc.add(0)); // 0 (x)

console.log("\n\n\n");

// use get
const isNotNumber = (num: any) => {
  if (num == "infinity") {
    return true;
  }

  if (num === 0) {
    return true;
  }
};

const safeNewCalc = observe<Calc>(newCalc, {
  get: (target, property: keyof Calc) => {
    // // each
    // if (property === "add") {
    //   return (value: number) => {
    //     if (isNotNumber(value)) {
    //       return `${value} is not invald`;
    //     } else {
    //       return target[property](value);
    //     }
    //   };
    // }
    // if (property === "min") {
    //   return (value: number) => {
    //     if (isNotNumber(value)) {
    //       return `${value} is not invald`;
    //     } else {
    //       return target[property](value);
    //     }
    //   };
    // }
    // if (property === "mul") {
    //   return (value: number) => {
    //     if (isNotNumber(value)) {
    //       return `${value} is not invald`;
    //     } else {
    //       return target[property](value);
    //     }
    //   };
    // }
    // if (property === "div") {
    //   return (value: number) => {
    //     if (isNotNumber(value)) {
    //       return `${value} is not invald`;
    //     } else {
    //       return target[property](value);
    //     }
    //   };
    // }

    return (value: number) => {
      if (isNotNumber(value)) {
        throw new Error(`${value} is not invalid`);
      }

      return target[property](value);
    };
  },
});

console.log(safeNewCalc.add(10));
console.log(safeNewCalc.min(0));
console.log(safeNewCalc.mul(10));
console.log(safeNewCalc.div(0));

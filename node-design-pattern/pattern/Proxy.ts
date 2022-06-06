/**
 * 다른 객체의 대한 엑세스를 제어할 수 있는 패턴
 * - 데이터 검증
 * - 보안
 * - 캐싱
 * - 느린 초기화
 * - 기록
 * - 원격 객체
 */

class StackCalc {
  private stack: number[];
  constructor() {
    this.stack = [];
  }

  putValue(value: number): void {
    this.stack.push(value);
  }

  getValue(): number | undefined {
    if (this.isEmpty()) {
      throw new Error("not exists");
    }
    return this.stack.pop();
  }

  peekValue(): number {
    if (this.isEmpty()) {
      throw new Error("not exists");
    }

    return this.stack[this.stack.length - 1];
  }

  private isEmpty(): boolean {
    if (this.stack.length === 0) {
      return true;
    }

    return false;
  }

  clear() {
    console.log("calc proxy");
    this.stack = [];
  }

  multiply(multipleValue: any) {
    if (this.isEmpty()) {
      throw new Error("not exists");
    }

    let sum = 0;
    this.stack.forEach((value) => {
      sum += value;
    });

    return sum * multipleValue;
  }
}

const calc = new StackCalc();
// calc.putValue(10);
// calc.putValue(20);
// calc.putValue(30);
// calc.putValue(40);
// calc.putValue(50);
// console.log(calc.multiply(Infinity)); // Infinity

/**
 * @solution
 * Object Composition
 */
class SafeStackCalc {
  constructor(private readonly stakCalc: StackCalc) {}

  /**
   * @delegate
   */
  putValue(value: number) {
    this.stakCalc.putValue(value);
  }

  safeMultiple(multipleValue: any): number {
    if (multipleValue == "Infinity") {
      throw new Error(`${multipleValue} is not number`);
    }

    return this.stakCalc.multiply(multipleValue);
  }
}

const safeCalc = new SafeStackCalc(new StackCalc());
// safeCalc.putValue(10);
// safeCalc.putValue(20);
// safeCalc.putValue(30);
// safeCalc.putValue(40);
// console.log(safeCalc.safeMultiple(Infinity));

/**
 * @solution
 * Use Factory Function
 */
const proxySafeCalc = (calculator: StackCalc) => {
  function putValue(value: number) {
    /**
     * ...
     */
    calculator.putValue(value);
  }

  function safeMultiply(value: any) {
    /**
     * ...
     */
    calculator.multiply(value);
  }

  return {
    putValue,
    safeMultiply,
  };
};

// const stackCalcV3 = new StackCalc();
// const proxyFunc = proxySafeCalc(stackCalcV3);
// proxyFunc.putValue(10);
// proxyFunc.safeMultiply(Infinity);

/**
 * @solution
 * Proxy Object
 * apply, get, set, has ...
 */

const safeCalcProxy = {
  get: (target: StackCalc, property: keyof StackCalc) => {
    if (property === "clear") {
      console.log("before proxy");
    }

    return target[property];
  },
};
const stackCalcV4 = new StackCalc();
const proxy = new Proxy(stackCalcV4, safeCalcProxy);

// proxy.clear();

/**
 * @solution
 * use Proxy -> observer
 */

// function observer<T extends StackCalc>(target: T, observer: any) {
//   const observe = new Proxy(target, {
//     set(obj, prop: keyof StackCalc, value) {
//       if (value !== obj[prop]) {
//         const prev = obj[prop];
//         obj[prop] = value;

//         observer({ prop, prev, curr: value });
//       }

//       return true;
//     },
//   });

//   return observe;
// }

/**
 * 모든 메서드의 대해서 observer를 어떻게 유지할까?
 */
function observer<T extends StackCalc>(target: T, cb: ProxyHandler<T>) {
  const proxy = new Proxy(target, cb);
  return proxy;
}

const calcV5 = new StackCalc();
const safeCalcV5 = observer(calcV5, {
  get(target, propKey, receive) {
    if (propKey === "putValue") {
      return (value: number) => {
        return target[propKey](value);
      };
    }
  },
});

safeCalcV5.putValue(10);
safeCalcV5.putValue(20);
safeCalcV5.putValue(30);
safeCalcV5.putValue(40);
safeCalcV5.putValue(50);

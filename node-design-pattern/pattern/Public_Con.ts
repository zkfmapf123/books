/**
 * 객체가 생성되는 순간에만 객체의 내부적인기능의 일부를 노출
 * 즉, 객체의 내부가 생성단계에서만 조작...
 *
 * ** 완벽한 캡슐화를 제공
 */

class ImmutableBuffer {
  constructor(size: number, executor: any) {
    const buffer = Buffer.alloc(size);
    const modifiers = {};

    for (const prop in buffer) {
      if (typeof buffer[prop] !== "function") {
        continue;
      }

      // ...
    }
  }
}

// example Promise

/**
 * class 내부에서만 사용
 */

@ClassDecorator
class A {
  private msg: string = "hello world";

  constructor() {
    console.log("hello world");
  }

  get c(): string {
    return this.msg;
  }
}

function ClassDecorator(consturctor: typeof A) {
  console.log("before A");
}

const a = new A();

/**
 * class decorator
 * method decorator **
 * property decorator
 */

function methodDecorator() {
  return function (target: any, property: any, descriptor: any) {
    let originalMethod = descriptor.value;

    descriptor.value = function (args: any) {
      // convert args
      originalMethod("iam not leedonggyu");
    };
  };
}

class Test {
  @methodDecorator()
  test(msg: string) {
    console.log(msg);
  }
}

const t = new Test();
t.test("leedonggyu");

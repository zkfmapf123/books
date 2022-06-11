/**
 * Template === 인터페이스, abstrct class
 *
 * abstract class vs interface
 *
 * abstract 상속
 * interface 구현
 *
 * interface는 동작을 강제한다
 * 또한 다중구현이 가능하다
 * 하지만 불필효한 기능도 implementation 되야한다
 *
 * abstract는 상속을 통해 동작을 오버라이딩 한다
 * 다중상속이 구현되지 않기때문에 한계가 존재 (exception C++)
 */

interface ITemp {
  whoAmi(): void;
  howAreYou(): void;
}

class Template implements ITemp {
  constructor() {}

  sayMyName() {
    return "leedonggyu";
  }

  howOldAreYou() {
    return 29;
  }

  whoAmi(): void {
    throw new Error("whomai must be implemetation");
  }

  howAreYou(): void {
    throw new Error("howAreYou must be implementation");
  }
}

const tt = new Template();
console.log(tt.sayMyName());
console.log(tt.howOldAreYou());
console.log(tt.whoAmi());
console.log(tt.howAreYou());

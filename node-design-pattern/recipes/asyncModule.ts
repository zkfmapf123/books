/**
 * 이미 초기화 된 큐
 */

// alreday initialize queue
class AsyncModule {
  public initialized: boolean = false;

  init(cb: Function) {
    setTimeout(() => {
      this.initialized = true;
      // 초기화 시킨 후
      cb(); // setting
    }, 2000);
    console.log("job");
  }

  tellMeSomething(cb: Function) {
    process.nextTick(() => {
      if (this.initialized) {
        new Error(`i don't have anything to say right now`);
      }
      cb();
    });
  }
}

const asyncModule = new AsyncModule();
asyncModule.init(() => {
  console.log("hello");
});

asyncModule.tellMeSomething(() => {
  console.log("tell me something");
});

/**
 * ORM (MongoDB)
 * Mongoose를 사용하면 쿼리를 보낼수 있도록 데이터베베이스 연결이 열릴때 가지 기다릴 필요가 없다
 * 각 작업을 큐에 넣은 다음 -> 데이터 베이스와 연결이 완전히 설정된 후에 나중에 실행된다
 */

/**
 * Bad Code
 */
namespace BadCode {
  const rocket = {
    sym: "rocket",
    var: "block 65",
    thrust: 7_321,
  };

  // 모든 키를 허용한다
  // 인덱스 시그니처를 사용하는 이유는 어떤 타입이 들어올지 모를때 사용한다
  type Rocket = { [property: string]: string };

  const rocket1: Rocket = {
    sym: "rocket",
  };

  const rocket2: Rocket = {
    sym: "rocket",
    sym2: "rocket2",
    sym3: 300, // 다른 타입 불가능
  };
}

/**
 * index signature
 * example
 */
namespace indexSignature {
  function parseCsv(input: string): { [columName: string]: string | number } {
    // ... logic

    return {
      a: '10',
      b: 20,
      c: 30,
    };
  }
}

/**
 * better code
 */
namespace BetterCode {
  interface Rocket {
    sym: string;
    var: string;
    thrust: number;
  }

  const ro: Rocket = {
    sym: "123",
    var: "123",
    thrust: 100,
  };
}

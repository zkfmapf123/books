{
    /**
     * interface vs type
     * 
     */
}

{
    // type 만이 할수 있는 것들
    
    // 1. 유니온 타입
    type AorB = 'A' | 'B';
    
    type A = 'A';
    type B = 'B';
    type Result = (A | B) & {name : string};

    // 2. 튜플
    type tuple = [string, number];
}

{
    // interface
    
    // 1.선언 병합
    interface IState {
        name :string;
    };

    interface IState {
        age : number;
    };

    const Person : IState = {
        name : '123',
        age : 28
    };

    /**
     * 이러한 병합부분에서 일반적인 코드에서도 지원가능하며, 언제 병합이 가능한지 알고 있어야한다.
     */
}

/**
 * 그럼 결론적으로 언제 타입을 쓸거고, 언제 인터페이스를 쓸거냐?
 * 복잡한 타입이라면 -> 타입을 써라
 * 하지만 두가지 방법으로 모두 표현할 수 있다면 고민을 해봐야한다
 *  -> 일관되게 인터페이스를 사용하고 있다면 -> 인터페이스
 *  -> 타입을 사용하고 있다면 -> 타입
 *  
 *  만약, 어떤 api의 대한 타입을 선언하게 된다면 -> 인터페이스를 사용해라..
 *  하지만 프로젝트 내부적인 타입은 -> 타입이다
 */
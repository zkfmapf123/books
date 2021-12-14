{
    // error -> 타입추론을 못함
    const loc = [10,20];
    function func1(num : [number, number]){
        // logic
    }

    func1(loc) // error
}

{
    // error -> 과함
    const loc = [10,20] as const; // 실제오류가 여기서 발생한다면, 다른곳에서 알아차리기 힘들다
    function func2(num : [number, number]){
        // logic
    }

    func2(loc) // error
}

{
    // ok -> 이렇게 해야한다.
    const loc = [10,20] as const
    function func3(num : readonly [number, number]){
        // logic
    }

    func3(loc) // error
}

/**
 * as const 
 * 는 상수로 만들기 때문에 좋은 친구이지만,
 * 잘못사용하면 상수 단언을 사용한곳이 아니라 사용한 곳에서 오류가 나면
 * 못찾는다...
 */
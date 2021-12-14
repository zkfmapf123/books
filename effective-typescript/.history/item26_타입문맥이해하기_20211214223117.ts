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
    const loc = [10,20] as const; 
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
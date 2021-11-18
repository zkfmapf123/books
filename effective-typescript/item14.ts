/**
 * 타입연산과 제네릭사용으로 반복을 줄이자 ***
 */

{
    // 중복 코드가 많다 -> 리팩토링을 한다면
    console.log('Cy 1 x 1', 'surface area : ', 6.29 * 1 * 1 + 6.28 * 1 * 1);
    console.log('Cy 1 x 2', 'surface area : ', 6.29 * 1 * 1 + 6.28 * 2 * 1);

    // 리팩토링 코드
    const surfaceArea = (r,h) => 2 * Math.PI * r * (r+h);
    const volume = (r,h) => Math.PI * r * r *h;
    for(const [r,h] of [[1,1], [1,2], [2,1]]){
        // ... logic
    };

    // 이게 바로 DRY (코드를 반복하지 마라)하게 코드를 구성한 것이다.
}

{
    interface Person {
        fName:string;
        lName:string;
    };

    interface PersonBirth{
        fName :string;
        lName :string;
        birth :Date;
    };

    // 이거는 어떻게 리팩토링 할거냐? --> 타입도 DRY하게 짜야한다.
}

{
    // 타입 리팩토링 1 -> 타입에 이름을 붙혀라

    function distance(a : {x : number, b : number}) : {x:number, b: number};

    type point = {
        x : number;
        y : number;
    };

    function distanceGoodCode(a : Point) : Point;
};

{
    // 타입 리팩토링 2 -> 함수 시그니처
    function get(url: string, opts: {}) : Promise<Response>;
    function post(url :string, opts: {}) : Promise<Response>;

    type HTTPFunction = (url : string, opts :{}) : Promise<Response>;
    const Get : HTTPFunction = (url,opts) =>{};
    const Post : HTTPFunction = (url,opts) => {};
};

{
    // 인터페이스 리팩토링 앞선 예제

    interface Person {
        fName : string;
        lName : string;
    };

    interface PersonBirth extends Person {
        birth : Date;
    };
    type TPersonBirth = Person & {birth : Date};
};

{
    // 타입의 대한 값을 리팩토링

    interface State {
        userId : string;
        pageTitle : string;
        recentFiles : string[];
        pageContents : string;
    };

    interface TopNavState {
        userId : string;
        pageTitle : string;
        recentTitle : string[];
    };

    // 1. 결국 이렇게 타입이 중복이 된다. 그래서 이부분을 좀더 효율적으로 처리한다.

    type TopNavStateGoodCode = {
        userId : State['userId'];
        pageTitle : State['pageTitle'];
        recentTitle : State['recentFiles'];
    };

    // 2. 좀더 매핑된 타입을 지정하면 좋다.
    type MappingType = {
        [K in 'userId' | 'pageTitle' | 'recentFiles'] : State[K];
    };

    // 3. 이것도 제네릭으로 바꾸면
    type MappingTypeRefactoring<T> = {
        [K in keyof T] ?: T[K];
    };

    // optional 타입 -> pick 타입
    const name : MappingTypeRefactoring<State> = {
        userId: '123',
        pageTitle : '123',
        recentFiles: ["123"]
    };
}

{
    // 값의 형태를 나타내는 위한 리팩토링

    const INIT_CR = {
        w : 600,
        h : 300,
        a : 500
    };

    // 이렇게 하지말고
    interface Options{
        w : number;
        h : number;
        a : number;
    };

    // 이렇게 짜라고
    type OptionValue = typeof INIT_CR;
}

{
    // 클래스내에서 사용하는 방법

    interface Name {
        f : string;
        l : string;
    };

    type Dance<T extends Name> = [T,T];
    const d : Dance<Name> = [
        {f : '123', l: '123'},
        {f : '123', l: '123'}
    ];
}
/**
 * 코드 생성과 타입이 관계없음을 이해하기
 */

{
    // bad code
    interface Sqaure{
        w: number;
    };

    interface Rectangle extends Sqaure{
        h : number;
    };

    type Shape = Sqaure | Rectangle;

    function calculateArea(sh : Shape){
        if(sh instanceof Rectangle){ // 값으로 사용되고 있다.
            // logic
        }else{
            // logic
        }
    };

    // ts에서는 컴파일에러가 진행되지만,
    // js에서는 컴파일에러가 나지않고, 런타임에러가 발생하게 된다.

    // good code
    function calculatorAreaGoodCode(sh : Shape){
        if('h' in sh){
            return sh.h * sh.w;
        }else{
            return sh.w;
        }
    }
}

{
    // 타입정보를 유지하는 '태그' 기법
    interface Square{
        kind : 'squre',
        w : number;
    };

    interface Ractangle {
        kind : 'Rectange',
        w : number;
        h : number;
    };

    type Shape = Square | Ractangle;

    function calcualtor(sh : Shape){
        if(sh.kind === 'squre'){
            // logic
        }else{
            // logic
        }
    };

    /**
     * 태그된 유니온기법을 활용하여 타입 정보를 손쉽게 유지할 수 있다. (ts에서 흔하게 보는 타입)
     * 물론 타입을 클래스로 만들면 bad code가 올바르게 동작한다. instanceOf 사용가능
     */
}

/**
 * 아무리 타입을 잘 선언했다 하더라도, 트랜스파일링 시점에서
 * 선언된 타입이 언제든지 달라질 수 있다.
 * 즉, 타입스크립트의 타입은 런타임 성능에 전혀 영향을 주지 않는다.
 */
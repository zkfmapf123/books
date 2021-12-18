/**
 * any는 왠만하면 쓰지말자...
 * 하지만? any를 굳이 써야하는 상황이 온다면 좀더 효율적으로 사용해보자...
 */

type Bar = {
    /** */
}

function expressionRetunringFoo(){

}

function processBar(b : Bar) {
    /** */
}

function f1(){
    const x = expressionRetunringFoo();
    processBar(x) // 에러가 발생한다.
}

function f2(){
    // 그럼 어떤 방법이 좋을가?
    // 1. x 타입을 자유롭게 any로 바꾸기
    const x : any = expressionRetunringFoo()
    processBar(x)

    /**
     * 근데 이건 문제가 생생한다.
     * 만약에 밑에 다른 로직이 존재한다면? 
     * x는 모든 타입에 영향을 끼치게 된다. 해당 processBar에서만 편하게 할수는 없을까?
     */
}

// good code
function f3(){
    const x = expressionRetunringFoo()
    processBar(x as any)
}
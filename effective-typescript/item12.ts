/**
 * 함수표현식에 타입 적용하기
 */

{
    function rollDice(sides : number){};            // 문장
    const rollDice2 = function(sides:number) {};    // 표현식
    const rollDice3 = (sides: number) => {};        // 표현식

    // 타입스크립트에서는 함수표현식을 사용하는 것이 좋다. -> 매개변수부터 반환식까지 전체를 함수타입으로 만들수 있어서

    type DiceRollFn = (sides : number) => number;
    const roll : DiceRollFn = sides => {
        return 0;
    };

    // 이렇듯 함수를 타입을 지정을 해서 쓸수가 있다. -> 이 부분이 왜좋나면?
}

{
    // 오버로딩 효과가 존재한다.
    type calculator = (a : number, b: number) => number;

    const add : calculator = (a,b) =>{
        return a+b;
    };

    const min : calculator = (a,b) =>{
        return a-b;
    };

}
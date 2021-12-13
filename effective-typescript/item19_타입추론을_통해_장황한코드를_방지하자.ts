/**
 * 굳이 number, string 타입 넣지 말자
 * 너무 장황해진다 -> 어차피 타입추론을 한다. 
 * 굳이 모든 변수에 타입을 넣는것이 더 안티패턴이다.
 */

{
    let x : number= 12 // bad
    let y = 12         // good
}

{
    interface Product {
        id : number;
        name: string;
        price: number;
    }

    function logProduct(product: Product){
        const id = product.id;
        const name = product.name;
        const price= product.name
    }

    // Q. 만약 이때, id에 string이 들어가야 한다면? 오류가 난다 즉 -> 좋은 코드는 아니다 (강제할순 있지만 유연하지는 않다.)

    function refactoringLogProduct(product: Product){
        const {id, name, price} = product;
        /**
         * 이럴 때는 비구조화 할당을 사용하자
         */
    }
}

/**
 * 타입을 추론할 수 있다면 굳이 타입을 세세히 적지말자.
 * 오류를 방지하기 위해선 타입을 명시하는 것은 좋다
 */
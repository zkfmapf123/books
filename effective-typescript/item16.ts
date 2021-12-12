/**
 * number 인덱스 시그니처보다는 -> Array, tuple, ArrayLike를 사용해라...
 */

{
    const xs = [1,2,3];
    const x0 = xs[0];   // 1
    const x1 = xs['1']  // 2 -> 이거는 알아보기 힘들다.

    function get<T>(array : T[], k : string) : T {
        return array[k];
    };

    const d = get(xs,'1');

    
    /**
     * 이러한 예제들은 자바스크립트가 key를 굳이 number로 받지않아도
     * 받아지는 굉장히 혼돈스러운 결과물을 나타낸다 -> 이 부분을 효과적으로 handling할 수 있어야 한다.
     */
}

{
    const xs = [];
    for (const x of xs ){
        // for of를 사용하는것이 좋다. (인덱스에 신경쓰지 않는다면)
    };

    // 만약 인덱스의 타입이 중요하다면
    xs.forEach((x,i) =>{

    });

    // loop 중간에 멈춰야 한다면?
    for(let i=0; i<xs.length; i++){
        const x = xs[i];
        if(x<0) break;
    }
}

/**
 * 타입이 불확실하다면
 * 속도차이가
 * for-in < for-of , for 해당형태이다.
 * 
 * 결론 객체의 키는 숫자가 아니라 문자열이다.
 */
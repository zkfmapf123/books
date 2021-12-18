/**
 * any를 남발하면 안되지만 로직을 구성을 하다보면,
 * 불필요한 예외상황까지 고려해가며 타입정보를 구성할 필요는 없다.
 * 함수내부에서 any를 구성한다면 함수외부에서 타입을 명시하는것으로 약간의 보호가 가능하다
 */

declare function cacheLast<T extends Function>(fn : T) : T;

function func<T extends Function>(fn :T): T {
    /**
     * logic
     */

    /**
     * T와 연관이 없기때문에 오류가 발생한다.
     */
    return function(...args: any[]){
        return []
    }
}

function func2<T extedns Function>(fn : T) : T {
    /**
     * logic
     */

    /**
     * 이렇듯 약간의 얀화를 준다
     */
    return function(...args : any[]){
        return []
    } as unknown as T;

}

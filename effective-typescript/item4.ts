/**
 * 구조적 타이핑에 익숙해지자.
 * 자바스크립트는 덕 타이핑* 구조이다. 
 * 그렇기 때문에 예상치 못한 결과가 발생하기도 한다. 이러한 구조를 잘 이해하고
 * 올바르지 않은 경우가 발생되지 않도록 구조를 잘 짜자
 */

{
    interface Vector2D{
        x : number;
        y : number;
    };

    interface VectorName2D {
        name : string;
        x : number;
        y : number;
    };

    const vName :VectorName2D = {
        name : 'leedonggyu',
        x : 100,
        y : 200
    };

    function calculatorLength(v : Vector2D){
        return v.x * v.y;
    };

    calculatorLength(vName);    
    /**
     * 해당 코드가 왜? 컴파일 에러가 나지 않을까?
     * ㅇㅇ 덕 타이핑 구조 이기 때문에, x가 존재하고, y가 존재하니까 Vector2D로 본거다. 
     * */ 

    interface Vector3D {
        x : number;
        y : number;
        z : number;
    }

    function calculatorSize(v : Vector3D){
        const len = calculatorLength(vName);

        return {
            x : v.x / len,
            y : v.y / len,
            z : v.z / len
        }
    };

    // 위에서 덕 타이핑 구조로인해 문제가 발생한다면, 해당 함수도 문제가 발생한다.
}


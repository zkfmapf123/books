/*
* 타입공간과 값 공간의 심벌을 구분해야한다.
*/

{
    // 하나는 타입이고, 하나는 값이지만, 구조적 타이핑이기 때문에 오류가 발생할 여지가 존재한다.

    interface Cylinder{
        ra : number;
        he : number;
    
    };

    const Cylinder = (radius : number, h : number) => ({radius,h});
    
}
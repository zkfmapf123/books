/**
 * 객체 래퍼 타입을 피하자
 * 자바스크립트는 객체 이외에도 여러타입이 존재한다.
 * es2015부터는 bigint 타입도 생겼다. -> 알아보자
 */

{
    "leedonggyu".charAt(2);
    // 해당 코드가 올바르게 동작하는 이유는 string, String을 자바스크립트는 자유롭게 변환하기 때문이다.
    // 즉, 자바스크립트는 'leedonggyu'를 String으로 객체 래핑한다.
    // 그리고 메서드 호출 후
    // 마지막에 래핑한 객체를 버린다.
}

{
    /**
     * 하지만 string, String 두개는 올바르게 동작하지 않을 수 있다.
     */

    console.log('hello' === new String('hello')) // false
    console.log(new String('hello') === new String('hello')) // false
    // 즉, 객체는 자기객체만 맞는거다.
}

{
    /**
     * 결과적으로 number, ... 이런 타입을 써도
     * 결국에는 해당 메서드를 사용할 수 있는 이유는 객체래핑을 알아서 해주기 때문이다.
     * 그렇기에 보통 객체래퍼를 직접 사용하지 않는다. ****
     * 특히, string을 사용할때는 주의해야 한다. -> typing
     */
}
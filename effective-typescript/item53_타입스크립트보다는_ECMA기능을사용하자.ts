/**
 * 중요한 ECMA 기능
 */

// 1. enum 근데... 얘는 type으로 사용하자

/**
 * 생성자 매개변수 속성은 하나로 통일하자
 */

{
    // 이렇게 하면 좀 읽기가 어려워진다. 통일하자...
    class A {
        private a;
        private b;
        constructor(private readonly c: number){

        }
    }

    class B {
        constructor(
            private a,
            private b,
            private c
        ){}
    }

    class C {
        private a;
        private b;
        private c;
    }
}

/**
 * 앵귤러를 사용하거나, 애너테이션이 필요한 프레임워크를 사용하는것이 아니라면
 * 데코레이터가 표준이 되기전까지는 타입스크립트에서는 데코레이터를 사용하지 말자 -> 표준화가 완료되지 않았다.
 */
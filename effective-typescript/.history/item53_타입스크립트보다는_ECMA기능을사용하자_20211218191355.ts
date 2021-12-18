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
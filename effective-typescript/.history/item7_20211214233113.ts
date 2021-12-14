/**
 * 타입이 값들의 집합이라고 생각하기
 * 타입은 값들의 집합이라고 생각하고, 부분집합, 교집합, 합집합으로 생각하는것이 정신적으로 편하다.
 * 
 */

{
    // 기존의 값의 집합을 가진 타입들
    type t = number | string;
    
    // 작은집합을 가짐 ==> 리터럴타입
    type greet = 'hello world';

    // union type
    type union = 'a' | 'b' | 'c';
}

{
    type AB = 'A' | 'B';
    const ab : AB = Math.random()< 0.5 ? 'A' : 'B';
}

{
    // intersaction, union
    interface Person {
        name :string;
    };

    interface LifeSpan {
        birth : Date;
        death?: Date;
    };

    // 합집합
    type PersonType = keyof (Person & LifeSpan);
    type PType = Person & {_brand: 'sorted'}

    const d : PType = {
        name : '123',
        _brand : 'sorted'
    }

    // 합집합을 표현할때는 주로 extends를 사용한다.
    interface PersonSpanType extends Person {
        birth : Date;
        death ?: Date;
    };

    // 교집합 ==> 두개의 교집합이 없기때문에, never 타입이 된다.
    type PersonType2 = keyof (Person | LifeSpan);

    // 이건 둘중에 하나를 표시한다는 의미
    type PersonType3 = Person | LifeSpan;
}

{
    // 타입을 운용할때는 제네릭을 주로 사용하면서 하는게 편하다.
    interface Point{
        x : number;
        y : number;
    };

    // type is x or y
    type PointKeys = keyof Point;
    const point: PointKeys = 'x';

    function sortBy<K extends keyof T, T>(vals: T[], key : K) : T[]{

        return undefined;
    };

    const pts : Point[] = [
        {x : 1, y: 2},
        {x : 2, y:3}
    ];

    // x기준으로 정렬
    sortBy(pts, 'x');
}

{
    // 제네릭을 활용한 예

    type Person = {
        name : string;
        age : number;
        per : string;
    };

    type Optional<T> = {
        [P in keyof T] ?: T[P];
    };

    const p : Optional<Person> = {
        name : '123'
    };
}

/**
 * a는 b를 상속한다 -> a는 b에 할당가능하다
 * a는 b의 서브 타입 -> a는 b의 부분집합이다.
 */
/**
 *  동적데이터에 인덱스 시그니처 사용하기
 */

{
    // 자바스크립트는 객체를 생성하는 문법이 간단하다.

    const rocket = {
        name : 'aa',
        variant: ' asdf',
        thrust : '123'
    };

    // 인덱스 시그니처
    // bad code
    type Rocket = {
        [property : string]: string
    };

    const rocket2 : Rocket = {
        name : '123',
        variant : '123',
        thurst : '123',
        adsf : '123' // 잘못된 키
    }

    /**
     * 이러한 인덱스 시그니처를 사용하면,
     * 
     * 잘못된 키를 포함하여 모든키를 허용한다.
     * 특정키가 필요하지 않는다.
     * 키마다 다른타입을 가질 수 없다.
     * 자동완성기능, 타입체커기능이 없다
     */
}

{
    // 이 방법이 맞는 방법
    interface Rocket{
        name : 'aa',
        varinat : 'aa',
        thrust : 'aa'
    };

    const r : Rocket = {
        name : 'aa',
        varinat : 'aa',
        thrust : 'aa'
    };

}

{
    // 인덱스 시그니처는 왜 쓸까?
    // 해당 타입의 이름이 뭔지 모를때
    // 잘 모르겠다...

    function parseCSV(input : string) : {[columnName : string] : string}[] {
        /**
         * ...
         */
        const row = [];

        return row.map((rowStr) =>{
            const row : {[columnName : string] : string} = {};
            /**
             * 
             */
        })
    }
}

{
    /**
     * 윗부분에서는 해당 열이름을 모르는 상황에서 사용한건데,
     * 만약에 열 이름을 알고있다면
     */

    // 열 이름을 알고있다면
    interface ProductRow {
        pid : number;
        name : string;
        price : string
    };

    declare let csvData: string;
    const products = parseCSV(csvData) as unknown as ProductRow[];

    /**
     * 만약에 열이름이 너무 많거나, 선택사항이 많다면 
     * 유니온으로 정리해라
     */

    type Row = 
        | { a: number}
        | { a: number, b: number}
        | { a: number, b: number, c:number};
}

{
    /** 근데 어떻게 저렇게 사용하냐 --> Record를 사용하자 */
    type Vec3D = Record<'x' | 'y' | 'z',number>;

    const v : Vec3D = {
        x : 123,
        y : 123,
        z : 123
    };

    type Vec3D2 = {[k in 'x' | 'y' |'z']: number};
    type Vec3D3 = {[k in 'x' | 'y' |'z']: k extends 'y' ? string : number};

    const v3 : Vec3D3 = {
        x : 123,
        y : '123',
        z : 123
    };
}


/**
 * 이 해당타입이 뭔지 모르겠다면
 * any -> unknown을 사용하도록 하자
 */

{
    function parseYMAL(yaml : string) : any {
        return {
            name : 'name',
            autor : 'leedonggyu',
            description : yaml
        }
    }
    
    const d = parseYMAL('ddd')
    d.name;
    d.titles; // 에러가 잡히지 않는다 -> any라서..
}    

{  
    function safeParseYAML(yaml: string) : unknown {
        return {
            name : 'name',
            author: 'leedonggyu',
            description: yaml
        }
    }  

    // 이렇듯 unkown로 로하면 에러를 뱉어낸다. -> type을 강제시키면 전체를
    const d = safeParseYAML('asdf')
    d.name
    d.author
    d.description
}

{
    // unknown을 사용한다면 -> 타입가드를 사용하자
    function processValue(val: unknown){
        if(val instanceof Date){

        }else if(typeof val === 'number'){

        }

        /**
         * 이렇듯 타입가드를 사용하여 안전하게 코딩을 하는것도 좋은 방법이다. -> 근데이건 제네릭으로 극복이 가능하다
         */
    }

    function genericProcessValue<T>(val: T){
        /**
         * logic
         */
    }
}

    // 단언문에서 unkown 사용하기
    type Foo = 'Foo';
    declare const foo : Foo;

    let barAny = foo as unknown as 'Bar'
    let barUnk = foo as unknown as 'Unk'



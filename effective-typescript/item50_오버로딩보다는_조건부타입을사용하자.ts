
{
    // overloading
    function double(x : number | string){
        if(typeof x === 'number'){
            return x+ x;
        }else {
            return x+ x
        }
    }

}

{
    // generic overloading
    type double<T> = (x : T) => T;
    
    const numDouble : double<number> = (num) =>{
     return num+num   
    }

    const stringDouble: double<string> =(num) =>{
        return num+num
    }

    /**
     * 하지만 유니온 타입이 오면 조금 애매해진다.
     * 그렇기 때문에 유니온타입이 올때는 조건을 걸면된다
     */
}

{
    function dobule<T extends number | string>(
        x : T
    ) : T extends string ? string : number {
        
    }
}


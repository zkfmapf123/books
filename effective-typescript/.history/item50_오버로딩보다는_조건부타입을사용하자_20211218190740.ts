
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
        
    }

    const stringDouble: double<string> =(num) =>{
        
    }
}


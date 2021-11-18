{
    // 연관배열을 제네릭을 이용해서 사용하자
}

{
    // 연관배열
    type Row = 
    | { a: number} 
    | { a : number, b: number}
    | { a: number, b: number, c: number};

    // 언제 이렇게 만드냐...
}

{
    // refactoring
    type RowRecord = Record<'a' | 'b' | 'c',number>;
}

{
    // use mapping type
    type vec3D = {[K in 'x' | 'y' | 'z'] : number};
    type Vec4D = {[k in 'x' | 'y' | 'z'] : k extends 'z' ? string : number};

}
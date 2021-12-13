/**
 * 매핑된 타입을 이용하여,
 * 사용해보자...
 */

{
    interface Props{
        xs : number[];
        ys : number[];

        xRange: [number, number];
        yRange: [number, number];
        color: string
    }

    // 첫번째 최적화 방법
    // keyof를 이용하여 key를 가져온 후 -> loop문을 돌 수있다.
    function update(
        oldProps: Props,
        newProps: Props
    ){
        let k : keyof Props
        for(k in oldProps){
            console.log(oldProps[k])
            // k를 다 돈다.
        }
    }

    // more better code
    const requires_update: {[k in keyof Props]: boolean} = {
        xs : true,
        ys : true,
        xRange : true,
        yRange : true,
        color : true
    }

    const requires_update2: {
        [k in keyof Props] : k extends 'color' ? string : boolean
    } = {
        xs : true,
        ys : true,
        xRange : true,
        yRange : true,
        color : 'black'
    }

}

/**
 * 이미 매핑된 타입을 이용하여, 관련된 값과 동기화 하여야 한다.
 * 인터페이스에 새로운 속성을 추가 할때, 선택을 강제하도록 해야 한다.
 */
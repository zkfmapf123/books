/**
 * 넓히기 과정을 이해하자
 */

{
    type Vector = {[k in 'x' | 'y' | 'z'] : number}
    
    // good code
    function getComponent(v : Vector, axios : keyof Vector){
        return v[axios]
    }

    // 하지만 Vector 타입이 string으로 추론될 수 있다.
    const mixed = ['x',1] // 이런걸 타입이 추론되기 너무 힘들다...
}

{
    // 타입넓히기의 첫번째 방법 : const
    const a1 = [1,2,3]              // number[]
    const a2 = [1,2,3] as const     // [1,2,3]
    // 타입이 다르다.
}

// 태그된 유니온 많이 사용하자

// tech 1. tagged union
interface UploadEvent {
    type : 'upload',
    filename : string;
    content: string
}

interface DownlaodEvent{
    type: 'download',
    filename: string;
    content: string
};

type AppEvent = UploadEvent | DownlaodEvent
function handleEvent(e: AppEvent) {

    if(e.type = 'upload'){
        // upload
    }else{
        // download
    }
}
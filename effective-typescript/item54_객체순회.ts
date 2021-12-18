{
    const obj = {
        one : 'a',
        two : 'b',
        three : 'c'
    }

    for(const k in obj){
        const v = obj[k]
    }
}

{
    const obj = {
        a : 'a',
        b : 'b',
        c : 'c'
    }
    let t : keyof typeof obj
    for(t in obj){
        console.log(obj[t])
    }
}

/**
 * 객체를 순회할때는, 
 * keyof T, for-in 루프를 사용하는 것이 좋다. (키가 어떤 타입인지 정확히 파악하고 있다면)
 * 
 * 객체를 순회하면서 키와 값을 얻는 가장 보편적인 방법은 Object.entries가 존재한다
 */
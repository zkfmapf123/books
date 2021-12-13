declare let hasMiddle: boolean;

const firstLast = {
    first: 'hanry',
    last: 'truman'
}

// 객체 추가 -> options
const president = {
    ...firstLast,
    ...(hasMiddle ? {middle: 'S'} : {})
};

// 헬퍼 함수
function addOptinoal<T extends object, U extends object>(a: T, b: T | null) : T & Partial<U> {
    return {
        ...a,
        ...b
    }
}


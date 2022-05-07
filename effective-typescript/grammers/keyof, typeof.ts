/**
 * 대상이 값인지 타입인지 구별해서 사용해야한다.
 */
// keyof 활용
interface A {
  name: string;
  age: number;
  per: string;
}

// AA Basic
type AAbasic = {
  [k in "name" | "age" | "per"]: k extends "age" ? number : string;
};

// AA use keyof
type AA = {
  [k in keyof A]?: A[k];
};

const leedonggyu: AA = {
  name: "123",
  age: 20,
  per: "123",
};

// typeof 활용
const objj = {
  width: 100,
  hegiht: 100,
  color: "red",
};

type Obt = typeof objj;

// function getUserInfo
function getUserInfo<T>(userId: T) {
  const myName = "leedonggyu";
  const age = 29;
  const width = 180;
  const hegith = 90;

  return {
    userId,
    myName,
    age,
    width,
    hegith,
  };
}

type UserInfo<T> = ReturnType<typeof getUserInfo<T>>;

const userInfo : UserInfo<number> = {
    userId : 10,
    myName : 'ee',
    age : 10,
    width : 180,
    hegith : 80
}

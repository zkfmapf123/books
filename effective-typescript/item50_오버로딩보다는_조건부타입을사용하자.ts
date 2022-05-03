{
  // overloading
  function func(num: string | number): string | number;
  function anyFunc(num: any): any;
}

{
  // generic
  // Too much
  // 오류가 존재함
  function func<T extends string | number>(num: T): T;
}

{
  // good code
  // conditional type
  type func<T extends string | number> = (
    num: T
  ) => T extends string ? string : number;

  const addString: func<string> = (num) => {
    return num.concat(num);
  };

  const addNum: func<number> = (num) => {
    return num + num;
  };
}

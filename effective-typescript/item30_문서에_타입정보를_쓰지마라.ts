/**
 * 막 위에다가 주석치고
 * 이거는 이거다, 저거는 저거다 이런거 하지마라...
 * 정보를 오인할 수 있다.
 * 
 * 대신 주석은 한줄로 표기한다
 */

// good code
/** 애플리케이션 또는 특정 페이지의 전경색을 가져옵니다 */
function getForegourdColor(page?: string) : any {};

// 값을 변경하지 않는다는 주석도 하지마라...

// bad code
/** nums not used */
function sorts(nums: number[]){}

// good code -> 대신 이렇게 쓰자
function sorts2(nums: readonly number[]){}

// 변수명도 ageNum => X
//        age : number
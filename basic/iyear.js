/*
    윤년 구하기
    조건
    - 4로 나누어 떨어지는 년도는 윤년이다
    - 그 중 100으로 나누어 떨어지는 년도는 윤년이 아니다
    - 400으로 나누어 떨어지는 년도는 무조건 윤년이다
*/


function iYear(year){
    var result = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    console.log(year +'은 ' + result);
}

iYear(2300)

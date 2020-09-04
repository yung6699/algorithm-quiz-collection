/* 
    페이스북에서 본 알고리즘 문제
    "랜덤한 50개의 수 중 하나를 입력하면, 더해서 이 수를 만들 수 있는 모든 숫자 쌍을 출력 하도록 개발 하시오"
    라는 문제 였습니다.

    예 ) 7 을 입력 , 결과 1,6 2,5 3,4 1,2,4 랜덤에 1이 없으면 1,6 1,2,4는 제외
    
    https://www.facebook.com/groups/codingeverybody/permalink/2287602674613589/
*/

var N = 50; // 50개의 숫자
var S = 7; // 목표 값
var data = {};
var arr = [];
var result = [];

for (var i = 0; i < N; i++) {
    var n = Math.floor(Math.random() * 1000) + 1 // 1~1000까지만 함
    if (!data[n]) {
        data[n] = n;
    } else {
        i--;
    }
}

data = Object.keys(data).map(Number);

for (var j = 0; j < data.length; j++) {
    if (data[j] <= S) {
        arr.push(data[j])
    }
}


function solution(arr) {
    var num = Math.pow(2, arr.length); // 총 가지 수
    if (!arr.length) {
        return false
    }

    for (var i = 1; i < num; i++) {
        var ans = 0;
        var tmp = [];
        for (var j = 0; j < arr.length; j++) {
            if (i & (1 << j)) {
                tmp.push(arr[j])
                ans += arr[j];
            }
        }

        if (ans === S) {
            result.push(tmp)
        }
    }

    return (result.length) ? result : false;
}

console.log(solution(arr));
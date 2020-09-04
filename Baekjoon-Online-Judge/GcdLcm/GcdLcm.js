/* 
   최대공약수, 최소공배수 구하기 알고리즘
   1. 최대공약수를 구한다.
   2. 주어진 두값을 곱한 값에 최대 공약수를 나누면 최소 공배수가 나온다.
*/

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');

function gcdlcm(a, b) {
    var answer = [];
    var temp = a % b;
    var mtp = a * b;

    while (temp > 0) {
        a = b;
        b = temp
        temp = a % b;
    }

    answer[0] = b;
    answer[1] = mtp / b;

    return answer;
}

// var result = gcdlcm(input[0], input[1]);
var result = gcdlcm(24,18);
console.log(result[0]+'\n'+result[1]);
console.log();

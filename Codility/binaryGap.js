/* 
    codility 첫번째 문제
    binary gap
*/

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var tmp = N.toString(2);
    var max = 0;
    var result = 0

    for (var i = 0; i < tmp.length; i++) {
        if (tmp[i] === '0') {
            max++;
        } else {
            if (max > result) {
                result = max;
            }
            max = 0;
        }
        
    }
    return result
}

console.log(solution(1024));
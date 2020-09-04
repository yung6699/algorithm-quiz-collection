/* 
  백준 알고리즘 1158번 조세퍼스
  https://www.acmicpc.net/problem/1158
*/


// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');

function solution(N, M) {
    var queue = [];
    var circleArray = [];
    var head = 0;

    // 원에 숫자 채운다.
    for (var i = 0; i < N; i++) {
        circleArray.push(i + 1)
    }

    while (circleArray.length) {

        head += (M - 1);

        if(head >= circleArray.length){
            head %= circleArray.length;
        }

        queue.push(circleArray[head])
        circleArray.splice(head, 1);
    }
    return '<'+queue.join(',')+'>';
}

console.log(solution(7, 3));

/* 
  백준 알고리즘 11866번, 1158번 조세퍼스 문제
  두 문제가 동일함
  https://www.acmicpc.net/problem/1158
  https://www.acmicpc.net/problem/11866
 */ 

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

function solution(N, M) {
    var queue = [];
    var circleArray = [];
    var head = 0;

    for (var i = 0; i < N; i++) {
        circleArray.push(i + 1)
    }

    while (circleArray.length > 0) {
        head += (M - 1);
        if(head >= circleArray.length){
            head %= circleArray.length; 
        }
        queue.push(circleArray[head])
        circleArray.splice(head, 1);
    }

    return '<'+queue.join(', ')+'>';
}

console.log(solution(parseInt(input[0]), parseInt(input[1])));
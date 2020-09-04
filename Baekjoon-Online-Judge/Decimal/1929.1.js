/* 
  백준 알고리즘 1929번 소수 구하기
  에라토스테네스의 접근
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var temp = input[0].split(' ');
var M = parseInt(temp[0]);
var N = parseInt(temp[1]);

function solution(num) {
  var isPrime = true;
  if (num !== 1) {
    for (var j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }
}

for (var i = M; i <= N; i++) {
  if(solution(i)){
    console.log(i);
  }
}


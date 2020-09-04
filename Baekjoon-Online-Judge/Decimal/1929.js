/* 
  백준 알고리즘 1929번 소수 구하기
  에라토스테네스의 체
*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split(' ');
var M = parseInt(input[0]);
var N = parseInt(input[1]);
var prime = [];
var result = [];

for (var i = 2; i <= N; i++) {
  prime[i] = true;
}

for (var i = 2; i <= N; i++) {
  if (prime[i]) {
    for (var j = 2 * i; j <= N; j += i) {
      if (prime[j]) {
        prime[j] = false;
      }
    }
  }
}


for (var i = M; i <= N; i++) {
  if (prime[i]) {
    result.push(i);
  }
}

console.log(result.join('\n'));

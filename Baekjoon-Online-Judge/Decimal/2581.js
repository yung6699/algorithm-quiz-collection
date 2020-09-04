/* 
  백준알고리즘 2581번 소수
  https://www.acmicpc.net/problem/2581
  소수문제는 무조건 에라토스테네스 체 또는 접근으로 푼다.
*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var M = parseInt(input[0]);
var N = parseInt(input[1]);
var prime = [];
var result = 0;
var array = [];

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
    array.push(i);
    result += i;
  }
}

if (result === 0) {
  console.log(-1);
} else {
  console.log(result);
  console.log(array[0]);
}

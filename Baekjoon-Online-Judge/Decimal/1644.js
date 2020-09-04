/* 
  백준알고리즘 1644번 소수의 연속합
  https://www.acmicpc.net/problem/1644
*/

var fs = require('fs');
var N = parseInt(fs.readFileSync('./dev/stdin').toString());
var prime = [];
var result = [];

for (var i = 2; i <= N; i++) {
  prime[i] = true;
}

for (var i = 2; i <= N; i++) {
  for (var j = 2 * i; j <= N; j += i) {
    if (prime[j]) {
      prime[j] = false;
    }
  }
  if (prime[i]) {
    result.push(i);
  }
}


var ans = 0;
var sum = 0;
var s = 0,
  e = 0;
var cnt = result.length;

while (e <= cnt) {

  if (sum < N) {
    sum += result[e];
    e += 1;
    continue;
  }

  if (sum == N) {
    ++ans;
  }

  sum -= result[s];
  s += 1;
}

console.log(ans);
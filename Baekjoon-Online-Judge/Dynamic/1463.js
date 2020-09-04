/* 
  백준 알고리즘 1463번 1로 만들기
  https://www.acmicpc.net/problem/1463
*/

var N = parseInt(require('fs').readFileSync('./dev/stdin').toString());
var dp = [];

function solution() {

  dp[1] = 0;
  for (var i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 == 0) { dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);}
    if (i % 3 == 0) { dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);}
  }
  console.log(dp);
  console.log(dp[N]);
}

solution();
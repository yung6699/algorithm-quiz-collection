/* 
  백준 알고리즘 2631번 줄세우기
  https://www.acmicpc.net/problem/2631
  LIS는 Longest Increasing Subsequence 로써 최장증가부분수열
*/



var fs = require('fs');
var arr = fs.readFileSync('./dev/stdin').toString().split('\n').map(Number);
var N = arr.shift();

var dp = [];
var ans = 0;

dp[0] = 1;

for (var i = 1; i < N; i++) {
  dp[i] = 1;
  for (var j = 0; j < i; j++) {
    if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
      dp[i] = dp[j] + 1;
    }
  }

}

for (var i = 1; i < N; i++) {
  if (ans < dp[i]) {
    ans = dp[i];
  }
}

console.log(N - ans);
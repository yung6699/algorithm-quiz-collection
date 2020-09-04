/* 
  동적 프로그래밍1
  백준 알고리즘 2293번 동전 2
  https://www.acmicpc.net/problem/2293
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var temp = input.shift().split(' ');
var n = parseInt(temp[0]);
var k = parseInt(temp[1]);
var coins = input;
var dp = [];

for (var i = 1; i <= k; i++) {
  dp[i] = k + 1;
}

dp[0] = 0;

function solution(N, K) {
  for (var i = 0; i < n; i++) {
    var coin = parseInt(coins[i])
    console.log(coin);
    for (var j = coin; j <= k; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin] + 1)
    }
    console.log(dp);
  }
  
  if (dp[k] == k + 1) {
    console.log(-1);
  } else {
    console.log(dp[k]);
  }
}

solution(n, k)
console.log(dp);
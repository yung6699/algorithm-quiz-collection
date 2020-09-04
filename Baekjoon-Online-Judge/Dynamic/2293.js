/* 
  동적 프로그래밍1
  백준 알고리즘 2293번 동전 1 
  https://www.acmicpc.net/problem/2293
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var temp = input[0].split(' ');
var n = parseInt(temp[0]),
  k = parseInt(temp[1]);
var coins = input.slice(1);

var dp = [];
for (var i = 0; i <= k; i++) {
  dp.push(0)
}
dp[0] = 1;

function solution() {
  for (var i = 0; i < n; i++) {
    var coin = parseInt(coins[i]);
    for (var j = coin; j <= k; j++) {
      dp[j] = dp[j] + dp[j - coin];
    }
  }
  console.log(dp[k]);
}

solution()

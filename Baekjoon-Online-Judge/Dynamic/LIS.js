/* 
  LIS는 Longest Increasing Subsequence로서 
  최장증가부분수열을 구하는 알고리즘이다.
*/

var arr = [3, 7, 5, 2, 6, 1, 4]
var N = arr.length;

var dp = [];
var ans = 0;

dp[0] = 1;

for (var i = 1; i < N; i++) {
  dp[i] = 1;
  for (var j = 0; j < i; j++) {
    if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
      dp[i] = dp[j] + 1;
      console.log(arr[j], arr[i]);
      console.log(dp);
    }
  }
}



for (var i = 1; i < N; i++) {
  if (ans < dp[i]) {
    ans = dp[i];
  }
}

console.log(N - ans);
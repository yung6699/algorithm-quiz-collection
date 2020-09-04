/* 
    다이나믹 프로그래밍
    최소 동전 구하기 알고리즘
*/

var coins = [10, 50, ,70, 100]
var k = 140;
var n = 4;
var dp = [];

for (var i = 1; i <= k; i++) {
    dp[i] = 100000;
}

dp[0] = 0;


function solution(N, K) {
    for(var i = 0; i < n; i++){
        for(var j = coins[i]; j <= k; j++){
            dp[j] = Math.min(dp[j], dp[j-coins[i]] + 1)
        }
    }

    console.log(dp[k]);
}

solution(n, k)
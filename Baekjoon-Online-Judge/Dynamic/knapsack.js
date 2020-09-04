/* 
    배낭 문제
    메모리제이션으로 푼다.
*/

function knapsack(w, v, K) {
    // w, v는 배열이다.
    // w 무게, v 가치 , K 배낭 공간

    const dp = [];
    for (var i = 0; i <= w.length; i++) {
        dp[i] = [];
    }

    for (var i = 0; i <= w.length; i++) {
        for (let j = 0; j <= K; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (w[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i - 1]] + v[i - 1]);
            }
        }
    }

    return dp[w.length][K];
}

knapsack([10, 20, 30], [60, 100, 120], 50)
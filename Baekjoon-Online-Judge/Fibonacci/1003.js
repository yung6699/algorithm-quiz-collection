/* 
  백준 1003번
  피보나치 함수
// */
var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n').map(Number);
var T = input.shift();

function fibonacci(n) {
  var memo = [1, 1];
  for (var i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo;
}

for (var i = 0; i < T; i++) {
  var n = input[i];
  if (n == 0) {
    console.log(1, 0);
  } else if (n == 1) {
    console.log(0, 1);
  } else {
    var arr = fibonacci(n);
    console.log(arr[n - 2], arr[n - 1]);
  }
}
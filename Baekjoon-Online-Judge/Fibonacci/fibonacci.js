/* 
  백준 1003번
  피보나치 함수
// */
var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var T = parseInt(input[0])
var memo = [0, 1];

function fibonacci(n) {
  for (var i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n]
}



var f = [];

function dynamicFibo(n) {
  if (f[n]) {
    return f[n]
  } else {
    if (n === 0 || n === 1) {
      f[n] = n;
    } else {
      f[n] = dynamicFibo(n - 1) + dynamicFibo(n - 2)
    }
    return f[n];
  }
}


console.log(fibonacci(10));
console.log(dynamicFibo(10));
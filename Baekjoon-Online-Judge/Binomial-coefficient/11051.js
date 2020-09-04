/* 
  백준알고리즘 11051번 이항계수 2
  https://www.acmicpc.net/problem/11051
  파스칼의 삼각형으로 구한다.
*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
var N = parseInt(input[0]);
var M = parseInt(input[1]);
var k = 10007;
var arr = [];

for (var i = 0; i <= N; i++) {
  arr.push([]);
}

arr[0][0] = 1;
arr[1][0] = 1;
arr[1][1] = 1;

function solution() {
  for (var i = 2; i <= N; i++) {
    for (var j = 0; j <= i; j++) {
      if (i == j || j == 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = Math.floor((arr[i - 1][j - 1] + arr[i - 1][j]) % k) ;
      }
    }
  }

  console.log(arr[N][M]);
}

solution()
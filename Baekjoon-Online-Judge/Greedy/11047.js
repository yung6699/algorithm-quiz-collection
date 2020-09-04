/* 
  백준 알고리즘 11047번 동전 0
  https://www.acmicpc.net/problem/11047
  동전을 적절히 사용해서 그 가치의 합을 K로 만드려고 한다. 이 때 필요한 동전 개수의 최소값을 구하는 프로그램을 작성하시오.
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var temp = input[0].split(' ');
var K = temp[1];
var N = temp[0];



function solution(N, K) {

  var coins = [], count = 0;

  for (var i = 1; i <= N; i++) {
    coins.push(input[i]);
  }

  for (var i = coins.length-1; i >= 0; i--) {
    var n = Math.floor(K / coins[i])
    if (n > 0) {
      count += n;
      K = K % coins[i];
    }
  }
  console.log(count);
}

solution(N, K)

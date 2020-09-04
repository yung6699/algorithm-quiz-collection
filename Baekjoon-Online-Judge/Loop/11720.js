/* 
  백준 11720번 숫자의 합
  https://www.acmicpc.net/problem/11720
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var n = input[0], k = input[1];

function solution(n,k){
  var sum = 0;
  for(var i = 0; i < n; i++){
    sum += parseInt(k[i]);
  }
  console.log(sum);
}

solution(n,k)
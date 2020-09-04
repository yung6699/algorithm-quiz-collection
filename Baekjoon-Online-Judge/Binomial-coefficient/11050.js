/* 
  백준알고리즘 11050번 이항계수 1
  https://www.acmicpc.net/problem/11050
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');

function solution(a, b){
  return (fatorial(a) / Math.floor(fatorial(a-b) * fatorial(b))) % 10700;
}

function fatorial(N){
  var result = 1;
  for(var i = 2; i <= N; i++){
    result *= i;
  } 
  return result;
}

console.log(solution(parseInt(input[0]), parseInt(input[1])));
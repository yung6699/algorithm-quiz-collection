/* 
  백준 알고리즘 기찍 N : 2742번
  https://www.acmicpc.net/problem/2742
s*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];

function solution(N){
  for(var i = N; i >= 1; i--) console.log(i);
}
solution(N);


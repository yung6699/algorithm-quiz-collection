/* 
  백준 알고리즘 N 찍기 : 2741번
  자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
  https://www.acmicpc.net/problem/2741
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];

function solution(N){
  for(var i = 1; i <= N; i++){
    console.log(i);
  }
}
solution(N)


/* 
  백준 2439번 별찍기 - 2
  https://www.acmicpc.net/problem/2439
 */

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];

function solution(N){
  for(var i = 1; i <= N; i++){
    var result = '';
  
    for(var j = 1; j <= N - i; j++ ){
      result+= ' ';
    }

    for(var k = 1; k <= i; k++){
      result += '*';
    }
    console.log(result);
  }
}
solution(N)
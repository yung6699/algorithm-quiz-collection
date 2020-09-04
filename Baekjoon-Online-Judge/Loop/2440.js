/* 
  백준 2438번 별찍기 - 3
  https://www.acmicpc.net/problem/2440
 */

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];

function solution(N){
  for(var i = N; i >= 1; i--){
    var str = '';
    for(var j = 1; j <= i; j++){
      str += '*';
    }
    console.log(str);
  }
}

solution(N)
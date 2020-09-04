/* 
  백준 2438번 별찍기 - 1
  s
 */

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];

function solution(N){
  var str = '';
  for(var i = 1; i <=N; i++){
    str += '*';
    console.log(str);
  }
}

solution(N);
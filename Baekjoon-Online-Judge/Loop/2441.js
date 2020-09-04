/* 
  백준 2440번 별찍기 - 3
  https://www.acmicpc.net/problem/2441
 */

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];

function solution(N){
  for(var i = 0; i < N; i++){
    var str = '';

    for(var j = 0; j < i; j++){
      str += ' ';
    }
    
    for(var k = 0; k < N - i ; k++){
      str+='*';
    }
    console.log(str);
  }
}

solution(N)
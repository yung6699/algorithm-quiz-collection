/* 
  백준 11721번 - 열 개씩 끊어 출력하기
  https://www.acmicpc.net/problem/11721

  BaekjoonOnlineJudge

  BaekjoonOn
  lineJudge

 */

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];

function solution(N){
  var str = '';
  for(var i = 1; i <= N.length; i++){
    str += N[i-1];
    if(i % 10 === 0 || i === N.length){
      console.log(str);
      str = '';
    }
  }
}

solution(N)
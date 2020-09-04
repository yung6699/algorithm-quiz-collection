/* 
  백준알고리즘 1094번 막대기
  https://www.acmicpc.net/problem/2455
*/


var fs = require('fs');
var input = Number(fs.readFileSync('./dev/stdin').toString());
var N = input.toString(2);
var cnt = 0;

for(var i = 0; i < N.length; i++){
  if(N[i]==1){
    cnt+=1;
  }
}

console.log(cnt);

/* 
  백준알고리즘 2455번 지능형 기차 
  https://www.acmicpc.net/problem/2455
*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var cnt = 0, max = 0;

for(var i = 0; i < 4; i++){
  var arr = input[i].split(' ').map(Number);
  cnt += (arr[1] - arr[0]);
  if(max < cnt){
    max = cnt;
  }
}

console.log(max);

/* 
  백준알고리즘 14561번 회문
  https://www.acmicpc.net/problem/14561
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = Number(input.shift());

function isPalinDrome(str){
  var length  = str.length;
  for(var i = 0; i < length; i++){
    if(str[i] !== str[length - (i+1)]){
      return 0;
    }
  }
  return 1;
}

for(var i = 0; i < N; i++){
  var tmp = input[i].split(' ').map(Number);
  var n = tmp[0].toString(tmp[1]);
  console.log(isPalinDrome(n));  
}

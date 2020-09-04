/* 
  백준 15552번 빠른 A+B
  https://www.acmicpc.net/problem/15552
*/


var input = require('fs').readFileSync('./dev/stdin').toString().split('\n');
var result = ""
for(var i = 1; i <= input[0]; i++){
  var temp = input[i].split(' ');
  result += (parseInt(temp[0]) + parseInt(temp[1]) + '\n')
}

console.log(result)


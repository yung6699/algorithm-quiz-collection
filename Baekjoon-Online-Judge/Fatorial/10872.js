/* 
  백준알고리즘 10872번 팩토리얼
*/

var fs = require('fs');
var N = Number(fs.readFileSync('./dev/stdin').toString().trim());
var result = 1;

while(N){
  result *= N;
  N--;
}

console.log(result);
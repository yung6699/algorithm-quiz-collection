/* 
  백준 알고리즘 1361번 그룹 단어 체커
  https://www.acmicpc.net/problem/1316
  happy
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = parseInt(input.shift());
var count = 0;
function solution(str){
  var record = [];
  for(var i = 0, length = str.length; i < length; i++){
    if(record.indexOf(str[i]) === -1){
      record.push(str[i]);
    } else {
      if(record[record.length -1] !== str[i]){
        return;
      }
    }
  }
  count++;
}

for(var i = 0; i < N; i++){
  solution(input[i])
}

console.log(count);
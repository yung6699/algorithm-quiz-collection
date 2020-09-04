/* 
  백준알고리즘 7568번 덩치
  https://www.acmicpc.net/problem/7568
*/

var fs = require('fs');
var input = fs.readFileSync('./stdin').toString().split('\n');
var N = parseInt(input.shift());

function solution(){
  var result = []
  var cur, temp;
  var max = 0;

  for(var i = 0; i < N; i++){
    cur = input[i].split(' ');
 
    for(var j = 0; j < N; j++){
      if(i !== j){
        temp = input[j].split(' ');
        if(temp[0] > cur[0] && temp[1] > cur[1]){
          max++;
        }
      }
    }
    result.push(max+1);
    max = 0;
  }
  console.log(result.join(' '));
}

solution()
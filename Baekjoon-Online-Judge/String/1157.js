/* 
  백준 1157번 단어 공부
  https://www.acmicpc.net/problem/1157
*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString();

function solution(str) {
  var result;
  var max = 0;
  var upper = str.toUpperCase();
  var array = [];
  for (var i = 0; i < 26; i++) {
    var result = upper.match(new RegExp(String.fromCharCode(65 + i), "g"));
    result !== null ? array.push(result.length) : array.push(0);
  }

  for(var i =0 ; i < array.length ; i++) {
    if(max == array[i]) {
      result = "?";
    }else if (max < array[i]) {
      max = array[i];
      result = String.fromCharCode(65+i);
    }
  }
  console.log(result);
}

solution(input)
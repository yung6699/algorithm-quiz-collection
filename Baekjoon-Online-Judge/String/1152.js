/* 
  https://www.acmicpc.net/problem/1152
  단어의 개수
*/
var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString();

function solution(str) {
  var num = 0;
  var length = str.length;
  if (str === '') { // 문장이 아예 없을 때
    console.log(0);
  } else {
    for (var i = 0; i < length; i++) {
      if (str[i] === ' ') num++;
    }
    console.log(num + 1);
  }
}

solution(input.trim())

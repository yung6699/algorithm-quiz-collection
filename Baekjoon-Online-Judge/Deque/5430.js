/* 
  백준 알고리즘 5430번 : AC문제
  https://www.acmicpc.net/problem/5430
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input.shift();

function solution(str, length, array) {
  var bool = true;
  for (var i = 0, max= str.length; i < max; i++) {
    if (str[i] === 'R') {
      bool = (bool) ? false : true;
    } else if (str[i] === 'D' && length !== 0) {
      (bool) ? array.shift() : array.pop();
      length--;
    } else {
      console.log('error');
      return;
    }
  }

  (bool) ? console.log('['+ array.join(',')+']') : console.log('['+array.reverse().join(',')+']');
}


for (var i = 0; i < N; i++) {
  solution(input[3 * i], parseInt(input[3 * i + 1]), JSON.parse(input[3 * i + 2]))
}
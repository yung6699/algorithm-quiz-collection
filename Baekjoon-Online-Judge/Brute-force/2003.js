/* 
  백준알고리즌 2003번 수들의 합 2
  https://www.acmicpc.net/problem/2003
*/

var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input[0].split(' ').map(function(value){return parseInt(value)});
var data = input[1].split(' ').map(function(value){return parseInt(value)});

var N = temp[0]; // 숫자 개수
var S = temp[1]; // 구할 값
var result = 0;

function solution() {
  for (var i = 0; i < N; i++) {
    var ans = 0;
    for (var j = i; j < N; j++) {
      ans += data[j];
      if (ans === S) {
        result++;
      }
    }
  }
  console.log(result);
}

solution()

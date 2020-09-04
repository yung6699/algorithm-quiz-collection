/* 
  백준알고리즘 1182번 부분집합의 합 
  https://www.acmicpc.net/problem/1182

  가짓수 인덱스를 2진수로
  */

var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input[0].split(' ');
var N = parseInt(temp[0]);
var S = parseInt(temp[1]);
var num = Math.pow(2,N);

var data = input[1].split(' ');
var count = 0;

function solution() {
  for (var i = 1; i < num; i++) {
    var ans = 0;
    for (var j = 0; j < N; j++) {
      if (i & (1 << j)) {;
        ans += parseInt(data[j]);
      }
    }
    if (ans === S) {
      count++;
    }
  }
}

solution()
console.log(count);


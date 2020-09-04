/* 
  백준알고리즘 2630번 색종이 만들기
  https://www.acmicpc.net/problem/2630
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = Number(input.shift());
var map = [];
var blue = 0;
var white = 0;

while (input.length) {
  var arr = input.shift().split(' ').map(Number)
  map.push(arr)
}


function countPaper(i, j, n) {
  var c = true;
  var sum = map[i][j];
  if (n === 1) {
    if (sum === 1) blue += 1;
    if (sum === 0) white += 1;
  } else {

    for (var k = i; k < i + n; k++) {
      for (var l = j; l < j + n; l++) {
        if (sum !== map[k][l]) {
          c = false;
        }
      }
    }

    if (c) {
      if (sum === 1) blue += 1;
      if (sum === 0) white += 1;

    } else {
      var cnt = Math.floor(n / 2);
      countPaper(i, j, cnt);
      countPaper(i + cnt, j, cnt);
      countPaper(i, j + cnt, cnt);
      countPaper(i + cnt, j + cnt, cnt);
    }
  }
}

countPaper(0, 0, N);

console.log(white);
console.log(blue);
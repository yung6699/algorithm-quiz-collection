/* 
  백준 1021번 회전하는 큐
  https://www.acmicpc.net/problem/1021
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input.shift().split(' ');
var N = temp[0],num = temp[1];
var queue = [];
var count = 0;

for (var i = 1; i <= N; i++) {
  queue.push(i)
}

function solution(array) {
  var temp, n, j, mid = Math.floor(N / 2);
  n = parseInt(array[0]);
  j = queue.indexOf(n);

  while (array.length !== 0) {
    if (n === queue[0]) {
      queue.shift();
      array.shift();
      mid = Math.floor(queue.length / 2);
      n = parseInt(array[0]);
      j = queue.indexOf(n);
    } else if (mid >= j) {
      queue.push(queue.shift());
      count++;
    } else {
      queue.unshift(queue.pop());
      count++;
    }
  }
  console.log(count);
}

solution(input[0].split(' '));
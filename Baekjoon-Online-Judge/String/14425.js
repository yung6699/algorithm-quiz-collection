/* 
    백준 알고리즘 14425번 문자열 집합
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var arr = input.shift().split(' ').map(Number);
var N = arr[0], M = arr[1];
var cnt = 0;

var set = new Set();
while (N--) {
  set.add(input.shift())
}

while (M--) {
  if (set.has(input.shift()))
    cnt++;
}

console.log(cnt);


// 정규표현식 활용
// var str = '';
// for (var i = 0; i < N; i++) {
//   str += input[i] + ':';
// }

// for (var j = N; j < N + M; j++) {
//   var re = new RegExp(input[j] + ':', 'g');
//   if (str.match(re) !== null) {
//     cnt++;
//   }
// }
// console.log(cnt);
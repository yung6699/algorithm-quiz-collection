/* 
  백준 2108번 통계학
  https://www.acmicpc.net/problem/2108
*/

var input = require('fs').readFileSync('./dev/stdin').toString().split('\n');
var N = input.shift();
var array = [];
var sum = 0;
for (var i = 0; i < N; i++) {
  var temp = parseInt(input[i]);
  array.push(temp);
  sum += temp;
}


console.log(Math.round(sum / N));

array.sort(function (a, b) {
  return a - b;
});

var n = Math.floor(N / 2)
console.log(array[n]);

var counts = {};
for (var i = 0; i < array.length; i++) {
  var num = array[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var arr = [];
for (key in counts) {
  arr.push([key, counts[key]]);
}
// 빈도수로 우선 내림차순 정렬, 그리고 빈도수가 서로 같으면 값에 대한 오름차순 정렬
arr.sort(function (a, b) {
  return b[1] > a[1] ? true : parseInt(a[0]) > parseInt(b[0]);
})

if (arr.length > 1 && arr[0][1] === arr[1][1]) {
  console.log(parseInt(arr[1][0]));
} else {
  console.log(parseInt(arr[0][0]));
}

console.log(array[array.length - 1] - array[0]);
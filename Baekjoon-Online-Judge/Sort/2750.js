/* 
  백준 2750번 숫자 정렬
  https://www.acmicpc.net/problem/2750
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var N = input.shift();

var array = [];
for (var i = 0; i < N; i++) {
  array.push(parseInt(input[i]));
}

function quickSort(array, l, r) {
  var pivot = array[Math.floor((l + r) / 2)];
  var left = l;
  var right = r;

  while (left <= right) {

    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);

  return array;
}

console.log(quickSort(array, 0, array.length - 1).join('\n'))
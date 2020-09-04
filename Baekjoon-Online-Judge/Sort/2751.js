/* 
  백준 2751번 숫자 정렬2
  https://www.acmicpc.net/problem/2751
*/

var input = require('fs').readFileSync('./dev/stdin').toString().split('\n');
var N = input.shift();
var array = [];
for(var i = 0; i < N; i++){
  array.push(parseInt(input[i]));
}


function mergeSort(array) {
  return divide(array);
}

// 분할하는 함수
function divide(array) {
  var length = array.length;
  if (length <= 1) {
    return array;
  }
  var mid = Math.floor(length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid, length);
  return merge(divide(left), divide(right));
}

// 병합 함수
function merge(left, right) {
  var result = [],
    il = 0,
    ir = 0;

  while (il < left.length && ir < right.length) {
    (left[il] < right[ir])? result.push(left[il++]) : result.push(right[ir++]);
  }

  while (il < left.length) {
    result.push(left[il++]);
  }

  while (ir < right.length) {
    result.push(right[ir++]);
  }

  return result;
}

console.log(mergeSort(input).join('\n')); 

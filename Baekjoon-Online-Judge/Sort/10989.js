/* 
  백준 10989번 숫자 정렬 3
  https://www.acmicpc.net/problem/10989
*/

var array = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);
var N = array.shift();

function countingSort(arr){
  var count = {};
  var result = []

  for(var i = 0; i < arr.length; i++){
    count[arr[i]] = 0;
  }

  for(var i = 0; i < arr.length; i++){
    count[arr[i]]++;
  }

  for(var key in count){
    while(count[key]){
      result.push(key);
      count[key]--;
    }
  }
  return result;
}

console.log(countingSort(array).join('\n')); 

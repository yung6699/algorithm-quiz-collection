/* 
  백준 1472번 소트인사이드
  https://www.acmicpc.net/problem/1427
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('');
input.sort(function(a, b){return b - a});
console.log(parseInt(input.join('')));


console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').sort(function(a, b){return b - a}).join(''));
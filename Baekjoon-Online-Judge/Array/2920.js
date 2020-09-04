/* 
  백준알고리즘 2920번 음계
  https://www.acmicpc.net/problem/2920
*/

// var input = require('fs').readFileSync('/dev/stdin').toString();
// var arr = input.split(' ').map(function (elem) {
//   return Number(elem);
// });

var input = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ')
.map(function(v){return parseInt(v)}); 
var ascending = [1,2,3,4,5,6,7,8];
var descending = [8,7,6,5,4,3,2,1];
(input.join() === ascending.join()) ? console.log("ascending") : (input.join() === descending.join()) ? 
console.log("descending") : console.log("mixed");
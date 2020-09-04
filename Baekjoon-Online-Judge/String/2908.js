/* 
  백준알고리즘 2908번 상수
  https://www.acmicpc.net/problem/2908
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split(' ');

function solution(input){
  var num1 = numReverse(input[0]);
  var num2 = numReverse(input[1]);
  return (num1 >= num2)? num1 : num2;
}

function numReverse(num){
  var result = '';
  while(num > 0){
    result += ((num % 10) + '');
    num = Math.floor(num / 10);
  }
  return result*1;
}

console.log(solution(input));
/* 
  백준 알고리즘 1978번 소수 찾기
  어떠한 수가 주어졌을때 소수인지 찾는 알고리즘
  에라토스테네스 체
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input.shift();
var array = input[0].split(' ')
var count = 0;



function solution() {
  for (var i = 0; i < N; i++) {
    var isPrime = true;
    var num = Number(array[i]);
    
    if (num !== 1) {
      for (var j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        count++;
      } 
    }
  }
  console.log(count);
}

solution()

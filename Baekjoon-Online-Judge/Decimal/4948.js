/* 
  백준알고리즘 4948번 베르트랑 공준
  https://www.acmicpc.net/problem/4948
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var k = 0;

while(parseInt(input[k])){
  var n = parseInt(input[k]);
  var result = 0;
  var prime = [];

  for (var i = 2; i <= 2 * n; i++) {
    prime[i] = true;
  }

  for (var i = 2; i <= 2 * n; i++) {
    if (prime[i]) {
      for (var j = 2 * i; j <= 2 * n; j += i) {
        if (prime[j]) {
          prime[j] = false;
        }
      }
    }
  }

  for (var i = n+1; i <= 2 * n; i++) {
    if (prime[i]) {
      result++;
    }
  }

  console.log(result);
  k++;
}

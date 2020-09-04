/* 
  백준알고리즘 2596번 비밀편지
  https://www.acmicpc.net/problem/2596
*/

var input = require('fs').readFileSync('./dev/stdin').toString().split('\n');
var N = input[0]
var str = input[1];
var list = ['000000', '001111', '010011', '011100', '100110', '101001', '110101', '111010'];
var count = 0;
var ans = '';

function solution() {
  var i, j, k;

  for (i = 1; i <= N; i++) {
    for (j = 0; j < 8; j++) {
      count = 0; //틀린 문자 개수
      for (k = 0; k < 6; k++) {
        if (str[k + (i - 1) * 6] != list[j][k]) {
          count++;
        }
      }
      if (count < 2) {
        ans += String.fromCharCode(65 + j);
        break;
      }
    }
    if (j == 8) {
      ans = i;
      break;
    }
  }

  console.log(ans);
}

solution()
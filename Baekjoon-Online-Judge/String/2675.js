/* 
  문자열 반복
  https://www.acmicpc.net/problem/2675
*/



var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input.shift()

for (var k = 0; k < N; k++) {
  var printArr = "";
  var temp = input[k].split(' ');
  var n = Number(temp[0]);
  var str = temp[1];

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < n; j++) {
      printArr += str[i];
    }
  }

  console.log("%s",printArr);
}

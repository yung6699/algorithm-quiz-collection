/* 
  백준 알고리즘 1934번 최소공배수
  13421번도 똑같이 풀었다. 입력방식만 다르다.
*/


var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var N = input.shift();

function gcdlcm(a, b) {
    var temp = a % b;
    var mtp = a * b;

    while (temp > 0) {
        a = b;
        b = temp
        temp = a % b;
    }
    console.log( Math.floor(mtp / b));
}

for(var i = 0; i < N; i++){
  var temp = input[i].split(' ');
  gcdlcm(parseInt(temp[0]),parseInt(temp[1]));
}

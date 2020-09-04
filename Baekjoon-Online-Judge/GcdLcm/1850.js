
/* 
  백준 알고리즘 1850번 최대공약수
  풀이는 맞는데 타입 크기 지정을 할수 없어 틀린 것으로 나온다.
  node.js가 아닌 c++로 풀것
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split(' ');
var k = parseInt(input[0]), m = parseInt(input[1]);

function gcdlcm(a, b) {
    var temp = a % b;
    while (temp > 0) {
        a = b;
        b = temp
        temp = a % b;
    }

    return b;
}

function temp(v){
  var str = '';
  for(var i = 0; i< v; i++){
    str += 1;
  }
  console.log(parseInt(str)); 
}

temp(gcdlcm(k, m))



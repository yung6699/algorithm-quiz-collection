/* 
  백준 알고리즘 2941번 크로아티아 알파벳
  https://www.acmicpc.net/problem/2941
  lj, nj, dz= 
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString();
var cro = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}


function solution(input) {
  var str = input.trim();
  for(var i = 0; i < 8; i++){
    str = replaceAll(str, cro[i], ':');
  }
  console.log(str.length);
}

solution(input)
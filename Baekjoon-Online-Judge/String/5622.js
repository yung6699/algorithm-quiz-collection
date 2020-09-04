/* 
  백준알고리즘 5622번 다이얼
  https://www.acmicpc.net/problem/5622
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString();

function solution(input){

  var time = 0;
  for(var i = 0; i < input.length; i++){
    switch (input[i]) {
      case 'A':
      case 'B':
      case 'C':
        time += 3;
        break;
      case 'D':
      case 'E':
      case 'F':
        time += 4;
        break;
      case 'G':
      case 'H':
      case 'I':
        time += 5;
        break;
      case 'J':
      case 'K':
      case 'L':
        time += 6;
        break;
      case 'M':
      case 'N':
      case 'O':
        time += 7;
        break;
      case 'P':
      case 'Q':
      case 'R':
      case 'S':
        time += 8;
        break;
      case 'T':
      case 'U':
      case 'V':
        time += 9;
        break;
      case 'W':
      case 'X':
      case 'Y':
      case 'Z':
        time += 10;
        break;
    }
  } 
  console.log(time);
}

solution(input)
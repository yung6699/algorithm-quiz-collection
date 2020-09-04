/* 
  백준 알고리즘 2504번 괄호의 값
  https://www.acmicpc.net/problem/2504
*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');

function solution(str) {
  var stack = [];
  var check = 0;
  var result = 0;
  

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char === '(' || char === '[') {
      stack.push(char);
    } else {   

      if (char === ')') {
        if (stack[stack.length - 1] === '(') {
          stack.pop();
          stack.push(2);
        } else {
          check = stackInnerLoop(stack,'[','(',2);
        }

      } else { 
        if (stack[stack.length - 1] === '[') {
          stack.pop();
          stack.push(3);
        } else {
          check = stackInnerLoop(stack,'(','[',3);
        } 
      }
    }
  }


  console.log(check);
  if (check == -1) {
    return 0;
  } else{
    while (stack.length !== 0) {
      var M = stack.length -1;
      if (stack[M] === "(" || stack[M] === ")" || stack[M] === "["
          || stack[M] === "]") {
        return 0;
      }
      result += stack.pop();
    }
  
    return result;
  }
}


function stackInnerLoop(stack, s1, s2, value) {
    var result = 0;

    while (stack.length !== 0) {
        var top = stack[stack.length-1];

        if (top === s1) {
            return -1;
        } else if (top === s2) {
            stack.pop();
            result *= value;
            stack.push(result);
            break;
        } else {
            result += stack.pop();
        }
    }

    return result;
}

console.log(solution(input[0]));


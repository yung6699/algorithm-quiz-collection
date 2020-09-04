/* 
  백준 알고리즘 1874번 스택 수열
  https://www.acmicpc.net/problem/1874
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];

function stackSequence(){
  var arr = [];
  var result = [];
  var stack = [];
  var index = 0;

  for(var i = 0; i < N; i++){
    arr.push(parseInt(input[i+1]));
  }

  for(var i = 1; i <= N; i++){
    stack.push(i); 
    result.push('+');

    while(stack.length !== 0 && stack[stack.length-1] === arr[index]){
      index++;
      stack.pop();
      result.push('-');
    }
  }

  if(stack.length){
    console.log('NO');
  } else {
    console.log(result.join('\n'));
  }

}

stackSequence()
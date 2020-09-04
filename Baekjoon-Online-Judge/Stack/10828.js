/* 
    백준 알고리즘 10828번 스택
    https://www.acmicpc.net/problem/10828
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');

function Stack(){
  var items = [];
  var maxSize = -1;

  this.push = function(value){
    maxSize++;
    items[maxSize] = value;
  }

  this.size = function(){
    return items.length;
  }

  this.empty = function(){
    return (this.size() === 0) ? 1 : 0;
  }

  this.top =  function(){
    if(items[maxSize]){
      return items[maxSize]
    } else {
      return -1;
    }
  }
  this.pop = function(){
    if(maxSize !== -1 && this.size() !== 0){
      var temp = items[maxSize];
      items.splice(maxSize, 1);
      maxSize--;
      return temp;
    } else {
      return -1;
    }
  }
}

var N = input[0];
var stack = new Stack();

for(var i = 1; i <= N; i++){
  var temp = input[i].split(' ');
  switch(temp[0]){
    case 'push':
      stack.push(temp[1]);
      break;
    case 'top':
      console.log(parseInt(stack.top()));
      break;
    case 'size':
      console.log(parseInt(stack.size()));
      break;
    case 'empty':
      console.log(parseInt(stack.empty()));
      break;
    case 'pop':
      console.log(parseInt(stack.pop()));
      break;
  }
}
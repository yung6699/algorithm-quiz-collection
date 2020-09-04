/* 
  백준 알고리즘 10845번 큐

  push X: 정수 X를 큐에 넣는 연산이다.
  pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  size: 큐에 들어있는 정수의 개수를 출력한다.
  empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
  front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0]
input = input.slice(1);

function Queue(){
  var array = [];

  this.push = function(n){
    array.push(n);
  }

  this.pop = function(){
    var temp =  array.shift();
    return (temp)? temp : -1;
  }

  this.size = function(){
    return array.length;
  }

  this.empty = function(){
    return (this.size() === 0) ? 1 : 0
  }

  this.front = function(){
    return (this.size() === 0) ? -1 : array[0];
  }

  this.back = function(){
    return (this.size() === 0) ? -1 : array[this.size()-1];
  }
}


var queue = new Queue();

for(var i = 0; i < N; i++){
  var temp = input[i].split(' ');
  switch(temp[0]){
    case 'push':
      queue.push(temp[1]);
      break;
    case 'size':
      console.log(parseInt(queue.size()));
      break;
    case 'empty':
      console.log(parseInt(queue.empty()));
      break;
    case 'pop':
      console.log(parseInt(queue.pop()));
      break;
    case 'front':
      console.log(parseInt(queue.front()));
      break;
    case 'back':
      console.log(parseInt(queue.back()));
      break;
  }
}
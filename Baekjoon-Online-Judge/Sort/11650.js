/* 
  백준 11650 
  https://www.acmicpc.net/problem/11650
*/

var fs = require('fs');
var input = fs.readFileSync('./stdin').toString().split('\n');
var K = input.shift();
var arr = [];
while(input.length){
    arr.push(input.shift().split(' ').map(Number));
}

function solution(arr){
  arr.sort(function(a,b){
      return a[0] - b[0] || a[1] - b[1];
  })

  for(var i = 0; i < K; i++){
      console.log(arr[i][0]+" "+arr[i][1]);
  }

}

solution(arr);

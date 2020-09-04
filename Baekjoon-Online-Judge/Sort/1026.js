/* 
  백준 1026번 보물
    https://www.acmicpc.net/problem/1026

*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var K = input[0];
var arr1 = input[1].split(' ').map(Number);
var arr2 = input[2].split(' ').map(Number);

function solution(a, b){
    var sum = 0;
    a.sort(function(a,b){ return a - b;})
    b.sort(function(a,b){ return b - a;})
    for(var i = 0; i < 5; i++){
        sum += (a[i]*b[i])
    }
    return sum;
}

console.log(solution([1, 1 ,1, 6, 0], [2, 7, 8, 3, 1]));

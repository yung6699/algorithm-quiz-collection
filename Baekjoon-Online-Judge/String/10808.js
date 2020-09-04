/* 
    백준 10808번 문제 알파벳 개수 성공
*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split(' ');

function solution(input){
    var array = [];
    for(var i = 0; i < 26; i++){
        var result = input.match(new RegExp(String.fromCharCode(97+i), "g")); 
        result !== null ? array.push(result.length) : array.push(0);
    }
    console.log(array.join(' '));
}
 
 
solution('backjoon');

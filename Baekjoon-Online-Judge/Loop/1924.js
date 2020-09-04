/* 
  백준 1924번 2007년
  참고로 2007년에는 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일
  https://www.acmicpc.net/problem/1924
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var temp = input[0].split(' ');
var x = parseInt(temp[0]), y = parseInt(temp[1]);


function solution(x, y){
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var sum = 0;
  var temp = 0;

  if(x > 0 && x !== 1 ){
    for(var i = 0; i <= x - 2; i++){
      sum += month[i];
    }
  }

  sum += y;
  temp = sum % 7;
  console.log(day[temp]);
}


solution(x,y);
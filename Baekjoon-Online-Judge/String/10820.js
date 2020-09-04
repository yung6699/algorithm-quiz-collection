/* 
    백준 알고리즘 10820번 문자열 분석
*/

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

function solution(input) {
    var num = 0;
    var upper = 0;
    var lower = 0;
    var blank = 0;

    for (var i = 0, max = input.length; i < max; i++) {
        var temp = input[i];
        if ('A' <= temp && temp <= 'Z') {
            upper++;
        } else if ('a' <= temp && temp <= 'z') {
            lower++;
        } else if (temp == ' ') {
            blank++;
        } else if (temp >= 0 && temp <= 9) {
            num++;
        }
    }

    console.log(lower, upper, num, blank);
}


solution(input);

/* 
  백준알고리즘 10799q번 쇠막대기
  스택
  https://www.acmicpc.net/problem/10799
*/

var input = require('fs').readFileSync('./dev/stdin').toString().trim();

function solution(array) {
    var stack = []
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        // 여는 괄호면 스택에 넣는다.
        if (array[i] == '(') {
            stack.push(array[i])
        } else {
            //닫는 괄호면 이 괄호가 레이저인지, 파이프
            //끝인지 알아본다.
            stack.pop();

            // 레이저면
            if (array[i - 1] == '(') {
                result += stack.length;
            } else {
                // 파이프 끝이면
                result++;

            }
        }
    }

    console.log(result);
}

solution(input);

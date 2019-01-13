/* 
    K번째 수
    https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
*/

function solution(array, commands) {
    const answer = commands.map((command) => {
        let start = command[0] - 1;
        let end = command[1];
        let index = command[2] - 1;
        return array.slice(start, end).sort((a, b) => a - b)[index];
    })

    return answer;
}

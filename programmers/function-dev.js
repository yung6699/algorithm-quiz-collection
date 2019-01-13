/* 
    기능 개발
    https://programmers.co.kr/learn/courses/30/lessons/42586
*/

function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, index) => Math.ceil((100 - Number(progress)) / speeds[index]))
    let maxDay = days[0];

    for(let i = 0, j = 0; i < days.length; i++){
        if(days[i] <= maxDay){
            answer[j] += 1
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
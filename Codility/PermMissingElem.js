/* 
    Codility – PermMissingElem
*/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var N = A.length + 1;
    var sum = Math.floor(N * (N + 1) / 2);
    var result = A.reduce((accumulator, current) => {
        return accumulator - current;
    }, sum) // 초기값을 줄수 있다.
    return result
}


// console.log(solution([2, 3, 1, 5]));
console.log(solution([]));
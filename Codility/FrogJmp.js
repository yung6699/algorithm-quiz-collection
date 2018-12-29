/* 
    codility lesson 03
    FlogJmp
*/


function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let dis = Y - X
    return ((dis % D) === 0) ? Math.floor(dis/D) : Math.floor(dis/D) + 1;
}

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    var tmp = (Y - X) % D ? 1 : 0;
    return Math.floor((Y - X) / D) + tmp;
  }
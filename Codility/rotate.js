/* 
    codility lesson2 array
    rotate 문제
*/

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if(!A.length || A.length === K){
        return A;
    }
    
    while(K){
        A.unshift(A.pop())
        K-=1;
    }
    
    return A
}

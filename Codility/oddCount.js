function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var set = {};

    for (var i = 0; i < A.length; i++) {
        if (!set[A[i]]) {
            set[A[i]] = true;
            continue;
        }

        delete set[A[i]];
    }
    var keys = Object.keys(set);
    return Number(keys[0]);
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([1,2,1,2,3]));
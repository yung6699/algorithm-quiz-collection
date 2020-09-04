var n = 5
var arr1 = [9, 20, 28, 18, 11]
var arr2 = [30, 1, 21, 17, 28]

function solution(n, arr1, arr2) {
    return arr1
        .map((v, i) => addZero(n, (v | arr2[i]).toString(2))
            .replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    // return '0'.repeat(n - s.length) + s;
    return s.padStart(n, '0')
}

console.log(solution(n, arr1, arr2));
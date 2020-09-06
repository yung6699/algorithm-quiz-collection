function solution(N, K) {
  let answer = 0;
  while (true) {
    if ((N % K) !== 0) {
      N -= 1;
      answer += 1;
    }

    if ((N % K) === 0) {
      N = Math.floor(N / K);
      answer += 1;
    }

    if (N === 1) break;
  }

  return answer
}

console.log(solution(25, 5));
console.log(solution(9, 3));
console.log(solution(27, 3));
console.log(solution(25, 3));

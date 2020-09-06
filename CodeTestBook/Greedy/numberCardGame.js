function solution (procession) {
  let answer = 0;
  const N = procession.length;
  // const M = procession[0].length;
  const result = [];

  for (let i = 0; i < N; i++) {
    const num = Math.min(...procession[i]);
    result.push(num);
  }

  answer = Math.max(...result);
  return answer;
}

console.log(solution([[3, 1, 2], [4, 1, 4], [2, 2, 2]]));
console.log(solution([[7, 3, 1, 8], [3, 3, 3, 4]]));

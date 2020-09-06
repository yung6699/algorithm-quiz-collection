function solution (m, k, numbers) {
  let answer = 0;
  numbers.sort((a, b) => a - b);
  const first = numbers[numbers.length - 1];
  const second = numbers[numbers.length - 2];

  while(m > 0) {
    for (let i = 0; i < k; i++) {
      if (m === 0) break;
      answer += first;
      m -= 1;
    }

    if (m === 0) break;
    answer += second;
    m -= 1;
  }

  return answer;
}

function solution02 (m, k, numbers) {
  let answer = 0;
  numbers.sort((a, b) => a - b);
  const first = numbers[numbers.length - 1];
  const second = numbers[numbers.length - 2];
  let count = Math.floor(m / (k + 1)) * k;
  count += m % (k + 1);
  answer += count * first;
  answer += (m - count) * second;
  return answer;
}

console.log(solution(8, 3, [2, 4, 5, 4, 6]));
console.log(solution(7, 2, [3, 4, 3, 4, 3]));

console.log(solution02(8, 3, [2, 4, 5, 4, 6]));
console.log(solution02(7, 2, [3, 4, 3, 4, 3]));

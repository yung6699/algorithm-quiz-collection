
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function search(idx , val) {
    if(idx < length) {
      search(idx + 1, val + numbers[idx]);
      search(idx + 1, val - numbers[idx]);
    } else {
      if(val === target) answer++;
    }
  }

  search(0, 0);
  return answer;
}


console.log(solution([1, 1, 1, 1, 1], 3));

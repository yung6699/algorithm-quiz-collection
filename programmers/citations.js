function solution(citations) {
  var answer = 0;
  const _citations = [ ...citations ];
  _citations.sort((a, b) => b - a);
  while (answer < _citations.length) {
    if (_citations[answer] <= answer) break;
    answer++;
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));

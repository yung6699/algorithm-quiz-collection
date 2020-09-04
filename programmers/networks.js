function solution(n, computers) {
  var answer = 0;
  const visited = {};

  function findNetwork (idx) {
    visited[idx] = true;
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      if (computers[idx][i] === 1) {
        findNetwork(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      findNetwork(i);
      answer++;
    }
  }

  return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))
console.log(solution(3, [[0, 0, 0], [0, 0, 0], [0, 0, 0]]))
console.log(solution(3, [[1, 0, 0], [0, 0, 0], [0, 0, 0]]))

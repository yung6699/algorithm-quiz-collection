function solution(graph) {
  let answer = 0;
  const n =  graph.length;
  const m =  graph[0].length;

  function dfs (x, y) {
    if (x <= -1 || y <= -1 || x >= n || y >= m) return false;
    if (graph[x][y] === 0) {
      graph[x][y] = '*';
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }
    return false;
  }
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (dfs(i, j) === true) answer++;
    }
  }

  return answer;
}

const graph = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
];

console.log(solution(graph))

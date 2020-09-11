function solution (graph) {
  let answer = 0;
  const visited = new Array(graph.length).fill(false);

  function dfs(_graph, v, _visited) {
    _visited[v] = true;
    answer += 1;
    console.log('방문', v);
    for (let idx of  _graph[v]) {
      if (!_visited[idx]) dfs(_graph, idx, _visited);
    }
  }

  dfs(graph, 0, visited);
  return answer;
}

const graph = [
    [1, 2, 7],
    [0, 6],
    [0, 3, 4],
    [2, 4],
    [2, 3],
    [6],
    [1, 5, 7],
    [0, 6]
];

console.log(solution(graph));

function solution (graph) {
  let answer = 0;
  const visited = new Array(graph.length).fill(false);
  const queue = [];
  const start = 0;
  queue.push(start);
  visited[start] = true;


  while(queue.length) {
    const value = queue.shift();
    console.log('방문', value);
    answer += 1;

    for (let idx of graph[value]) {
      if (!visited[idx]) {
        queue.push(idx);
        visited[idx] = true;
      }
    }
  }

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

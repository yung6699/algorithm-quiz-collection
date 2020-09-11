function solution(map) {
  const n = map.length;
  const m = map[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [];
  queue.push([0, 0]);

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (map[nx][ny] === 0) continue;
      if(map[nx][ny] === 1) {
        map[nx][ny] = map[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return map[n -1][m - 1];
}

const map = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
];

console.log(solution(map));


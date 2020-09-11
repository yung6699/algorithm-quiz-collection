function solution (n, plans) {
  let x = 1;
  let y = 1;

  const dx = [ 0, 0, -1, 1];
  const dy = [ -1, 1, 0, 0 ];
  const moveTypes = [ 'L', 'R', 'U', 'D' ];


  for (let i = 0; i < plans.length; i++) {
    const plan = plans[i];
    let nx;
    let ny;

    for (let j = 0; j < moveTypes.length; j++) {
        if (moveTypes[j] === plan) {
          nx = x + dx[j];
          ny = y + dy[j];
        }
    }

    if (nx < 1 || ny < 1 || ny > n || nx > n) continue;
    x = nx;
    y = ny;

    console.log(nx, ny)
  }

  return [ x, y];
}

console.log(solution(4, ['R', 'R', 'R', 'U', 'D', 'D']));

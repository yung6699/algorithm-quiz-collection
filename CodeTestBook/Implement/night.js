function solution (position) {
  let answer = 0;
  const N = 8;
  const [ row, column ] = position.split('');
  const rowArr = ['a', 'b', 'c', 'd', 'd', 'f', 'g', 'h'];
  const steps = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];

  for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      let nextRow = (rowArr.indexOf(row) + 1) + step[0];
      let nextColumn = Number(column) + step[1];
      if (nextRow < 1 || nextColumn < 1 || nextRow > N || nextColumn > N) continue;
      answer++;
  }
  return answer
}

console.log(solution('a1'));
console.log(solution('c2'));

function solution(board, moves) {
  let answer = 0;
  const basket = [];

  moves.forEach(move => {
    const idx = move - 1;
    const top = basket[basket.length - 1] || null;

    for(let i = 0; i < board.length; i++) {
      const doll = board[i][idx];
      const sameDoll = top === doll;

      if (doll > 0 && sameDoll) {
        answer += 2;
        board[i][idx] = 0;
        basket.pop();
        break;
      }

      if (doll > 0 && !sameDoll) {
        board[i][idx] = 0;
        basket.push(doll);
        break;
      }
    }
  })
  return answer;
}

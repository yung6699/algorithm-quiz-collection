function solution(N) {
  let answer = 0;
  const second = N * 3600 + 60 * 59 + 59;
  for (let i = 0; i <= second; i++) {
    let temp = i;
    const hour = String(Math.floor(temp / 3600)).padStart(2, '0');
    temp = temp % 3600;
    const minute =  String(Math.floor(temp / 60)).padStart(2, '0');
    temp = String(temp % 60);
    const _second = String(temp).padStart(2, '0');
    const time = `${hour}${minute}${_second}`;
    if (time.includes('3')) answer++;
  }

  return answer;
}

console.log(solution(5))

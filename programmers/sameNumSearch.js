function solution(arr) {
  var answer = [arr.shift()];
  arr.forEach(value => {
    let now = answer[answer.length - 1];
    if (now !== value) answer.push(value);
  })

  return answer;
}

/**
 *  가장 큰 수
 *  https://programmers.co.kr/learn/courses/30/lessons/42746
 * */


function solution(numbers) {
  var answer = numbers.map(v => v + '')
    .sort((a, b) => {
      console.log(a, b);
      return (b + a) * 1 - (a + b) * 1
    })
    .join('');
  return answer[0] === '0' ? '0' : answer; //배열의 모든 값이 0이면 00000.. 이 아닌 그냥 0
}

var numbers= [3, 30, 34, 5, 9]
console.log( solution(numbers) )

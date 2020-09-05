function solution(numbers) {
  var answer = 0;
  const results = new Set();
  const arr = [ ...numbers ]

  function makeNum (num, arr) {
    for (let i = 0; i < arr.length; i++) {
      let _num = num;
      _num += arr[i]
      results.add(Number(_num));

      const temp = [...arr]
      temp.splice(i, 1);
      if (temp.length === 0) continue;
      makeNum(_num, temp)
    }
  }

  makeNum('', arr)

  const resultsArr = [...results];
  resultsArr.forEach((n) => {
    const number = Number(n);
    if (isPrimeNumber(number)) answer++;
  });

  return answer;
}

function isPrimeNumber(number) {
  const notPrime = [0, 1];
  if (notPrime.includes(number)) return false;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function solution(participant, completion) {
  const map = new Map();

  for (const person of completion) {
    const count = map.get(person);
    map.set(person, count ? count + 1 : 1);
  }

  for (const person of participant) {
    const count = map.get(person);
    if (!count) return person;
    else map.set(person, count - 1);
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']));
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));


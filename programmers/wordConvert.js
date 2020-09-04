// function solution(begin, target, words) {
//   if(!words.includes(target)) return 0;
//   const set = new Set(words);
//   const queue = []
//   let count = 0
//   queue.push([begin, 1]);
//   while (queue.length) {
//     console.log('queue', queue)
//
//     const [cur, depth] = queue.shift();
//     for (let i = 0; i < begin.length; i++ ) {
//       for (const c of 'abcdefghijklmnopqrstuvwxyz'){
//         if (c === cur[i]) continue;
//         const newString = cur.slice(0, i) + c + cur.slice(i+1);
//         if (newString === target) return depth;
//         if (set.has(newString)) {
//           set.delete(newString);
//           queue.push([newString, depth+1]);
//         }
//       }
//     }
//   }
//   return 0
// }

function solution(begin, target, words) {
  let answer = 0;
  const queue = [[begin, 1]];
  const eng = 'abcdefghijklmnopqrstuvwxyz';
  if (!words.includes(target)) return answer;

  while(queue.length) {
    let [word, depth] = queue.shift();
    for (let i = 0; i < begin.length; i++) {
      for (let alphabet of eng) {
        const arr = word.split('');
        if (alphabet === arr[i]) continue;
        arr[i] = alphabet;
        const _word = arr.join('');
        if (_word === target) return depth;
        if (words.includes(_word)) {
          words = words.filter(word => word !== _word);
          queue.push([_word, depth + 1]);
        }
      }
    }
  }
  return 0;
}

console.log(solution('hit', 'cog'	,['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
console.log(solution('hit', 'cog'	,['hot', 'dot', 'dog', 'lot', 'log']))

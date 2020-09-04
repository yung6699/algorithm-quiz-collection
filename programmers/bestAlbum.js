function solution(genres, plays) {
  var answer = [];
  const countRecords = {};
  const hashPlays = [];

  plays.forEach((play, idx) => {
    const genre = genres[idx];
    const countRecord = countRecords[genre];
    if (!countRecord) countRecords[genre] = 0;
    countRecords[genre] += play;
    hashPlays[idx] = [idx, play, genre];
  });

  const sortedGenre = Object.entries(countRecords)
      .sort((a, b) => b[1] - a[1])
      .map(record => record[0]);


  sortedGenre.forEach(genre => {
    const items = hashPlays.filter(play => play[2] === genre);
    items.sort((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      return a[0] - b[0];
    })
    const result = items.slice(0, 2).map(item => item[0]);
    answer = [...answer, ...result];
  })


  return answer;
}

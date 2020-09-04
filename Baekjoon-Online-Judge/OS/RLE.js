/* 
  RLE(런랭스) 알고리즘
*/

var input = ['AAAAAADDC', 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW','ABCD'];

function solution(str) {
  var count = 1;
  var cur = '';
  var result = '';

  for (var i = 1, max = str.length; i < max; i++) {
      cur = str[i];
      if (str[i-1] === cur) {
        count++;
      } else {
        result += ( str[i-1] + count);
        count = 1;
      }
  }
  result += (cur + count)
  console.log(result);
}

solution(input[0])
solution(input[1])
solution(input[2])
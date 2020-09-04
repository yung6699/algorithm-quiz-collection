/* 
  백준 1181번 단어 정렬
  중복된 값은 다시 배열에 넣지 않는다.
  우선 길이 순으로 정렬 후, 같은 길이인 경우 사전순으로 정렬한다.
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var array = [];

for(var i = 1; i <= input[0]; i++){
  if(array.indexOf(input[i]) === -1){
    array.push(input[i]);
  }
}

function solution(N, array){
  array.sort(function(a,b){
    var a1 = a.length, b1 = b.length;
    return (a1 < b1) ? -1 : (a1 > b1) ? 1 : (a < b) ?  -1 : 1;
  })

  console.log(array.join('\n'));

}

solution(N, array)

// 2번째 풀이, 더 간단하다. localeCompare 함수 --> 사전순으로 정렬
array = array.sort(function(x,y){
  return x.length-y.length || x.localeCompare(y)
});
console.log(array.join('\n'));



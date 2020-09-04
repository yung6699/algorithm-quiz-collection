/* 
  백준알고리즘 1890번 점프
  https://www.acmicpc.net/problem/1890

  dp와 DFS를 둘다 사용해야 시간초과가 안난다.
  일단은 그냥 DFS로만 풀었다.
*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var N = Number(input.shift());
var map = [];
var cnt = 0


for (var i = 0; i < N; i++) {
  var arr = input.shift().split(' ').map(Number);
  map.push(arr);
}

function dfs(x, y) {

  if (map[x][y] === 0) {
    cnt += 1
    return;
  }

  var n = map[x][y]
  var visitX = n + x;
  var visitY = n + y;

  if (visitX >= 0 && visitX < N) {
    dfs(visitX, y)
  }
  
  if (visitY >= 0 && visitY < N) {
    dfs(x, visitY)
  }

}

dfs(0, 0);
console.log(cnt);
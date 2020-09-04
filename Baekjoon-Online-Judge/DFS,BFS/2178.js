/* 
  백준 알고리즘 2178번 미로찾기
  https://www.acmicpc.net/problem/2178
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input.shift().split(' ');
var n = temp[0];
var m = temp[1];

var map = [];
var visit = [];

var dx = [-1, 1, 0, 0];
var dy = [0, 0, -1, 1];

for (var i = 0; i < n; i++) {
  map.push(input[i].split(''));
  visit.push([]);
}

for (var i = 0; i < n; i++) {
  for (var j = 0; j < m; j++) {
    visit[i][j] = false;
  }
}


function bfs() {

  var queue = [];
  var result;

  queue.push([0, 0])
  visit[0][0] = true;

  while (queue.length) {

    var temp = queue.shift();
    var x = temp[0];
    var y = temp[1];
    result = map[x][y];

    if (x == n - 1 && y == m - 1) {
      console.log(result);
      return;
    }

    for (var j = 0; j < 4; j++) {
      var nx = x + dx[j];
      var ny = y + dy[j];
      
      if (nx >= 0 && ny >= 0 && nx < n && ny < m &&
        map[nx][ny] === '1' && !visit[nx][ny]) {
        queue.push([nx, ny])
        map[nx][ny] = parseInt(map[x][y]) + 1;
        visit[nx][ny] = true;
      }
    }
  }
}

bfs(0, 0);

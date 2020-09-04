/* 
  백준알고리즘 2638번 치즈
  https://www.acmicpc.net/problem/2638
  DFS, BFS 둘다 가능하다.
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input.shift().split(' ').map(Number);
var X = temp[0]; // X
var Y = temp[1]; // Y

var map = [];
var dx = [-1, 1, 0, 0];
var dy = [0, 0, -1, 1];
var cnt = 0;

for (var i = 0; i < X; i++) {
  map.push(input[i].split(' ').map(Number));
}

function bfs() {

  cnt++;
  var queue = [];
  queue.push([0, 0])

  map[0][0] = -1;

  while (queue.length !== 0) {

    var temp = queue.shift();
    var x = temp[0];
    var y = temp[1];

    for (var z = 0; z < 4; z++) {
      var nx = x + dx[z];
      var ny = y + dy[z];
      if (nx >= 0 && nx < X && ny >= 0 && ny < Y) {
        if (map[nx][ny] == 0) {
          map[nx][ny] = -1;
          queue.push([nx, ny]);
        } else if (map[nx][ny] > 0) {
          map[nx][ny] += 1;
        }
      }
    }
  }

  for (var i = 0; i < X; i++) {
    for (var j = 0; j < Y; j++) {
      if (map[i][j] === -1 || map[i][j] >= 3) {
        map[i][j] = 0;
      } else if (map[i][j] >= 1 && map[i][j] < 3) {
        map[i][j] = 1;
      }
    }
  }
}


function check() {
  var num = 0;
  for (var i = 0; i < X; i++) {
    for (var j = 0; j < Y; j++) {
      if (map[i][j] === 1) {
        num++;
      }
    }
  }
  return num;
}

while (check() > 0) {
  bfs();
}


console.log(cnt);
/* 
  백준 알고리즘 3184번 양
  https://www.acmicpc.net/problem/3184
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input.shift().split(' ');
var R = parseInt(temp[0]);
var C = parseInt(temp[1]);

var map = [];
var visit = [];

var dx = [-1, 1, 0, 0];
var dy = [0, 0, -1, 1];

var allWolf = 0;
var allSheep = 0;

for (var i = 0; i < input.length; i++) {
  map.push(input[i].split(''));
  visit.push([]);
}

for (var i = 0; i < R; i++) {
  for (var j = 0; j < C; j++) {
    visit[i][j] = false;
  }
}



function bfs(i, j) {
  var queue = [];
  var wolf = 0;
  var sheep = 0;

  if (visit[i][j] === false) {
    queue.push([i, j])
    visit[i][j] = true;

    while (queue.length !== 0) {

      var temp = queue.shift();
      var x = temp[0];
      var y = temp[1];

      if (map[x][y] == 'o') {
        sheep++;
      } else if (map[x][y] == 'v') {
        wolf++;
      }

      for (var z = 0; z < 4; z++) {
        var nx = x + dx[z];
        var ny = y + dy[z];
        if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
          if (visit[nx][ny] !== true && map[nx][ny] !== '#') {
            queue.push([nx, ny]);
            visit[nx][ny] = true;
          }
        }
      }
    }

    if (sheep > wolf) {
      allSheep += sheep;
    } else {
      allWolf += wolf;
    }
  }
}


for (var i = 0; i < R; i++) {
  for (var j = 0; j < C; j++) {
    if (visit[i][j] !== true && map[i][j] !== '#') {
      bfs(i, j)
    }
  }
}

console.log(allSheep, allWolf);
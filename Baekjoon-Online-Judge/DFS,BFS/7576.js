/* 
  백준알고리즘 7576번 토마토
  https://www.acmicpc.net/problem/7576
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input.shift().split(' ');
var Y = parseInt(temp[0]); // Y
var X = parseInt(temp[1]); // X
var map = [];
var dx = [-1, 1, 0, 0];
var dy = [0, 0, -1, 1];
var ans = 0;

for (var i = 0; i < X; i++) {
  map.push(input[i].split(' '));
}

function bfs() {
  var queue = [];

  for (var x = 0; x < X; x++) {
    for (var y = 0; y < Y; y++) {
      if (parseInt(map[x][y]) === 1) { //매번 익은 애들들 큐에 저장
        queue.push([x, y])
      }
    }
  }


  while (queue.length !== 0) {

    var temp = queue.shift();
    var x = temp[0];
    var y = temp[1];
    
    ans = map[x][y];

    for (var z = 0; z < 4; z++) {
      var nx = x + dx[z];
      var ny = y + dy[z];

      if (nx >= 0 && nx < X && ny >= 0 && ny < Y) {
        if (parseInt(map[nx][ny]) === 0) {
          queue.push([nx, ny]);
          map[nx][ny] = parseInt(map[x][y]) + 1; 
        }
      }
    }
  }
}

bfs();

for (var x = 0; x < X; x++) {
  for (var y = 0; y < Y; y++) {
    if (map[x][y] == 0) ans = 0;
  }
}

console.log(ans - 1);
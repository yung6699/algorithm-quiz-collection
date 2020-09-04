/* 
  백준 알고리즘 2667번 단지번호 붙이기
  https://www.acmicpc.net/problem/2667
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var N = input.shift();

var map = [];
var visit = [];
var list = [];

var dx = [-1, 1, 0, 0];
var dy = [0, 0, -1, 1];


for (var i = 0; i < N; i++) {
  map.push(input[i].split(''));
  visit.push([]);
}

for (var i = 0; i < N; i++) {
  for (var j = 0; j < N; j++) {
    visit[i][j] = false;
  }
}

function bfs(i, j) {
  var queue = [];
  var count = 0;

  if (visit[i][j] === false) {
    queue.push([i, j])
    visit[i][j] = true;

    while (queue.length) {

      var temp = queue.shift();
      count++;
      var x = temp[0];
      var y = temp[1];

      for (var z = 0; z < 4; z++) {

        var nx = x + dx[z];
        var ny = y + dy[z];

        if (nx >= 0 && nx < N && ny >= 0 && ny < N && visit[nx][ny] === false && parseInt(map[nx][ny]) === 1) {
          queue.push([nx, ny]);
          visit[nx][ny] = true;
        }
      }
    }
    list.push(count)
  }

}

for (var i = 0; i < N; i++) {
  for (var j = 0; j < N; j++) {
    if (parseInt(map[i][j]) === 1) {
      bfs(i, j);
    }
  }
}

var arr = list.sort(function(a,b){
  return a - b;
});

console.log(arr.length);
for(var i=0; i < arr.length; i++){
  console.log(arr[i]);
}


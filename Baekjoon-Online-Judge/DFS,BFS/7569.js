/* 
  백준알고리즘 7569번 토마토 2
  https://www.acmicpc.net/problem/7569

  // 기존 토마토 문제 7576번 코드에 z축 코드를 추가하면 된다.
  // node.js로 제출하면 시간초과 나온다.
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input.shift().split(' ');

var Z = parseInt(temp[2]) //  위
var X = parseInt(temp[1]); // 행
var Y = parseInt(temp[0]); // 열

var map = [];
var dx = [-1, 1, 0, 0, 0, 0];
var dy = [0, 0, -1, 1, 0 ,0];
var dz = [0, 0, 0, 0, -1, 1];
var ans = 0;

for(var z = 0; z < Z; z++){
   var arr = []
  for(var j = (X*z); j < (X * z + X); j++){
    arr.push(input[j].split(' '));
  }
  map.push(arr);
}


function bfs() {

  var queue = [];
  
  for(var z = 0; z < Z; z++){
    for (var x = 0; x < X; x++) {
      for (var y = 0; y < Y; y++) {
        if (map[z][x][y] == 1) { //매번 익은 애들들 큐에 저장
          queue.push([z,x,y]);
        }
      }
    }
  }


  while (queue.length !== 0) {

    var temp = queue.shift();
    var z = temp[0];
    var x = temp[1];
    var y = temp[2];

    ans = map[z][x][y];


    for (var j = 0; j < 6; j++) {
      
      var nz = z + dz[j];
      var nx = x + dx[j];
      var ny = y + dy[j];

      if (nz >= 0 && nz < Z && nx >= 0 && nx < X 
        && ny >= 0 && ny < Y) {
        if (parseInt(map[nz][nx][ny]) === 0) {
          queue.push([nz, nx, ny]);
          map[nz][nx][ny] = parseInt(map[z][x][y]) + 1;
        }
      }
    }
  }
}

bfs();

for(var z = 0; z < Z; z++){
  for (var x = 0; x < X; x++) {
    for (var y = 0; y < Y; y++){
      if (map[z][x][y] == 0) ans = 0;
    }
  }
}     

console.log(ans - 1);
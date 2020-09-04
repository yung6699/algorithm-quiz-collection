/* 
  백준알고리즘 1012번 유기농 배추
  https://www.acmicpc.net/problem/1012

  입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 
  그 다음 줄부터 각각의 테스트 케이스에 대해 첫째 줄에는 배추를 심은 배추밭의 가로길이 M(1 ≤ M ≤ 50)과 세로길이 N(1 ≤ N ≤ 50), 
  그리고 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)이 주어진다. 그 다음 K줄에는 배추의 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)가 주어진다.

*/


var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

var T = parseInt(input.shift()); // 테스트 케이스 수
var M, N, K;
var list;
var map;
var visited;

var dx = [-1, 1, 0, 0];
var dy = [0, 0, -1, 1];

function solution(testCase) {

  M = testCase[0], N = testCase[1], K = testCase[2];
  map = [];
  visited = [];
  list = [];

  for (var i = 0; i < M; i++) {
    var arr = [];
    var arr2 = [];
    for (var j = 0; j < N; j++) {
      arr.push(0);
      arr2.push(false);
    }
    visited.push(arr2)
    map.push(arr);
  }


  for (var i = 0; i < K; i++) {
    var temp = input.shift().split(' ').map(function (v) {
      return parseInt(v)
    });
    map[temp[0]][temp[1]] = 1;
  }

  for (var i = 0; i < M; i++) {
    for (var j = 0; j < N; j++) {
      if (map[i][j] === 1) {
        bfs(i, j);
      }
    }
  }

  console.log(list.length);
}

function bfs(i, j) {
  var queue = [];
  var count = 0;

  if (visited[i][j] === false) {
    queue.push([i, j])
    visited[i][j] = true;

    while (queue.length) {

      var temp = queue.shift();
      count++;
      var x = temp[0];
      var y = temp[1];

      for (var z = 0; z < 4; z++) {

        var nx = x + dx[z];
        var ny = y + dy[z];

        if (nx >= 0 && nx < M && ny >= 0 && ny < N && visited[nx][ny] === false && map[nx][ny] === 1) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
    list.push(count)
  }
}

for (var z = 0; z < T; z++) {
  solution(input.shift().split(' ').map(function (v) {
    return parseInt(v)
  }))
}
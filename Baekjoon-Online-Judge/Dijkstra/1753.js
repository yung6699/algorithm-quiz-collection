/* 
  백준알고리즘 1753번 최단거리 구하기

  * 다익스트라 알고리즘
  대표적인 최단 경로 탐색 알고리즘이다.
  다익스트라 알고리즘은 특정한 하나의 정점에서 다른 모든 정점으로 가는 최단 경로를 알려준다.
  
*/

var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
var arr = input.shift().split(' ').map(Number); // 정점의 개수, 간선의 개수
var N = arr[0]; // 정점의 개수
var M = arr[1]; // 간선의 개수
var start = Number(input.shift());

var map = [];
var dist = []; // 거리 저장 , 인덱스 1부터 시작

for (var i = 0; i <= N; i++) {
  map.push([]);
}

for (var i = 1; i <= N; i++) {
  dist[i] = Infinity;
}

for (var i = 0; i < M; i++) {
  var temp = input[i].split(' ').map(Number);
  map[temp[0]].push([temp[1], temp[2]]);
}

function dijkstra(start) {
  dist[start] = 0;
  var quque = [];
  quque.push([start, 0]);

  while (quque.length) {

    var temp = quque.shift(); // 시작점, 거리
    var current = temp[0];
    var distance = temp[1];

    if (dist[current] < distance) continue;

    for (var i = 0; i < map[current].length; i++) {

      var next = map[current][i][0];
      var nextDistance = distance + map[current][i][1];

      if (nextDistance < dist[next]) {
        dist[next] = nextDistance;
        quque.push([next, nextDistance]);
      }

    }
  }
}

dijkstra(start)
dist.shift();
for (var i = 0; i < dist.length; i++) {
  if (dist[i] === Infinity) {
    dist[i] = 'INF'
  }
  console.log(dist[i]);
}
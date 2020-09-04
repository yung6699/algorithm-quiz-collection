/* 
  백준알고리즘 1238번 파티
  https://www.acmicpc.net/problem/1238

  * 다익스트라 알고리즘
  대표적인 최단 경로 탐색 알고리즘이다.
  다익스트라 알고리즘은 특정한 하나의 정점에서 다른 모든 정점으로 가는 최단 경로를 알려준다.
  
  * 플로이드 와샬로 풀면 좀더 쉽다.
*/

var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
var arr = input.shift().split(' ').map(Number);
var N = arr[0], M = arr[1], X = arr[2];
var map = [];

for (var i = 0; i <= N; i++) {
  map.push([]);
}

for (var i = 0; i < M; i++) {
  var temp = input[i].split(' ').map(Number);
  map[temp[0]].push([temp[1], temp[2]]);
}

function dijkstra(start) {

  var dist = [];
  for (var i = 1; i <= N; i++) {
    dist[i] = Infinity;
  }
  
  dist[start] = 0;

  var quque = [];
  quque.push([start, 0]);

  while (quque.length) {

    var temp = quque.shift();
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

  return dist;
}


var temp = [];
var result = [];
for(var i = 1; i <= N; i++){
  var arr = dijkstra(i);
  temp[i] = arr;
}


for(var i = 1; i <= N; i++){
  if(i !== X){
    result.push(temp[i][X] + temp[X][i]);
  }
}

var max = result.reduce(function(pre, cur){
  return pre > cur ? pre : cur
});

console.log(max);
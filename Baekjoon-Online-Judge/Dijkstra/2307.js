/*
  백준 알고리즘 2307 도로검문
  https://www.acmicpc.net/problem/2307
*/

var input = require('fs').readFileSync('./dev/stdin') .toString().trim().split('\n');
var tmp = input.shift().split(' ').map(Number);
var N = tmp[0], M = tmp[1];
var edges = [];
var graph = [];
var cnt = -1;
var result = 0;

for (var i = 0; i <= N; i++) {
  graph.push([]);
}

for (var i = 0; i < M; i++) {
  var arr = input.shift().split(' ').map(Number);
  graph[arr[0]].push([arr[1], arr[2]]);
  graph[arr[1]].push([arr[0], arr[2]]);
  edges.push([arr[0], arr[1]])
}

function dijkstra(start, cnt) {
  var dist = [];
  for (var i = 1; i <= N; i++) {
    dist[i] = Infinity;
  }

  dist[start] = 0;
  var queue = [], rmEdge;
  queue.push([start, 0]);


  if (cnt !== -1) {
    rmEdge = edges[cnt];
  }

  while (queue.length) {

    var temp = queue.shift(); // 도착점, 거리
    var current = temp[0]; // 도착점
    var distance = temp[1]; // 거리
    
    // 최단거리가 아닌 경우 스킵
    if (dist[current] < distance)
      continue;

    for (var i = 0; i < graph[current].length; i++) {

      var next = graph[current][i][0];
    
      if(cnt !== -1 && current == rmEdge[0] && next == rmEdge[1]){continue;}
      if(cnt !== -1 && current == rmEdge[1] && next == rmEdge[0]) {continue;}
      
      var nextDistance = distance + graph[current][i][1];

      if (nextDistance < dist[next]) {
        dist[next] = nextDistance;
        queue.push([next, nextDistance]);
      }

    }
  }
  return (dist[N] === Infinity) ? -1 : dist[N];
}


var distance = dijkstra(1, -1);
for(var j = 0; j < edges.length; j++){
  var tmp = dijkstra(1, j)
  if(tmp === -1){
    result = -1;
    break;
  }
  result = Math.max(result, tmp - distance)
}

console.log(result);





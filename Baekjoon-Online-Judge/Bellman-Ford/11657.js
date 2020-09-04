/* 
  백준알고리즘 11657번 타임머신
  https://www.acmicpc.net/problem/11657

  밸만-포드 알고리즘
*/

var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input.shift().split(' ').map(Number);
var N = temp[0], M = temp[1];
var graph = [];
var dist = [];

for (var i = 0; i <= N; i++) {
  graph.push([]);
  dist[i] = Infinity;
}

for (var i = 0; i < M; i++) {
  var temp = input[i].split(' ').map(Number);
  graph[temp[0]].push([temp[1], temp[2]]);
}

function bellmanFord(start) {

  dist[start] = 0;
  var update = false;

  for (var i = 1; i <= N; i++) {
    for (var z = 1; z <= N; z++) {
      for (var j = 0; j < graph[z].length; j++) {
        var current = z;
        var next = graph[current][j][0];
        var nextDistance = graph[current][j][1];
        if (dist[next] > dist[current] + nextDistance) {
          dist[next] = dist[current] + nextDistance;
          if (i === N) update = true; // 사이클 여부 판단
        }
      }
    }
  }

  if (update) {
    console.log(-1);
  } else {
    dist.shift();
    for (var i = 1; i < dist.length; i++) {
      (dist[i] != Infinity) ? console.log(dist[i]): console.log(-1);
    }
  }

}


bellmanFord(1)
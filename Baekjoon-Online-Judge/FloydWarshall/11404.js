/* 

  백준 알고리즘 11404번 플로이드
  https://www.acmicpc.net/problem/11404

  플로이드 와샬 알고리즘
  다익스트라가 하나의 정점에서 다른 모든 정점으로의 최단경로를 구하는 알고리즘이면
  플로이드 와샬은 모든정점에서 모든정점으로의 최단경로를 구하는 알고리즘이다.
*/



var input = require('fs').readFileSync('./dev/stdin').toString().split('\n');
var N = Number(input.shift());
var M = Number(input.shift());

var graph = []
var dist = [];

for (var i = 0; i <= N; i++) {
  var arr = [];
  for (var j = 1; j <= N; j++) {
    arr[j] = Infinity;
  }
  dist.push(arr);
}

for (var i = 0; i <= N; i++) {
  graph.push([])
}


for (var i = 0; i < M; i++) {
  var tmp = input[i].split(' ').map(Number);
  graph[tmp[0]].push([tmp[1], tmp[2]]);
}


function floydWallshall() {

  // 거리 배열을 초기화 한다.
  for (var i = 1; i <= N; i++) {
    for (var j = 0; j < graph[i].length; j++) {
      var distance = graph[i][j][1];
      var end = graph[i][j][0]
      dist[i][end] = (dist[i][end] >= distance) ? distance : dist[i][end];
    }
  }

  for (var i = 1; i <= N; i++) {
    dist[i][i] = 0;
  }

  // 거처가는 노드
  for (var k = 1; k <= N; k++) {

    // 출발 노드
    for (var i = 1; i <= N; i++) {

      // 도착 노드
      for (var j = 1; j <= N; j++) {

        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }

      }
    }

  }
}

floydWallshall()

for (var i = 1; i < dist.length; i++) {
  dist[i].shift();
  for(var j = 0; j < dist[i].length; j++){
    if(dist[i][j] === Infinity){
      dist[i][j] = 0;
    }
  }
  console.log(dist[i].join(' '));
}
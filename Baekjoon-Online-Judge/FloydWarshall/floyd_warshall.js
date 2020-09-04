/* 
  플로이드 와샬 알고리즘
  다익스트라가 하나의 정점에서 다른 모든 정점으로의 최단경로를 구하는 알고리즘이면
  플로이드 와샬은 모든정점에서 모든정점으로의 최단경로를 구하는 알고리즘이다.
*/

var N = 4;
var graph = [
  [],
  [[2, 5],[4, 8]],
  [[1, 7], [3, 9]],
  [[1, 2], [4, 4]],
  [[3, 3]]
]

var dist = [];

function floydWallshall() {

  for (var i = 0; i <= N; i++) {
    var arr = [];
    for (var j = 1; j <= N; j++) {
      arr[j] = Infinity;
    }
    dist.push(arr);
  }

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
  for(var k = 1; k <= N; k++){

    // 출발 노드
    for(var i = 1; i <= N; i++){

      // 도착 노드
      for(var j = 1; j <= N; j++){

        if(dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]; 
        }

      }
    }

  }
}

floydWallshall()
console.log(dist);
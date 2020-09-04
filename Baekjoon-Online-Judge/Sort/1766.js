/* 
  백준알고리즘 1766번 문제집
  https://www.acmicpc.net/problem/1766
  // 위상정렬
*/

var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input.shift().split(' ').map(Number);
var N = temp[0];
var M = temp[1];

var graph = [];
var inDegree = [];

// 정점을 추가한다.
for (var i = 0; i <= N; i++) {
  graph.push([]);
  inDegree.push(0);
}

// 간선을 추가한다.
for (var i = 0; i < M; i++) {
  var edge = input[i].split(' ').map(Number);
  graph[edge[0]].push(edge[1]);
  inDegree[edge[1]]++;
}


function topologySort() {

  var now;
  while (true) {
    now = -1;
    for (var i = 1; i <= N; i++) {
      if (inDegree[i] == 0) {
        now = i;
        break;
      }
    }
    if (now == -1) break;
    inDegree[now]--;
    console.log(now);

    for (var next in graph[now]) {      
      inDegree[graph[now][next]]--;
    }

  }
}

topologySort()
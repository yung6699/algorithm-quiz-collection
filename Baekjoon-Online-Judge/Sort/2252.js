/* 
  백준알고리즘 2252번 줄세우기
  https://www.acmicpc.net/problem/2252
  // 위상정렬
*/

var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
var temp = input.shift().split(' ').map(Number);
var N = temp[0];
var M = temp[1];

var graph = [];
var inDegree = [];
var result = [];

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
  var queue = [];

  for (var i = 1; i <= N; i++) {
    if (inDegree[i] == 0) queue.push(i)
  }


  for (var i = 1; i <= N; i++) {

    var current = queue.shift();
    result[i] = current;

    var array = graph[current];

    for (var j = 0; j < array.length; j++) {
      inDegree[array[j]]--;
      if (inDegree[array[j]] == 0) {
        queue.push(array[j])
      }
    }
  }
}

topologySort()

for (var i = 1; i <= N; i++) {
  console.log(result[i]);
}